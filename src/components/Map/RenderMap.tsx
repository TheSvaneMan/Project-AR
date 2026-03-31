import "mapbox-gl/dist/mapbox-gl.css";
import { Geolocation } from "@capacitor/geolocation";
import "./RenderMap.css";
import mapboxgl from "mapbox-gl";
import { useEffect, useState, useRef } from "react";
import {
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonSearchbar,
  IonToggle,
} from "@ionic/react";
import { sunny } from "ionicons/icons";
import geojson from "./MapMarkerData";

const RenderMap: React.FC = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);

  const [location, setLocation] = useState<string | null>(null);
  const [currentLatitude, setCurrentLatitude] = useState<number>(-22.55941);
  const [currentLongitude, setCurrentLongitude] = useState<number>(17.08323);
  const [searchText, setSearchText] = useState("");

  const alertUser = () => {
    alert("Updated Preferences");
  };

  // Initialize Map
  useEffect(() => {
    if (map.current || !mapContainer.current) return;

    // Pulling the token from the Vite environment
    mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN;

    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/thesvaneman/cl0sggbkc000b15po2u9ovbbc",
      center: [currentLongitude, currentLatitude],
      zoom: 15,
    });

    map.current.on("load", () => {
      addMarkers();
    });

    return () => {
      map.current?.remove();
      map.current = null;
    };
  }, []);

  function addMarkers() {
    if (!map.current) return;

    for (const marker of geojson.features) {
      const defMarker = document.createElement("div");
      defMarker.className = "defCustomMarker";

      const postCard = document.createElement("div");
      postCard.className = "customMapMarker";

      const el = document.createElement("div");
      el.style.backgroundImage = `url(${marker.properties.image})`;
      el.style.width = `100%`;
      el.style.height = `100%`;
      el.style.backgroundSize = "100%";
      el.style.backgroundRepeat = `no-repeat`;

      postCard.appendChild(el);
      defMarker.appendChild(postCard);

      defMarker.addEventListener("click", () => {
        postCard.classList.toggle("customMapMarkerOpen");
      });

      new mapboxgl.Marker(defMarker)
        .setLngLat(marker.geometry.coordinates as [number, number])
        .addTo(map.current);
    }
  }

  const setCurrentPosition = async () => {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      const { latitude, longitude } = coordinates.coords;

      // Access key from Vite environment
      const accessKey = import.meta.env.VITE_POSITIONSTACK_ACCESS_KEY;
      const url = `https://api.positionstack.com/v1/reverse?access_key=${accessKey}&query=${latitude},${longitude}`;

      const response = await fetch(url);
      const data = await response.json();

      if (data.data && data.data[0]) {
        setLocation(data.data[0].label);
      }

      setCurrentLatitude(latitude);
      setCurrentLongitude(longitude);

      map.current?.flyTo({
        center: [longitude, latitude],
        essential: true,
      });
    } catch (e) {
      console.error("Error getting location", e);
    }
  };

  return (
    <>
      <div className="mapSettings" id="settingsToggle">
        <IonItem className="mapSwitch" lines="none">
          <IonIcon slot="start" icon={sunny} />
          <IonLabel>Show Nearby Art</IonLabel>
          <IonToggle slot="end" name="Show Art" onIonChange={alertUser} />
        </IonItem>
        <IonButton className="mapButton nftHunt">NFT Hunt</IonButton>
        <IonButton className="mapButton nftHunt" onClick={setCurrentPosition}>
          Display Current Location
        </IonButton>
        <IonSearchbar
          className="mapSearch"
          value={searchText}
          onIonChange={(e) => setSearchText(e.detail.value!)}
        />
        {location && <div className="locationLabel">{location}</div>}
      </div>
      <div ref={mapContainer} style={{ width: "100%", height: "100%" }} />
    </>
  );
};

export default RenderMap;

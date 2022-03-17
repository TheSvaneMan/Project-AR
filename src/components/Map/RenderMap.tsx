// The purpose of this component is to render the Mapbox map and assign a value to the map container
import 'mapbox-gl/dist/mapbox-gl.css';
import { Geolocation } from '@capacitor/geolocation';
import './RenderMap.css';
import mapboxgl from 'mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import { useEffect, useState } from 'react';
import { IonButton, IonContent } from '@ionic/react';

const RenderMap: React.FC<any> = () => {
    // Default Geo location is Windhoek, Namibia
    const [location, setLocation] = useState<any>();
    const [currentLatitude, setCurrentLatitude] = useState<any>(-22.55941);
    const [currentLongitude, setCurrentLongitude] = useState<any>(17.08323);

    useEffect(() => {
        // TO MAKE THE MAP APPEAR YOU MUST
        // ADD YOUR ACCESS TOKEN FROM
        // https://account.mapbox.com
        // IMPORTANT: Mask this auth key for MapBox access to geo-db
        mapboxgl.accessToken = 'pk.eyJ1IjoidGhlc3ZhbmVtYW4iLCJhIjoiY2wwczJ0bndhMDkyczNrcWtwemZrbGRpdiJ9.SvwyHaNaN0wH7RMl4XujfA';
        // Generate the map area before first render of the component
        const map = new mapboxgl.Map({
            container: 'map', // container ID
            style: 'mapbox://styles/thesvaneman/cl0sggbkc000b15po2u9ovbbc', // style URL
            center: [currentLongitude, currentLatitude], // starting position [lng, lat]
            zoom: 15 // starting zoom
        });

    });

    // Geo Location 
    const setCurrentPosition = async () => {
        // Get the GeoLocation coords
        const coordinates = await Geolocation.getCurrentPosition();
        const latitude = coordinates.coords.latitude;
        const longitude = coordinates.coords.longitude;
        // Save Location to post object
        await returnLocation(latitude, longitude);
    };

    async function returnLocation(latitude: any, longitude: any) {
        const key = 'b170d8f5abf840ad2fee65627ad65a29';
        const url = `http://api.positionstack.com/v1/reverse?access_key=${key}&query=${latitude},${longitude}`;
        const response = await fetch(url);
        const data = await response.json();
        const postLocation = data.data[0].label;

        console.log('API Geo response', postLocation);
        console.log('Current latitude:', latitude);
        console.log('Current longitude:', longitude);
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
        setLocation(postLocation);
    }
    return (
        <>
            <IonButton onClick={setCurrentPosition}>
                Display Current Location
            </IonButton>
            <div id="map">

            </div>
        </>
    )
}

export default RenderMap;
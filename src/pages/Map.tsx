import { IonButton, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSearchbar, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { settings, sunny } from 'ionicons/icons';
import { useState } from 'react';
import RenderMap from '../components/Map/RenderMap';

const Map: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [location, setLocation] = useState<any>();
  // Default Geo location is Windhoek, Namibia
  const [longitude, setLongitude] = useState<any>(17.08323);
  const [latitude, setLatitude] = useState<any>(-22.55941);
  // Will remain empty until we construct the post service
  //const [posts, setPosts] = useState([]);

  const alertUser = () => {
    alert("Updated Preferences");
  }

  function showSettings() {
    document.getElementById('settingsToggle')?.classList.toggle("settingsOpen");
  }

  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
        <IonIcon onClick={showSettings} icon={settings} />
      </IonHeader>
      <RenderMap />
    </IonPage>
  );
};

export default Map;

import { IonButton, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSearchbar, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { sunny } from 'ionicons/icons';
import { useState } from 'react';
import RenderMap from '../components/Map/RenderMap';
import './Map.css';

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

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Map</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonItem className='mapSwitch' lines="none">
        <IonIcon slot="start" icon={sunny} />
        <IonLabel>Show Nearby Art</IonLabel>
        <IonToggle slot="end" name="Show Art" onIonChange={alertUser} />
      </IonItem>
      <IonButton className='mapButton'>NFT Hunt</IonButton>
      <IonSearchbar className='mapSearch' value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
      <RenderMap />
    </IonPage>
  );
};

export default Map;

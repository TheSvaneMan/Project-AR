import { IonButton, IonHeader, IonIcon, IonItem, IonLabel, IonPage, IonSearchbar, IonTitle, IonToggle, IonToolbar } from '@ionic/react';
import { sunny } from 'ionicons/icons';
import { useState } from 'react';
import RenderMap from '../components/Map/RenderMap';
import './Map.css';

const Map: React.FC = () => {
  const [searchText, setSearchText] = useState('');

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
      <IonItem lines="none">
        <IonIcon slot="start" icon={sunny} />
        <IonLabel>Show Near by Art</IonLabel>
        <IonToggle slot="end" name="Show Art" onIonChange={alertUser} />
      </IonItem>
      <IonButton>NFT Hunt</IonButton>
      <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>

      <RenderMap />
    </IonPage>
  );
};

export default Map;

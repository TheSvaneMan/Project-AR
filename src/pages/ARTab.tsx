import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ARContainer from '../components/AR/ARContainer';

const ARTab: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>AR Tab</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">AR Tab</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard>
          <IonCardHeader>Unity AR Application</IonCardHeader>
          <IonCardContent>
            Unity embedded viewer, either UnityWebGL build or Native
          </IonCardContent>
        </IonCard>
        <ARContainer name={'AR Container'} />
      </IonContent>
    </IonPage>
  );
};

export default ARTab;

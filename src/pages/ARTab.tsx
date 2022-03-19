import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ARContainer from '../components/AR/ARContainer';

const ARTab: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">AR Tab</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className='arCard'>
          <IonCardHeader>Unity AR Application</IonCardHeader>
          <IonCardContent>
            Unity embedded viewer, either UnityWebGL build or Native
          </IonCardContent>
        </IonCard>
        <ARContainer name={''} />
      </IonContent>
    </IonPage>
  );
};

export default ARTab;

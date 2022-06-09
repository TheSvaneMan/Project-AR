import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ARContainer from '../components/AR/ARContainer';

const ARTab: React.FC = () => {
  return (
    <IonPage>
      
      <IonContent fullscreen>
        <IonHeader>
          <IonToolbar>
            <IonTitle size="large">AR Tab</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonCard className='arCard'>
          <IonCardHeader>Unity AR Application</IonCardHeader>
          <IonCardContent>
            On this page you can transition into the world of AR where you can add any of your NFT's into the real world or find other people NTF's.
          </IonCardContent>
        </IonCard>
        <ARContainer name={''} />
      </IonContent>
    </IonPage>
  );
};

export default ARTab;

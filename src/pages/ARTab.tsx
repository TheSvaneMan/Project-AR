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
            On this page you can add your posts in the real world by placing them in AR
          </IonCardContent>
        </IonCard>
        <ARContainer name={''} />
      </IonContent>
    </IonPage>
  );
};

export default ARTab;

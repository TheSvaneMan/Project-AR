import React from "react";
import {
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

const SettingsContainer: React.FC = () => {
  const takePhoto = async () => {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      });
      console.log("Photo taken:", image);
    } catch (error) {
      console.error("Camera cancelled or failed", error);
    }
  };

  return (
    <IonContent>
      <IonList>
        <IonItem>
          <IonLabel>
            <h2>Profile Settings</h2>
            <p>Manage your account preferences</p>
          </IonLabel>
        </IonItem>

        <IonItem lines="none">
          <IonButton expand="block" onClick={takePhoto}>
            <IonIcon slot="start" icon={camera} />
            Change Profile Picture
          </IonButton>
        </IonItem>
      </IonList>
    </IonContent>
  );
};

// This is the line that fixes your build error!
export default SettingsContainer;

import {
  IonButton,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonToggle,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { IonContent, IonInput, IonImg, useIonLoading } from "@ionic/react";
import { sunny } from "ionicons/icons";
import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getUserRef } from "../../firebase-config";
import { get, update } from "@firebase/database";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType } from "@capacitor/camera";
import { uploadString, ref, getDownloadURL } from "@firebase/storage";
import { storage } from "../../firebase-config";
import { Toast } from "@capacitor/toast";
import "./SettingsContainer.css";

const SettingsContainer = () => {
  const auth = getAuth();
  // I am scared to use type any here -> It could be null, we need to do some better error handling here.
  const [user, setUser] = useState<any>({});
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [imageFile, setImageFile] = useState<any>({});
  const [showLoader, dismissLoader] = useIonLoading();

  let storedTheme = localStorage.getItem("theme");
  if (storedTheme != null) {
    document.body.classList.add(storedTheme);
  }
  const toggleLightModeHandler = () => {
    if (storedTheme != null) {
      if (storedTheme === "light") {
        localStorage.setItem("theme", "dark");
        document.body.classList.add("dark");
        document.body.classList.remove("light");
      } else {
        localStorage.setItem("theme", "light");
        document.body.classList.add("light");
        document.body.classList.remove("dark");
      }
    } else {
      localStorage.setItem("theme", "light");
      document.body.classList.add("light");
    }
  };

  useEffect(() => {
    setUser(auth.currentUser);
    async function getUserDataFromDB() {
      const snapshot = await get(getUserRef(user.uid));
      const userData = snapshot.val();
      if (userData) {
        setName(userData.name);
        setTitle(userData.title);
        setImage(userData.image);
      }
    }
    if (user) getUserDataFromDB();
  }, [auth.currentUser, user]);

  function handleSignOut() {
    signOut(auth);
  }

  async function handleSubmit(event: any) {
    event.preventDefault();
    showLoader();

    const userToUpdate = {
      name: name,
      title: title,
      image: image,
    };

    if (imageFile.dataUrl) {
      const imageUrl = await uploadImage();
      userToUpdate.image = imageUrl;
    }

    await update(getUserRef(user.uid), userToUpdate);
    dismissLoader();
    await Toast.show({
      text: "User Profile saved!",
      position: "top",
    });
  }

  async function takePicture() {
    const imageOptions = {
      quality: 80,
      width: 500,
      allowEditing: true,
      resultType: CameraResultType.DataUrl,
    };
    let image: any;
    image = await Camera.getPhoto(imageOptions);
    setImageFile(image);
    setImage(image.dataUrl);
  }

  async function uploadImage() {
    const newImageRef = ref(storage, `${user.uid}.${imageFile.format}`);
    await uploadString(newImageRef, imageFile.dataUrl, "data_url");
    const url = await getDownloadURL(newImageRef);
    return url;
  }
  // --------- Handle OnChangeEvents ------------- //
  function handleSetName(event: any) {
    setName(event.currentTarget.value);
  }

  function handleSetTitle(event: any) {
    setTitle(event.currentTarget.value);
  }
  console.log("Settings Tab running");
  return (
    <IonContent>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Profile</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonList className="settingsTopButtons">
        <IonItem lines="none">
          <IonIcon slot="start" icon={sunny} />
          <IonLabel>Light Mode</IonLabel>
          <IonToggle
            slot="end"
            name="lightMode"
            onIonChange={toggleLightModeHandler}/>
        </IonItem>
        <IonItem lines="none">

            <IonButton className="logOutButton" onClick={handleSignOut}>Log Out</IonButton>

        </IonItem>
      </IonList>
      <IonItem>
        <IonLabel>Mail:</IonLabel>
        {user?.email}
      </IonItem>
      <form onSubmit={handleSubmit}>
        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonInput
            value={name}
            type="text"
            placeholder="Type your name"
            onIonChange={(e) => handleSetName(e)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="stacked">Title</IonLabel>
          <IonInput
            value={title}
            type="text"
            placeholder="Type your title"
            onIonChange={(e) => handleSetTitle(e)}
          />
        </IonItem>
        <IonItem onClick={takePicture} lines="none">
          <IonLabel>Choose Image</IonLabel>
          <IonButton>
            <IonIcon slot="icon-only" icon={camera} />
          </IonButton>
        </IonItem>
        {image && (
          <IonImg className="ion-padding" src={image} onClick={takePicture} />
        )}
        <div className="ion-padding">
          <IonButton type="submit" expand="block">
            Save User
          </IonButton>
        </div>
      </form>
    </IonContent>
  );
};

export default SettingsContainer;

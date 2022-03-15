// 2 errors in Typescript so we changed to JavaScript

import { IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon, IonImg } from '@ionic/react';
import './AddPost.css';
import { useState } from "react";
import { Camera, CameraResultType, Photo } from "@capacitor/camera";
import { camera } from "ionicons/icons";

export default function AddPost() {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState({});

    const submitEvent = () => {
        const formData = { title: title, body: body, image: imageFile };
        setPost(formData);
    }

    async function takePicture() {
        const imageOptions = {
            quality: 80,
            width: 500,
            allowEditing: true,
            resultType: CameraResultType.DataUrl
        };

        const imageFromCamera = await Camera.getPhoto(imageOptions);
        setImageFile(imageFromCamera);
        setImage(imageFromCamera.dataUrl);
    }
    return (
        <form onSubmit={submitEvent}>
            <IonItem>
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput
                    value={title}
                    placeholder="Give your image a title"
                    onIonChange={e => setTitle(e.target.value)}
                    required
                />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Description</IonLabel>
                <IonTextarea
                    value={body}
                    placeholder="Tell us about your image"
                    onIonChange={e => setBody(e.target.value)}
                    required
                />
            </IonItem>
            <IonItem onClick={takePicture} lines="none">
                <IonLabel>Choose Image</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={camera} />
                </IonButton>
            </IonItem>
            {image && <IonImg className="ion-padding" src={image} onClick={takePicture} />}

            <div className="ion-padding">
                {image && title && body ? (
                    <IonButton expand="block">Save</IonButton>
                ) : (
                    <IonButton onClick={submitEvent} type="submit" expand="block" disabled>
                        Save
                    </IonButton>
                )}
            </div>
        </form>
    );
}



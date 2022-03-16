// 2 errors in Typescript so we changed to JavaScript

import { IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon, IonImg, IonPage } from '@ionic/react';
import './AddPost.css';
import { useState } from "react";
import { Camera, CameraResultType, Photo } from "@capacitor/camera";
import { camera } from "ionicons/icons";

const AddPost = () => {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState<any>();
    const [imageFile, setImageFile] = useState<any>();

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

    // State Handlers
    function handleSetTtitle(event: any) {
        setTitle(event.currentTarget.value);
    }

    function handleSetBody(event: any) {
        setBody(event.currentTarget.value);
    }
    return (
        <IonPage>
            <form onSubmit={submitEvent}>
                <IonItem>
                    <IonLabel position="stacked">Title</IonLabel>
                    <IonInput
                        value={title}
                        placeholder="Give your image a title"
                        onIonChange={e => handleSetTtitle(e)}
                        required
                    />
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Description</IonLabel>
                    <IonTextarea
                        value={body}
                        placeholder="Tell us about your image"
                        onIonChange={e => handleSetBody(e)}
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
        </IonPage>

    );
}

export default AddPost;

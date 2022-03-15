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
        
            <IonItem>
                <IonLabel position="stacked">Collection</IonLabel>
            </IonItem>
            
    );
}



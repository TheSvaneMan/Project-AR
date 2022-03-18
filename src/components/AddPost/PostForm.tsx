import { IonItem, IonLabel, IonInput, IonTextarea, IonImg, IonButton, IonIcon } from "@ionic/react";
import { useState, useEffect } from "react";
import { Geolocation } from '@capacitor/geolocation';
import { Camera, CameraResultType } from "@capacitor/camera";
import { camera, compassSharp } from "ionicons/icons";

export default function PostForm({ post, handleSubmit }: any) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState<any>("");
    const [imageFile, setImageFile] = useState({});
    // No default location
    const [location, setLocation] = useState<any>();
    const [currentLatitude, setCurrentLatitude] = useState<any>();
    const [currentLongitude, setCurrentLongitude] = useState<any>();


    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);
        }
    }, [post]);

    function submitEvent(event: any) {
        event.preventDefault();
        const formData = { title: title, body: body, image: imageFile, location: { longitude: currentLongitude, latitude: currentLatitude } };
        handleSubmit(formData);
    }

    async function takePicture() {
        const imageOptions = {
            quality: 80,
            width: 500,
            allowEditing: true,
            resultType: CameraResultType.DataUrl
        };
        const image = await Camera.getPhoto(imageOptions);
        setImageFile(image);
        setImage(image.dataUrl);
    }

    // ------------ Geo Location ------------------- //
    const setCurrentPosition = async () => {
        // Get the GeoLocation coords
        const coordinates = await Geolocation.getCurrentPosition();
        const latitude = coordinates.coords.latitude;
        const longitude = coordinates.coords.longitude;
        // Save Location to post object
        await returnLocation(latitude, longitude);
    };

    async function returnLocation(latitude: any, longitude: any) {
        const key = 'b170d8f5abf840ad2fee65627ad65a29';
        const url = `http://api.positionstack.com/v1/reverse?access_key=${key}&query=${latitude},${longitude}`;
        const response = await fetch(url);
        const data = await response.json();
        const postLocation = data.data[0].label;

        console.log('API Geo response', postLocation);
        console.log('Current latitude:', latitude);
        console.log('Current longitude:', longitude);
        setCurrentLatitude(latitude);
        setCurrentLongitude(longitude);
        setLocation(postLocation);
    }

    // --------- Handle OnChangeEvents ------------- //
    function handleSetTitle(event: any) {
        setTitle(event.currentTarget.value);
    }

    function handleSetBody(event: any) {
        setBody(event.currentTarget.value);
    }

    return (
        <form onSubmit={submitEvent}>
            <IonItem>
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput
                    value={title}
                    placeholder="Type the title of your image"
                    onIonChange={(e: any) => handleSetTitle(e)}
                    required
                />
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Description</IonLabel>
                <IonTextarea
                    value={body}
                    placeholder="Tell us about your image"
                    onIonChange={(e: any) => handleSetBody(e)}
                    required
                />
            </IonItem>
            <IonItem onClick={takePicture} lines="none">
                <IonLabel>Choose Image</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={camera} />
                </IonButton>
            </IonItem>
            <hr />
            <IonItem onClick={setCurrentPosition} lines="none">
                <IonLabel>Add current location</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={compassSharp} />
                </IonButton>
            </IonItem>
            <hr />
            {image && <IonImg className="ion-padding" src={image} onClick={takePicture} />}

            <>
                {image && title && body ? (
                    <IonButton expand="block">Save</IonButton>
                ) : (
                    <IonButton type="submit" expand="block" disabled>
                        Save
                    </IonButton>
                )}
            </>
        </form>
    );
}

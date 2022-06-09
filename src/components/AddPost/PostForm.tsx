import { IonItem, IonLabel, IonInput, IonTextarea, IonImg, IonButton, IonIcon, useIonToast } from "@ionic/react";
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
    const [present, dismiss] = useIonToast();
    

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);
        }
    }, [post]);

    function submitEvent(event: any) {
        event.preventDefault();
        let formData;
        if (currentLatitude && currentLongitude) {
            formData = { title: title, body: body, image: imageFile, location: { longitude: currentLongitude, latitude: currentLatitude } };
        }
        else {
            formData = { title: title, body: body, image: imageFile };
        }
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

        present({
            buttons: [{ text: 'hide', handler: () => dismiss() }],
            message: 'location added',
            duration: 3000,
            position: 'top',
        })
    }

    // --------- Handle OnChangeEvents ------------- //
    function handleSetTitle(event: any) {
        setTitle(event.currentTarget.value);
    }

    function handleSetBody(event: any) {
        setBody(event.currentTarget.value);
    }

    return (
        <form className="addForm" onSubmit={submitEvent}>
            <IonItem className="addField">
                <IonLabel position="stacked">Title</IonLabel>
                <IonInput
                    value={title}
                    placeholder="Type the title of your image"
                    onIonChange={(e: any) => handleSetTitle(e)}
                    required
                />
            </IonItem>
            <IonItem className="addField">
                <IonLabel position="stacked">Description</IonLabel>
                <IonTextarea
                    value={body}
                    placeholder="Tell us about your image"
                    onIonChange={(e: any) => handleSetBody(e)}
                    required
                />
            </IonItem>
            <IonItem className="addFieldS" onClick={takePicture} lines="none">
                <IonLabel>Choose Image</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={camera} />
                </IonButton>
            </IonItem>
            
            <IonItem className="addFieldS" onClick={setCurrentPosition} lines="none">
                <IonLabel>Add current location</IonLabel>
                <IonButton>
                    <IonIcon slot="icon-only" icon={compassSharp} />
                </IonButton>
            </IonItem>
            <hr />
            {image && <IonImg className="ion-padding" src={image} onClick={takePicture} />}

            <>
                {image && title && body ? (
                    <IonButton className="addButton" expand="block">Save</IonButton>
                ) : (
                    <IonButton className="addButton" type="submit" expand="block" disabled>
                        Save
                    </IonButton>
                )}
            </>
        </form>
    );
}

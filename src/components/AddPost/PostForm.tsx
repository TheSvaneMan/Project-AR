import { IonItem, IonLabel, IonInput, IonTextarea, IonImg, IonButton, IonIcon } from "@ionic/react";
import { useState, useEffect } from "react";
import { Camera, CameraResultType } from "@capacitor/camera";
import { camera } from "ionicons/icons";

export default function PostForm({ post, handleSubmit }: any) {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState<any>("");
    const [imageFile, setImageFile] = useState({});

    useEffect(() => {
        if (post) {
            setTitle(post.title);
            setBody(post.body);
            setImage(post.image);
        }
    }, [post]);

    function submitEvent(event: any) {
        event.preventDefault();
        const formData = { title: title, body: body, image: imageFile };
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

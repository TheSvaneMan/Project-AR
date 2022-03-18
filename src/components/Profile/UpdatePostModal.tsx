import { IonButton, IonHeader, IonToolbar, IonTitle, IonButtons, IonContent, useIonLoading } from "@ionic/react";
import PostForm from '../AddPost/PostForm';
import { getPostRef } from "../../firebase-config";
import { update } from "firebase/database";
import { storage } from "../../firebase-config";
import { uploadString, ref, getDownloadURL } from "@firebase/storage";

export default function UpdatePostModal({ post, dismiss }: any) {
    const [showLoader, dismissLoader] = useIonLoading();

    async function updatePost(postToUpdate: any) {
        showLoader();
        if (postToUpdate.image.dataUrl) {
            const imageUrl = await uploadImage(postToUpdate.image, post.id);
            postToUpdate.image = imageUrl;
        } else {
            delete postToUpdate.image;
        }
        console.log(postToUpdate);
        await update(getPostRef(post.id), postToUpdate);
        dismiss();
        dismissLoader();
    }

    async function uploadImage(imageFile: { format: any; dataUrl: string; }, postKey: any) {
        const newImageRef = ref(storage, `${postKey}.${imageFile.format}`);
        await uploadString(newImageRef, imageFile.dataUrl, "data_url");
        const url = await getDownloadURL(newImageRef);
        return url;
    }

    return (
        <IonContent>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="secondary">
                        <IonButton onClick={() => dismiss()}>Cancel</IonButton>
                    </IonButtons>
                    <IonTitle>Edit Post</IonTitle>
                </IonToolbar>
            </IonHeader>
            <PostForm post={post} handleSubmit={updatePost} />
        </IonContent>
    );
}

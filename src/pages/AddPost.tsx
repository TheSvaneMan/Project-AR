import { IonPage, useIonLoading, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useHistory } from 'react-router';
import { getAuth } from '@firebase/auth';
import { postsRef, storage } from '../firebase-config';
import { uploadString, ref, getDownloadURL } from "@firebase/storage";
import { push, set } from '@firebase/database';
import { Toast } from '@capacitor/toast';
import PostForm from '../components/AddPost/PostForm';

const AddPost = () => {
    const history = useHistory();
    const [showLoader, dismissLoader] = useIonLoading();
    const auth = getAuth();

    async function handleSubmit(newPost: any) {
        showLoader();
        newPost.uid = auth.currentUser!.uid; // default user id added
        const newPostRef = push(postsRef); // push new to get reference and new id/key
        const newPostKey = newPostRef.key; // key from reference
        const imageUrl = await uploadImage(newPost.image, newPostKey);
        newPost.image = imageUrl;
        set(newPostRef, newPost)
            .then(() => {
                history.replace("/collection");
                Toast.show({
                    text: "New post created!"
                });
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                dismissLoader();
            });
    }

    async function uploadImage(imageFile: any, postKey: any) {
        const newImageRef = ref(storage, `${postKey}.${imageFile.format}`);
        await uploadString(newImageRef, imageFile.dataUrl, "data_url");
        const url = await getDownloadURL(newImageRef);
        return url;
    }

    return (
        <IonPage>
            
            <IonHeader>
                    <IonToolbar>
                        <IonTitle size="large">Create New Post</IonTitle>
                    </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <PostForm handleSubmit={handleSubmit} />
            </IonContent>
        </IonPage>
    );
}

export default AddPost;

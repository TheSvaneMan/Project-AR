import {
  IonPage,
  useIonLoading,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/react";
import { useHistory } from "react-router-dom"; // Swapped from useNavigate
import { getAuth } from "firebase/auth";
import { postsRef, storage } from "../firebase-config";
import { uploadString, ref, getDownloadURL } from "firebase/storage";
import { push, set } from "firebase/database";
import { Toast } from "@capacitor/toast";
import PostForm from "../components/AddPost/PostForm";

const AddPost: React.FC = () => {
  const history = useHistory(); // Swapped
  const [present, dismiss] = useIonLoading();
  const auth = getAuth();

  async function handleSubmit(newPost: any) {
    await present({ message: "Creating post..." });
    try {
      newPost.uid = auth.currentUser?.uid;
      const newPostRef = push(postsRef);
      const newPostKey = newPostRef.key;

      const imageUrl = await uploadImage(newPost.image, newPostKey);
      newPost.image = imageUrl;

      await set(newPostRef, newPost);

      // v5 syntax for navigation
      history.replace("/collection");

      await Toast.show({ text: "New post created!" });
    } catch (error) {
      console.error(error);
    } finally {
      await dismiss();
    }
  }

  async function uploadImage(imageFile: any, postKey: any) {
    const newImageRef = ref(storage, `${postKey}.${imageFile.format}`);
    await uploadString(newImageRef, imageFile.dataUrl, "data_url");
    return await getDownloadURL(newImageRef);
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
};

export default AddPost;

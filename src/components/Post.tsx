import {
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonItem
} from "@ionic/react"
import { deleteDoc, updateDoc } from "firebase/firestore";


const delete = async (id) => {
    const posts = doc(db, "posts", id);
    await deleteDoc(posts);
}
 
const edit = async (id, image, title, body) => {
    const posts = doc(db, "posts", id);
    const newValues = { newImage, newTitle, newBody };
    await updateDoc(posts);
}



export default function PostListItem({ post }: any) {
    return (
        <IonCard>
            <IonItem lines="none">
            </IonItem>
            <IonImg className="post-img" src={post.image} />
            <IonCardHeader>
                <IonCardTitle>
                    <h4>{post.title}</h4>
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{post.body}</IonCardContent>
            <IonButton className='' onClick={() => { edit(post.id) }}>Edit</IonButton>
			<IonButton className='' onClick={() => { delete(post.id) }}>Delete</IonButton>
        </IonCard>
    );
}

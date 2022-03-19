import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonItem,
    IonButton,
    IonIcon,
    useIonAlert,
    useIonActionSheet,
    useIonModal,
    IonAvatar,
    IonLabel
} from "@ionic/react";
import { ellipsisHorizontalOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { Toast } from "@capacitor/toast";
import { remove } from "@firebase/database";
import { ref, deleteObject } from "@firebase/storage";
import { getAuth } from "firebase/auth";
import placeholder from "../assets/placeholder.png"; import "./ProfilePostCard.css";
import UpdatePostModal from './UpdatePostModal';
import { getPostRef, storage } from '../../firebase-config';

const ProfileCardItem = ({ post }: any) => {
    const [presentActionSheet] = useIonActionSheet();
    const [presentDeleteDialog] = useIonAlert();
    const [presentUpdateModal, dismissUpdateModal] = useIonModal(
        <UpdatePostModal post={post} dismiss={handleDismissUpdateModal} />
    );
    const history = useHistory();
    const currentUserId = getAuth().currentUser!.uid;
    function showActionSheet(event: any) {
        event.preventDefault();
        presentActionSheet({
            buttons: [
                { text: "Edit", handler: presentUpdateModal },
                { text: "Delete", role: "destructive", handler: showDeleteDialog },
                { text: "Cancel", role: "cancel" }
            ]
        });
    }

    function showDeleteDialog() {
        presentDeleteDialog({
            header: "Delete Post",
            message: "Do you want to delete post?",
            buttons: [{ text: "No" }, { text: "Yes", role: "destructive", handler: deletePost }]
        });
    }

    function handleDismissUpdateModal() {
        dismissUpdateModal();
    }

    async function deletePost() {
        let imageName = post.image.split("/").pop();
        imageName = imageName.split("?alt")[0];
        const imageRef = ref(storage, imageName);
        await deleteObject(imageRef);
        remove(getPostRef(post.id));

        await Toast.show({
            text: "Post deleted!",
            position: "center"
        });
    }

    function goToUserDetailView() {
        history.push(`users/${post.uid}`);
    }
    return (
        <IonCard key={post.id} className="profilePost">
            <IonCardHeader className="profilePostHeader">
                <IonCardTitle>
                    <h1>
                        {post.title}
                    </h1>
                </IonCardTitle>
                {
                    post.uid == currentUserId && (

                        <IonButton color='tertiary' onClick={showActionSheet}>
                            <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline} />
                        </IonButton>
                    )
                } </IonCardHeader>

            <IonCardContent>
                <p>{post.body}</p>
                <hr />
                <IonImg src={post.image} alt={post.content} className="profilePostImg" />
            </IonCardContent>
        </IonCard>
    )
}

export default ProfileCardItem;
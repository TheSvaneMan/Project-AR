import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonButton,
  IonIcon,
  useIonAlert,
  useIonActionSheet,
  useIonModal,
} from "@ionic/react";
import { ellipsisHorizontalOutline } from "ionicons/icons";
import { useNavigate } from "react-router-dom";
import { Toast } from "@capacitor/toast";
import { remove } from "firebase/database";
import { ref, deleteObject } from "firebase/storage";
import { getAuth } from "firebase/auth";
import "./ProfilePostCard.css";
import UpdatePostModal from "./UpdatePostModal";
import { getPostRef, storage } from "../../firebase-config";

const ProfileCardItem = ({ post }: any) => {
  const navigate = useNavigate();
  const [presentActionSheet] = useIonActionSheet();
  const [presentDeleteDialog] = useIonAlert();

  const handleDismissUpdateModal = () => dismissUpdateModal();

  const [presentUpdateModal, dismissUpdateModal] = useIonModal(
    <UpdatePostModal post={post} dismiss={handleDismissUpdateModal} />,
  );

  const currentUserId = getAuth().currentUser?.uid;

  function showActionSheet(event: any) {
    event.preventDefault();
    presentActionSheet({
      buttons: [
        { text: "Edit", handler: () => presentUpdateModal() },
        { text: "Delete", role: "destructive", handler: showDeleteDialog },
        { text: "Cancel", role: "cancel" },
      ],
    });
  }

  function showDeleteDialog() {
    presentDeleteDialog({
      header: "Delete Post",
      message: "Do you want to delete post?",
      buttons: [
        { text: "No" },
        { text: "Yes", role: "destructive", handler: deletePost },
      ],
    });
  }

  async function deletePost() {
    try {
      let imageName = post.image.split("/").pop().split("?alt")[0];
      const imageRef = ref(storage, imageName);
      await deleteObject(imageRef);
      await remove(getPostRef(post.id));
      await Toast.show({ text: "Post deleted!", position: "center" });
    } catch (error) {
      console.error("Delete failed", error);
    }
  }

  return (
    <IonCard className="profilePost">
      <IonCardHeader className="profilePostHeader">
        <IonCardTitle>
          <h1>{post.title}</h1>
        </IonCardTitle>
        {post.uid === currentUserId && (
          <IonButton color="tertiary" onClick={showActionSheet}>
            <IonIcon slot="icon-only" icon={ellipsisHorizontalOutline} />
          </IonButton>
        )}
      </IonCardHeader>
      <IonCardContent>
        <p>{post.body}</p>
        <hr />
        {/* We use the absolute path to the public folder here */}
        <IonImg
          src={post.image || "/assets/placeholder.png"}
          className="profilePostImg"
        />
      </IonCardContent>
    </IonCard>
  );
};

export default ProfileCardItem;

import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonButton
} from "@ionic/react";

import UnityIonicPlugin from '../components/AR/UnityIonicPlugin';

const viewPostAR = async (objectName: any) => {
    const { value } = await UnityIonicPlugin.startUnityFromPost({
        value: 'Launch Unity Activity',
    });
    console.log('Response from native', value);
};
const author = "Author";



export default function PostListItem({ post }: any) {
    let name = "Anonymous"
    if (post.user != null) {
        name = post.user.name;
    }
    return (
        <IonCard className="postCard">
            <IonImg className="post-img" src={post.image} />
            <IonCardHeader class="postHeader">
                <IonCardTitle className="postTitle">
                    <h4>{post.title}</h4>
                </IonCardTitle>
                <IonCardTitle className="postAuthor">
                    <h4>By {name}</h4>
                </IonCardTitle>
            </IonCardHeader>
            <IonCardContent>{post.body}</IonCardContent>
            <IonButton className='arButtonMargin' onClick={() => viewPostAR(post.image)}>
                Open Post
            </IonButton>
        </IonCard>
    );
}



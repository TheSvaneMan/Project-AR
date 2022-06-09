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


export default function PostListItem({ post }: any) {
    return (
        <IonCard className="postCard">
            <IonImg className="post-img" src={post.image} />
            <IonCardHeader>
                <IonCardTitle className="postTitle">
                    <h4>{post.title}</h4>
                </IonCardTitle>
            </IonCardHeader>
            <IonButton className='arButtonMargin' onClick={() => viewPostAR(post.image)}>
                Open Post
            </IonButton>
            <IonCardContent>{post.body}</IonCardContent>
        </IonCard>
    );
}



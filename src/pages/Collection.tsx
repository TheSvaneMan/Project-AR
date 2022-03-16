// 2 errors in Typescript so we changed to JavaScript

import { IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonIcon, IonImg, IonPage, IonHeader, IonContent, IonCard, IonCardContent, IonCardHeader } from '@ionic/react';
import './Collection.css';
import { useState } from "react";

export default function AddPost() {
    const [post, setPost] = useState({});
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [image, setImage] = useState("");
    const [imageFile, setImageFile] = useState({});

    return (
        <IonPage>
            <IonHeader>
                <IonLabel position="stacked">Collection Page</IonLabel>
            </IonHeader>
            <div className="collectionContainer">
                {randomPostContent.map((post) => {
                    return (
                        <IonCard key={post.id}>
                            <IonCardHeader>{post.name}</IonCardHeader>
                            <IonImg src={post.img}></IonImg>
                            <IonCardContent>
                                <h3>{post.description}</h3>
                            </IonCardContent>
                        </IonCard>
                    )
                })}
            </div>

        </IonPage>
    );
}

const randomPostContent = [
    {
        id: '1',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/309t2yt7ueGbOwudPFqOnNOL2Sqz_vjhC50XygLmugI/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5t/cG1SYk1tQVV3dlBN/bmJQMmpqZzZ3SGFF/SyZwaWQ9QXBp',
        description: 'Filler Content'
    }, {
        id: '2',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/CmPUBgB0J-9tmKkncUqPGq_eiTXfgH0scgzeo8qQEZ4/rs:fit:844:225:1/g:ce/aHR0cHM6Ly90c2Uz/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5j/bXVaUkZXS3Y2UjFR/aWpXY3Q1bUZBSGFF/SyZwaWQ9QXBp',
        description: 'Filler Content'
    }, {
        id: '3',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/Cn_ggl8Jxo3wYBnS5GUOFJDoiyVUtbrsNVw8HvTGNSg/rs:fit:731:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5x/dHhfWGRXS083MHBk/VkZLaXlJUXd3SGFF/eiZwaWQ9QXBp',
        description: 'Filler Content'
    },
    {
        id: '4',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/hFbp9tcBj1Ch3oZIAKa9v4uJFMjzyIaGgixeU6RC4H8/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC4z/bG56OXVHeGhUV0xu/LXNCVWQtd2VRSGFF/OCZwaWQ9QXBp',
        description: 'Filler Content'
    },
    {
        id: '5',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/fh5s94IwYIocR3ZnvlG9hJwOu5YCj6bNpIh5oI-Sqlo/rs:fit:564:225:1/g:ce/aHR0cHM6Ly90c2U0/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5U/aHNfOVdOUk9PMEtE/cmpuc2ZQaDF3SGFH/TyZwaWQ9QXBp',
        description: 'Filler Content'
    },
    {
        id: '6',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/ZUjMGxXjLih-dGzbqEL5hZkZkDj6R0oFPn_4gXW-xdQ/rs:fit:379:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5S/Z1JiY043bWRTS1I5/X2Y2cktKdWx3SGFK/USZwaWQ9QXBp',
        description: 'Filler Content'
    },
    {
        id: '7',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/2A3UNK75R4ixrSCWGVbsMv3LWSGjC6XFygX8HcVHLhI/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93d3cu/cmVhZGVyc2RpZ2Vz/dC5jYS93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMC8wOS93b21h/bi13aG8td3Jlc3Rs/ZWQtY291Z2FyLXNj/YWxlZC5qcGc',
        description: 'Filler Content'
    },
    {
        id: '8',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/FxTGjjYC4nkKD0KWU5JkVNtDIC9oJRlFJgQJwygr4P8/rs:fit:1200:930:1/g:ce/aHR0cHM6Ly95YWxs/a25vd3doYXQuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE4/LzA1L2NvdWdhci5q/cGc',
        description: 'Filler Content'
    },
    {
        id: '9',
        name: 'Get the bag',
        title: 'Animal',
        img: 'https://imgs.search.brave.com/Y31gcuD9iwF4fNvjWwxcIpFLWk67Rbw5PQPJWRnIOfc/rs:fit:1200:1200:1/g:ce/aHR0cHM6Ly93YWxs/c2Rlc2suY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDE2LzEw/L1BpY3R1cmVzLW9m/LUNvdWdhci0uanBn',
        description: 'Filler Content'
    },
]


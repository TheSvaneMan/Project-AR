import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


export default function SignUpPage() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const auth = getAuth();

    function handleSubmit(event: any) {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, mail, password).then(userCredential => {
            //Sign in
            const user = userCredential.user;
            console.log(user);
        }
        ).catch(error => {
            console.log(error)
        })
    }

    // --------- Handle OnChangeEvents ------------- //
    function handleSetMail(event: any) {
        setMail(event.currentTarget.value);
    }

    function handleSetPassword(event: any) {
        setPassword(event.currentTarget.value);
    }

    return (
        <IonPage className="sign-up-page">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        SignUp
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <form onSubmit={handleSubmit}>
                    <IonItem>
                        <IonLabel position="stacked">Mail</IonLabel>
                        <IonInput
                            value={mail}
                            type="email"
                            placeholder="Type your mail"
                            onIonChange={e => handleSetMail(e)}
                        />
                    </IonItem>
                    <IonItem>
                        <IonLabel position="stacked">Password</IonLabel>
                        <IonInput
                            value={password}
                            type="password"
                            placeholder="Type your password"
                            onIonChange={e => handleSetPassword(e)}
                        />
                    </IonItem>
                    <div className="ion-padding">
                        <IonButton type="submit" expand="block">
                            Sign up
                        </IonButton>
                    </div>
                    <div className="ion-text-center">
                        <IonButton size="small" fill="clear" onClick={() => history.replace("/signin")}>
                            Go back to sign in
                        </IonButton>
                    </div>
                </form>
            </IonContent>
        </IonPage>
    )
}
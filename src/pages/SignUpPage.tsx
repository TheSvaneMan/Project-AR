import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    useIonToast
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUpPage.css";

export default function SignUpPage() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const auth = getAuth();
    const [present, dismiss] = useIonToast();

    function handleSubmit(event: any) {
        event.preventDefault();
        createUserWithEmailAndPassword(auth, mail, password).then(userCredential => {
            //Sign in
            const user = userCredential.user;
            console.log(user);
        }
        ).catch(error => {
            if (error.code === "auth/email-already-in-use") {
                present({
                    buttons: [{ text: 'hide', handler: () => dismiss() }],
                    message: 'email already in use',
                    duration: 3000,
                    position: 'top',
                })
            }
            if (error.code === "auth/weak-password") {
                present({
                    buttons: [{ text: 'hide', handler: () => dismiss() }],
                    message: 'password should be at leat 6 characters',
                    duration: 3000,
                    position: 'top',
                })
            }
            if (error.code === "auth/invalid-email") {
                present({
                    buttons: [{ text: 'hide', handler: () => dismiss() }],
                    message: 'email is not correct',
                    duration: 3000,
                    position: 'top',
                })
            }
            if (error.code === "auth/internal-error") {
                present({
                    buttons: [{ text: 'hide', handler: () => dismiss() }],
                    message: 'password is missing',
                    duration: 3000,
                    position: 'top',
                })
            }
            console.log(error);
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
                        Sign Up
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            <div className='signUpContent'>
                <form onSubmit={handleSubmit}>
                    <div className="signUpFormInner">
                        <h3>Project AR</h3>
                        <p>Sign Up to start your next big mixed-reality adventure</p>
                    </div>
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
                        <IonButton color='primary-contrast' className="changeSign" size="small" onClick={() => history.replace("/signin")}>
                            Go back to sign in
                        </IonButton>
                    </div>
                </form>
            </div>
        </IonPage>
    )
}
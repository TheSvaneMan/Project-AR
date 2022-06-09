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
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignInPage.css";

export default function SignInPage() {
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    const auth = getAuth();
    const [present, dismiss] = useIonToast();

    function handleSubmit(event: any) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, mail, password)
            .then(userCredential => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch(error => {
                if (error.code === "auth/user-not-found") {
                    present({
                        buttons: [{ text: 'hide', handler: () => dismiss() }],
                        message: 'wrong email',
                        duration: 3000,
                        position: 'top',
                    })
                }
                if (error.code === "auth/wrong-password") {
                    present({
                        buttons: [{ text: 'hide', handler: () => dismiss() }],
                        message: 'wrong password',
                        duration: 3000,
                        position: 'top',
                    })
                }
                console.log(error);
            });
    }

    let visited = localStorage.getItem("vistited");
    if (visited == null) {
        present({
            buttons: [{ text: 'sign up', handler: () => history.replace("/signup") }],
            message: 'Do you need an account?',
            duration: 5000,
            position: 'top',
        });
        localStorage.setItem("vistited", "true");
    }

    // --------- Handle OnChangeEvents ------------- //
    function handleSetMail(event: any) {
        setMail(event.currentTarget.value);
    }

    function handleSetPassword(event: any) {
        setPassword(event.currentTarget.value);
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Log In</IonTitle>
                </IonToolbar>
            </IonHeader>
            <div className='signInContent'>
                <form onSubmit={handleSubmit} className='signInForm'>
                    <div className="signInFormInner">
                        <h3>Project AR</h3>
                        <p>The Portal to your next big adventure</p>
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
                            Sign in
                        </IonButton>
                    </div>
                    <div className="ion-text-center">
                        <IonButton color='primary-contrast' className="changeSign" size="small" onClick={() => history.replace("/signup")}>
                            Sign Up
                        </IonButton>
                    </div>
                </form>
            </div>
        </IonPage>
    );
}
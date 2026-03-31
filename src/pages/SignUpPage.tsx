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
  useIonToast,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "./SignUpPage.css";

export default function SignUpPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const auth = getAuth();
  const [present, dismiss] = useIonToast();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, mail, password)
      .then(() => {
        history.replace("/collection"); // Updated syntax
      })
      .catch((error) => {
        let message = "Registration failed";
        if (error.code === "auth/email-already-in-use")
          message = "Email already in use";

        present({
          buttons: [{ text: "hide", handler: () => dismiss() }],
          message: message,
          duration: 3000,
          position: "top",
        });
      });
  }

  return (
    <IonPage className="sign-up-page">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <div className="signUpContent">
        <form onSubmit={handleSubmit}>
          <div className="signUpFormInner">
            <h3>Project AR</h3>
            <p>Sign Up to start your next adventure</p>
          </div>
          <IonItem>
            <IonLabel position="stacked">Mail</IonLabel>
            <IonInput
              value={mail}
              type="email"
              placeholder="Type your mail"
              onIonChange={(e) => setMail(e.detail.value!)}
            />
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Password</IonLabel>
            <IonInput
              value={password}
              type="password"
              placeholder="Type your password"
              onIonChange={(e) => setPassword(e.detail.value!)}
            />
          </IonItem>
          <div className="ion-padding">
            <IonButton type="submit" expand="block">
              Sign up
            </IonButton>
          </div>
          <div className="ion-text-center">
            <IonButton
              fill="clear"
              size="small"
              onClick={() => history.push("/signin")}
            >
              Go back to sign in
            </IonButton>
          </div>
        </form>
      </div>
    </IonPage>
  );
}

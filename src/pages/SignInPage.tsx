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
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom"; // Swapped from useNavigate
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignInPage.css";

export default function SignInPage() {
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // Swapped
  const auth = getAuth();
  const [present] = useIonToast();

  useEffect(() => {
    let visited = localStorage.getItem("visited");
    if (!visited) {
      present({
        buttons: [
          {
            text: "sign up",
            handler: () => history.replace("/signup"), // Updated syntax
          },
        ],
        message: "Do you need an account?",
        duration: 5000,
        position: "top",
      });
      localStorage.setItem("visited", "true");
    }
  }, [history, present]);

  function handleSubmit(event: any) {
    event.preventDefault();
    signInWithEmailAndPassword(auth, mail, password)
      .then(() => {
        // history.push("/collection"); // If you want manual redirect
        console.log("Logged in successfully");
      })
      .catch((error) => {
        let msg = "Login failed";
        if (error.code === "auth/user-not-found") msg = "Wrong email";
        if (error.code === "auth/wrong-password") msg = "Wrong password";

        present({
          message: msg,
          duration: 3000,
          position: "top",
        });
      });
  }

  return (
    <IonPage>
      {/* ... rest of your JSX remains the same ... */}
      <IonButton fill="clear" onClick={() => history.push("/signup")}>
        Sign Up
      </IonButton>
    </IonPage>
  );
}

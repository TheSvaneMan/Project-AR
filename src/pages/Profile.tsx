import {
  IonLabel,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import { Route } from "react-router";
import SettingsContainer from "../components/profile/SettingsContainer";

const Profile = () => {
  return (
    <IonTabs>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle> {/* Fixed title */}
        </IonToolbar>
      </IonHeader>

      <IonRouterOutlet>
        <Route path="/profile/settings" component={SettingsContainer} />
        {/* Added a redirect so /profile goes somewhere */}
        <Route exact path="/profile">
          <Redirect to="/profile/posts" />
        </Route>
      </IonRouterOutlet>

      {/* ... rest of your TabBar code ... */}
    </IonTabs>
  );
};

export default Profile;

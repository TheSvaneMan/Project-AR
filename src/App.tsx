import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Core CSS */
import "@ionic/react/css/core.css";
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Page Imports */
import ARTab from "./pages/ARTab";
import Collection from "./pages/Collection";
import AddPost from "./pages/AddPost";
import Profile from "./pages/Profile";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/signin" component={SignInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/collection" component={Collection} />
        <Route exact path="/ar" component={ARTab} />
        <Route exact path="/add-post" component={AddPost} />
        <Route path="/profile" component={Profile} />

        <Route exact path="/">
          <Redirect to="/signin" />
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;

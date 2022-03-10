import { IonPage, IonHeader, IonContent, IonLabel, IonRouterOutlet, IonTabs, IonTitle, IonToolbar, IonTabBar, IonTabButton } from '@ionic/react';
import { Route } from 'react-router';
import SettingsContainer from '../components/profile/SettingsContainer';
import PostsContainer from '../components/profile/PostsContainer';
import './Profile.css';

const Profile: React.FC = () => {
  return (
    
		<IonTabs>
			<IonHeader>Profile</IonHeader>
			<IonTabBar slot='bottom'>
				<IonTabButton tab='today' href='/profile/posts'>
					<IonLabel>Posts</IonLabel>
				</IonTabButton>
				<IonTabButton tab='meals' href='/profile/settings'>
					<IonLabel>Settings</IonLabel>
				</IonTabButton>
      </IonTabBar>
      

			<IonRouterOutlet>
				<Route path='/profile/settings' component={SettingsContainer} exact />
				<Route path='/profile/posts' component={PostsContainer} exact />
			</IonRouterOutlet>
    </IonTabs>
    
	);
};

export default Profile;

import { IonLabel, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, } from '@ionic/react';
import { Route } from 'react-router';
import SettingsContainer from '../components/Profile/SettingsContainer';
import PostsContainer from '../components/Profile/PostsContainer';

import './Profile.css';

const Profile = () => {
	console.log("Profile Page running");
	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path='/profile/posts/' exact>
					<PostsContainer />
				</Route>
				<Route path='/profile/settings' exact>
					<SettingsContainer />
				</Route>
			</IonRouterOutlet>
			<IonTabBar slot='bottom'>
				<IonTabButton tab='posts' href='/profile/posts'>
					<IonLabel>Posts</IonLabel>
				</IonTabButton>
				<IonTabButton tab='settings' href='/profile/settings'>
					<IonLabel>Settings</IonLabel>
				</IonTabButton>
			</IonTabBar>
		</IonTabs>
	);
};

export default Profile;


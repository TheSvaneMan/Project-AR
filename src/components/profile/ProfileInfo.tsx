import { IonCard, IonCardContent, IonCardHeader, IonContent, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, IonTitle } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import PostsContainer from './PostsContainer';

import SettingsContainer from './SettingsContainer';


const ProfileInfo = ({name}:any, {image}:any) => {
	return (
		<IonTabs>
                <IonTabBar slot='bottom'>
				<IonTabButton tab='today' href='/profile/posts'>
					<IonLabel>Posts</IonLabel>
				</IonTabButton>
				<IonTabButton tab='settings' href='/profile/settings'>
					<IonLabel>Settings</IonLabel>
				</IonTabButton>
			</IonTabBar>

			<IonRouterOutlet>
				<Route path='/profile/settings' component={SettingsContainer} exact />
                <Route path='/profile/' component={PostsContainer} exact />
			</IonRouterOutlet>
		</IonTabs>
	);
};

export default ProfileInfo;
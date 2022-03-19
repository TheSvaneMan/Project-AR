import { IonLabel, IonRouterOutlet, IonTabs, IonTabBar, IonTabButton, IonHeader, IonPage, IonTitle, IonToolbar, } from '@ionic/react';
import { Route } from 'react-router';
import SettingsContainer from '../components/Profile/SettingsContainer';
import PostsContainer from '../components/Profile/PostsContainer';

const Profile = () => {
	console.log("Profile Page running");
	return (
	

			
		<IonTabs>
			<IonHeader className='addPostHeader'>
				<IonToolbar>
					<IonTitle size="large">Create New Post</IonTitle>
				</IonToolbar>
			</IonHeader>
				<IonRouterOutlet>
					<Route path='/profile/posts/' exact>
						<PostsContainer />
					</Route>
					<Route path='/profile/settings' exact>
						<SettingsContainer />
					</Route>
				</IonRouterOutlet>
				<IonTabBar className='secondaryTabBar' slot='bottom'>
					<IonTabButton tab='posts' href='/profile/posts'>
						<IonLabel className='profileLabel'>Posts</IonLabel>
					</IonTabButton>
					<IonTabButton tab='settings' href='/profile/settings'>
						<IonLabel className='profileLabel'>Settings</IonLabel>
					</IonTabButton>
				</IonTabBar>
			</IonTabs>
	);
};

export default Profile;


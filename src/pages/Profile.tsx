
import { IonPage, IonHeader, IonContent, IonLabel, IonRouterOutlet, IonTabs, IonTitle, IonToolbar, IonTabBar, IonTabButton, useIonLoading, IonButton, IonButtons, IonItem, IonInput, IonImg, IonIcon } from '@ionic/react';
import { Redirect, Route } from 'react-router';
import SettingsContainer from '../components/Profile/SettingsContainer';
import PostsContainer from '../components/Profile/PostsContainer';

import { useState, useEffect } from "react";
import { getAuth, signOut } from "firebase/auth";
import { getUserRef } from "../firebase-config";
import { get, update } from "@firebase/database";
import { camera } from "ionicons/icons";
import { Camera, CameraResultType } from "@capacitor/camera";
import { uploadString, ref, getDownloadURL } from "@firebase/storage";
import { storage } from "../firebase-config";
import { Toast } from "@capacitor/toast";
import './Profile.css';
import ProfileInfo from '../components/Profile/ProfileInfo';


const Profile = () => {
	const auth = getAuth();
	// I am scared to use type any here -> It could be null, we need to do some better error handling here.
	const [user, setUser] = useState<any>({});
	const [name, setName] = useState("");
	const [title, setTitle] = useState("");
	const [image, setImage] = useState("");
	const [imageFile, setImageFile] = useState<any>({});
	const [showLoader, dismissLoader] = useIonLoading();

	useEffect(() => {
		setUser(auth.currentUser);

		async function getUserDataFromDB() {
			const snapshot = await get(getUserRef(user.uid));
			const userData = snapshot.val();
			if (userData) {
				setName(userData.name);
				setTitle(userData.title);
				setImage(userData.image);
			}
		}
		if (user) getUserDataFromDB();
	}, [auth.currentUser, user]);

	return (
		<IonTabs>
			<IonRouterOutlet>
				<Route path='/profile/posts' exact>
					<PostsContainer userName={name} userTitle={title} />
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


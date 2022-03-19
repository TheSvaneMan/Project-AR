import { getAuth } from '@firebase/auth';
import { get } from '@firebase/database';
import { IonAvatar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonImg, IonLabel, IonTitle, useIonLoading } from '@ionic/react';
import { useEffect, useState } from 'react';
import { getUserRef } from '../../firebase-config';
import './ProfileInfo.css';

const ProfileInfo = ({ userInfo }: any) => {
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
		<IonCard className="profileComponent">
			<IonCardContent className='picCard'>
				<IonAvatar className='profilePic'>
					<img src={image} alt="Profile Picture" className="profilePicture" />
				</IonAvatar>
			</IonCardContent>
			<IonCardHeader className='nameCard'>
				<IonCardTitle className="profileName">
					{name}
				</IonCardTitle>
				<hr />
				<IonCardSubtitle className="profileSubTitle">
					{title}
				</IonCardSubtitle>
			</IonCardHeader>
		</IonCard>
	);
};

export default ProfileInfo;
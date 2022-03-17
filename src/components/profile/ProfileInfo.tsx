import { IonContent, IonHeader, IonImg, IonLabel, IonTitle } from '@ionic/react';
import './ProfileInfo.css';

const ProfileInfo = ({ name }: any, { title }: any) => {
	return (
		<div className="profileComponent">
			<h1>{name}</h1>
			<IonLabel>
				{title}
			</IonLabel>
		</div>
	);
};

export default ProfileInfo;
import { IonContent, IonHeader, IonImg, IonLabel, IonTitle } from '@ionic/react';

const ProfileInfo = ({ name }: any, { title }: any) => {
	return (
		<div className="profileComponent bg-gradient-to-r from-blue-700 to-purple-900 h-1/5 p-5">
			<h1>{name}</h1>
			<IonLabel>
				{title}
			</IonLabel>
		</div>
	);
};

export default ProfileInfo;
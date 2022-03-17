import './ARContainer.css';
import { IonButton, IonInput, IonItem } from '@ionic/react';
import Echo from '../AR/echo-plugin';
import UnityIonicPlugin from './UnityIonicPlugin';
import { useState } from 'react';
// Functions as a temporary solution to get post data from Firebase, needs to be re-evaluated ** 
import arPostService from '../../services/augmentedRealityService';
interface ARContainerInterface {
	name: string;
}

// Could create an interface here that handles the AR Object handler sequence from when we get 
// it from Firebase

const testPlugin = async() => {
	const { value } = await Echo.echo({ value: 'Hello World!' });
	console.log('Response from native:', value);
}

const openUnityThroughPlugin = async () => {
	const { value } = await UnityIonicPlugin.startUnity({
		value: 'Launch Unity Activity',
	});
	console.log('Response from native:', value);
}

const createNewObjectName = async (objectName: any) => {
		const { value } = await UnityIonicPlugin.changeObjectName({
			value: objectName,
		});
	console.log('Response from native', value);
};

const ARContainer: React.FC<ARContainerInterface> = ({ name }) => {
	const [ARObjects, setARObjects] = useState<any[]>([]);
	const [objectName, setObjectName] = useState<string>();

	async function loadObjectInstances() {
		const postData = await arPostService.fetchPosts();
		setARObjects(postData);
	}

	function alertARObject() {
		console.log(objectName);
	}

	return (
		<div className='settingsContainer flex flex-col items-center'>
			<h1>{name}</h1>
			<h2>Unity Ionic Intergration Methods</h2>
			<IonButton className="bg-gradient-to-r from-blue-700 to-purple-900" onClick={testPlugin}>Test Custom Plugin</IonButton>
			<IonButton className="arButton"onClick={openUnityThroughPlugin}>Open Unity</IonButton>
			<IonItem>
				<IonInput
					value={objectName}
					placeholder='Name your new AR Object'
					onIonChange={(e) => setObjectName(e.detail.value!)}
				></IonInput>
			</IonItem>
			<IonButton onClick={() => createNewObjectName(objectName)}>
				Change Object Name in Unity
			</IonButton>
			<IonButton onClick={alertARObject}>Show Current Object name</IonButton>
		</div>
	);
};

export default ARContainer;

// --------------------- AR Object properties ---------------------- //
let newObjectName: string = 'Default TypeScript Object Name';


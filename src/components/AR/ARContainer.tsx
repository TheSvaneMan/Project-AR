import './ARContainer.css';
import { IonButton, IonInput, IonItem } from '@ionic/react';
import Echo from '../AR/echo-plugin';
import UnityIonicPlugin from './UnityIonicPlugin';
import { useState } from 'react';
// Functions as a temporary solution to get post data from Firebase, needs to be re-evaluated ** 
import arPostService from '../../services/augmentedRealityService';

// Unity Ionic Plugin
import expressJSPingTest from "../../services/pingTestApi";

interface ARContainerInterface {
	name: string;
}

// Could create an interface here that handles the AR Object handler sequence from when we get 
// it from Firebase

const testPlugin = async () => {
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

async function PingTest() {
	// Make web request to localhost
	const pingTestResult = await expressJSPingTest.retrievePing();
	console.log("Ping Test Result from Add Listener: " + pingTestResult);
}

// Add Event listeners to calls in Unity
UnityIonicPlugin.addListener("IonicUnityEventListener", (info: any) => {
		// On Android studio, it says it cannot find this EventListener.
		// I think it is because I create a new object instance in the Java plugin code to be able to execute non-static methods 
		// but I don't know how to pass the existing class to the function so it targets the one created by the Bridge class / Capacitor
		// It'll be great if this plugin works both ways, would really open up doors to unique cross app features	
		console.log('myPluginEvent was fired');
		PingTest();
});

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
		<div className='arDiv'>
			<img alt='ape in ar' className='arImg' src='https://i.cbc.ca/1.5907934.1612914459!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_940/saida-saetgar.jpg'/>
			<IonButton className='arButtonMargin' onClick={openUnityThroughPlugin}>Open AR</IonButton>

		</div>
	);
};

export default ARContainer;

// --------------------- AR Object properties ---------------------- //
let newObjectName: string = 'Default TypeScript Object Name';


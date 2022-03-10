import './ARContainer.css';
import { IonButton } from '@ionic/react';
import Echo from '../AR/echo-plugin';
import StartAR from '../AR/start-AR-plugin';
interface SettingsProps {
	name: string;
}

const testPlugin = async() => {
	const { value } = await Echo.echo({ value: 'Hello World!' });
	console.log('Response from native:', value);
}

const openUnityThroughPlugin = async () => {
	const { value } = await StartAR.startUnity({ value: 'Launch Unity Activity' });
	console.log('Response from native:', value);
};

const ARContainer: React.FC<SettingsProps> = ({ name }) => {
	
	return (
		<div className='settingsContainer'>
			<h1>{name}</h1>
			<h2>Testing Unity Ionic Intergration Methods</h2>
			<IonButton onClick={testPlugin}>Test Plugin</IonButton>
			<IonButton onClick={openUnityThroughPlugin}>Open Unity</IonButton>
		</div>
	);
};

export default ARContainer;



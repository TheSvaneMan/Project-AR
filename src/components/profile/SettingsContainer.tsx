import { IonButton, IonList, IonItem, IonIcon, IonLabel, IonToggle } from '@ionic/react';
import './SettingsContainer.css';
import { sunny } from 'ionicons/icons';
interface SettingsProps {
	name: string;
}

const toggleLightModeHandler = () => document.body.classList.toggle('light');

const SettingsContainer: React.FC<SettingsProps> = ({ name }) => {
	return (
		<div className='settingsContainer'>
			<h1>{name}</h1>
			<h3>To do</h3>
			<ul>
				<li>Update password?</li>

				<li>Toggle Dark mode</li>
				<IonList>
					<IonItem lines="none">
						<IonIcon slot="start" icon={sunny} />
						<IonLabel>Light Mode</IonLabel>
						<IonToggle slot="end" name="lightMode" onIonChange={toggleLightModeHandler} />
					</IonItem>
				</IonList>
				<li>Customize Theme?</li>
				<li>Set privacy?</li>
				<li>See posts / AR based on city only</li>
				<IonButton>On</IonButton>

				<IonButton>Off</IonButton>
			</ul>
		</div>
	);
};

export default SettingsContainer;

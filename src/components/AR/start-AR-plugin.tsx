import { registerPlugin } from '@capacitor/core';

export interface UnityPlugin {
	startUnity(options: { value: string }): Promise<{ value: string }>;
}

const StartAR = registerPlugin<UnityPlugin>('Start');

 export default StartAR;

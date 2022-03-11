import { registerPlugin } from '@capacitor/core';

export interface UnityPlugin {
	startUnity(options: { value: string }): Promise<{ value: string }>;
	changeObjectName(options: { value: any }): Promise<{ value: string }>;
}

const UnityIonicPlugin = registerPlugin<UnityPlugin>('UnityIonicPlugin');

export default UnityIonicPlugin;

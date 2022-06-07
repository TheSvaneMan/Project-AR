import { registerPlugin, Plugin } from '@capacitor/core';
interface UnityPluginInterface extends Plugin {
	startUnity(options: { value: string }): Promise<{ value: string }>;
	changeObjectName(options: { value: any }): Promise<{ value: string }>;
	startUnityFromPost(options: { value: string }): Promise<{ value: string }>;
	NotifyListeners: () => Promise<void>;
}

export const UnityIonicPlugin = registerPlugin<UnityPluginInterface>('UnityIonicPlugin');

export default UnityIonicPlugin;
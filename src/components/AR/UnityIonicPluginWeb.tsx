import { Plugin, registerPlugin } from '@capacitor/core';

export default interface UnityIonicWebPluginInterface extends Plugin {
    startUnity(options: { value: string }): Promise<{ value: string }>;
    changeObjectName(options: { value: any }): Promise<{ value: string }>;
    startUnityFromPost(options: { value: string }): Promise<{ value: string }>;
    NotifyListeners: () => Promise<void>;
}


export const UnityIonicPlugin = registerPlugin<UnityIonicWebPluginInterface>('UnityIonicPlugin');
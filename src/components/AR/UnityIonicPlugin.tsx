import { registerPlugin, Plugin } from '@capacitor/core';
// import { registerWebPlugin } from "@capacitor/core";

interface UnityPluginInterface extends Plugin {
    startUnity(options: { value: string }): Promise<{ value: string }>;
    communicateToUnity(options: { value: string }): Promise<{ value: string }>;
    changeObjectName(options: { value: any }): Promise<{ value: string }>;
    startUnityFromPost(options: { value: string }): Promise<{ value: string }>;
    NotifyListeners: () => Promise<void>;
}

export const UnityIonicPlugin = registerPlugin<UnityPluginInterface>('UnityIonicPlugin');
// export const UnityIonicPluginWeb = registerPlugin('Example', { web: () => import('./UnityIonicPluginWeb').then(m => new m.UnityIonicPlugin()) })

export default UnityIonicPlugin;



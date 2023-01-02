package io.svane.app;
import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.util.Log;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginHandle;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(name = "UnityIonicPlugin")
public class UnityIonicPlugin extends Plugin{

    private static final String EVENT_UNITY_IONIC_LINK = "IonicUnityEventListener";

    UnityIonicPlugin get(){
        return this;
    }

    @PluginMethod()
    public void startUnity(PluginCall call) {
        String value = call.getString("value");
        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
        Intent intent = new Intent(getContext(), MainUnityActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT);
        getActivity().startActivity(intent);
        // JSObject ret = new JSObject();
        // ret.put("value", value);
        // call.resolve(ret);
    }

    public UnityIonicPlugin returnUIPInstance(){
        // PluginHandle appHandle = this.get().bridge.getPlugin("UnityIonicPlugin");
        // UnityIonicPlugin UnityIonicPluginInstance = (UnityIonicPlugin) appHandle.getInstance();
        UnityIonicPlugin UnityIonicPluginInstance = this.get();
        return UnityIonicPluginInstance;
    }

    // Direct Access to PluginMethod
    //public void executeUIPInstance(String data){
    //    PluginHandle appHandle = this.bridge.getPlugin("UnityIonicPlugin");
    //    UnityIonicPlugin UnityIonicPluginInstance = (UnityIonicPlugin) appHandle.getInstance();
    //}

    // Works but has issues with getting the event listener (No event listener bug)
    public static void NotifyIonicFromUnityPass(String data){
        Log.i("Notify", "Runs: NotifyIonicFromUnityPass");
        UnityIonicPlugin newUIPInstance = new UnityIonicPlugin();
        UnityIonicPlugin currentUIPInstance = newUIPInstance.returnUIPInstance();
        currentUIPInstance.NotifyIonicFromUnity();
    }

    public void PostMessageFromUnityToIonic(String data){
        Log.i("Notify", "Running");
    }

    @PluginMethod()
    public void NotifyIonicFromUnity(){
        Log.i("Notify", "Notify Unity Running");
        JSObject ret = new JSObject();
        ret.put("value", "some value");
        notifyListeners("IonicUnityEventListener", ret);
    }

}
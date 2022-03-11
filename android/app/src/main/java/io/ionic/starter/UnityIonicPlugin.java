package io.ionic.starter;

import android.app.Activity;
import android.content.ComponentName;
import android.content.Context;
import android.content.Intent;
import android.view.View;

import androidx.appcompat.app.AppCompatActivity;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(name = "UnityIonicPlugin")
public class UnityIonicPlugin extends Plugin{
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

    @PluginMethod()
    public void changeObjectName(PluginCall call){
        String value = call.getString("value");
        // New object name
        MainUnityActivity.getInstance().changeObjectName(value);
        JSObject ret = new JSObject();
        ret.put("value", value);
        call.resolve(ret);
        // JSObject ret = new JSObject();
        // ret.put("value", value);
        // call.resolve(ret);
    }
}

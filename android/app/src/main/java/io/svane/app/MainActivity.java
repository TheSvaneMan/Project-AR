package io.svane.app;
import android.os.Bundle; // required for onCreate parameter
import android.util.Log;


import com.getcapacitor.BridgeActivity;
import com.getcapacitor.JSObject;
import com.getcapacitor.PluginMethod;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        registerPlugin(EchoPlugin.class);
        registerPlugin(UnityIonicPlugin.class);
    }

    public void testMethod(String data) {
        Log.i("TAG", "The data was "+data);
    }
}
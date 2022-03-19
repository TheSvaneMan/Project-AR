package io.svane.app;
import android.os.Bundle; // required for onCreate parameter


import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState){
        super.onCreate(savedInstanceState);
        registerPlugin(EchoPlugin.class);
        registerPlugin(UnityIonicPlugin.class);
    }
}
package io.ionic.starter;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.FrameLayout;

import com.unity3d.player.UnityPlayerActivity;

public class MainUnityActivity extends UnityPlayerActivity{
    private static MainUnityActivity instance;
    String newObjectName = "Java Default name";
    // Setup activity layout
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        addControlsToUnityFrame();
        Intent intent = getIntent();
        handleIntent(intent);
        instance = this;
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        handleIntent(intent);
        setIntent(intent);
    }

    void handleIntent(Intent intent) {
        if(intent == null || intent.getExtras() == null) return;

        if(intent.getExtras().containsKey("doQuit"))
            if(mUnityPlayer != null) {
                finish();
            }
    }

    // ------------- Custom Code ----------------------- //
    public static MainUnityActivity getInstance() {
        return instance;
    }

    void changeObjectName(String nameFromIonic){
        newObjectName = nameFromIonic;
    }

    protected void showMainActivity(String setToColor) {
        Intent intent = new Intent(this, MainActivity.class);
        intent.setFlags(Intent.FLAG_ACTIVITY_REORDER_TO_FRONT | Intent.FLAG_ACTIVITY_SINGLE_TOP);
        intent.putExtra("setColor", setToColor);
        startActivity(intent);
    }

    @Override public void onUnityPlayerUnloaded() {
        showMainActivity("");
    }

    public void addControlsToUnityFrame() {
        FrameLayout layout = mUnityPlayer;
        {
            Button myButton = new Button(this);
            myButton.setText("Go Back to Main App");
            myButton.setX(10);
            myButton.setY(500);

            myButton.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {
                    showMainActivity("");
                }
            });
            layout.addView(myButton, 300, 200);
        }

        {
            Button myButton = new Button(this);
            myButton.setText("Change Object to Custom Object");
            myButton.setX(200);
            myButton.setY(1000);
            myButton.setOnClickListener( new View.OnClickListener() {
                public void onClick(View v) {
                    mUnityPlayer.UnitySendMessage("AR Session Origin", "ionicPlaceNewPrefab", "Default Name");
                }
            });
            layout.addView(myButton, 300, 200);
        }

        {
            Button myButton = new Button(this);
            myButton.setText("Unload");
            myButton.setX(630);
            myButton.setY(500);

            myButton.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {
                    mUnityPlayer.unload();
                }
            });
            layout.addView(myButton, 300, 200);
        }

        {
            Button myButton = new Button(this);
            myButton.setText("Finish");
            myButton.setX(630);
            myButton.setY(800);

            myButton.setOnClickListener(new View.OnClickListener() {
                public void onClick(View v) {
                    finish();
                }
            });
            layout.addView(myButton, 300, 200);
        }
    }
}

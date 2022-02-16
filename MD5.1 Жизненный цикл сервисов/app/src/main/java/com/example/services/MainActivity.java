package com.example.services;

import androidx.appcompat.app.AppCompatActivity;

import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
import android.view.View;

public class MainActivity extends AppCompatActivity {
    boolean bound = false;
    ServiceConnection sConn;
    Intent intent;
    final String LOG_TAG = "Log";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        sConn = new ServiceConnection() {
            public void onServiceConnected(ComponentName name, IBinder binder) {
                Log.d(LOG_TAG, "MainActivity onServiceConnected");
                bound = true;
            }

            public void onServiceDisconnected(ComponentName name) {
                Log.d(LOG_TAG, "MainActivity onServiceDisconnected");
                bound = false;
            }
        };
        intent = new Intent(this, MyService.class);
    }
    public void onClickStart(View v) {
        startService(intent);
        stopService(intent);
    }

    public void onClickBind(View v) {
        bindService(intent, sConn, BIND_AUTO_CREATE);
        unbindService(sConn);
        bound = false;
    }

    protected void onDestroy() {
        super.onDestroy();
    }
}
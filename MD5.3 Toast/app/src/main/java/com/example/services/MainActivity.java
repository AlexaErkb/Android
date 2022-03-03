package com.example.services;

import androidx.appcompat.app.AppCompatActivity;
import androidx.core.app.NotificationCompat;
import androidx.core.app.NotificationManagerCompat;

import android.content.ComponentName;
import android.content.Intent;
import android.content.ServiceConnection;
import android.os.Build;
import android.os.Bundle;
import android.os.IBinder;
import android.util.Log;
import android.view.Gravity;
import android.view.View;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {
    boolean bound = false;
    ServiceConnection sConn;
    Intent intent;
    final String LOG_TAG = "Log";
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
    public void onClickNotify(View v) {
        Toast toast = Toast.makeText(getApplicationContext(),
                "Привет", Toast.LENGTH_SHORT);
        toast.show();
    }
}
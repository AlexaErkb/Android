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
    public void onClickNotify(View v) {
        startForegroundService(new Intent(this, MyService.class));
        //if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
        //    startForegroundService(new Intent(this, MyService.class));
        //} else {
        //    startService(new Intent(this, MyService.class));
        //}
        //NotificationCompat.Builder builder =
        //        new NotificationCompat.Builder(MainActivity.this, CHANNEL_ID)
        //                .setSmallIcon(R.drawable.ic_launcher_background)
        //                .setContentTitle("Напоминание")
        //                .setContentText("Пора покормить кота")
        //                .setPriority(NotificationCompat.PRIORITY_DEFAULT);

//        NotificationManagerCompat notificationManager =
//                NotificationManagerCompat.from(MainActivity.this);
//        notificationManager.notify(NOTIFY_ID, builder.build());
    }

    //protected void onDestroy() {
    //    super.onDestroy();
    //}
}
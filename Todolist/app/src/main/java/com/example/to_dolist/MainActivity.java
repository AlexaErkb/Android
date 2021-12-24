package com.example.to_dolist;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;

public class MainActivity extends AppCompatActivity implements View.OnClickListener {
    Button today, tomorrow;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        today = findViewById(R.id.today);
        tomorrow = findViewById(R.id.tomorrow);
        today.setOnClickListener(this);
        tomorrow.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        Intent intent = new Intent();
        switch (view.getId()) {
            case R.id.today:
                intent = new Intent(this, Today.class);
                break;
            case R.id.tomorrow:
                intent = new Intent(this, Tomorrow.class);
                break;
        }
        startActivity(intent);
    }
}
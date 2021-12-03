package com.example.filters;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;

import android.app.SearchManager;
import android.bluetooth.*;
import android.content.Intent;
import android.graphics.Bitmap;
import android.net.Uri;
import android.os.Bundle;
import android.provider.MediaStore;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ImageView;
import android.widget.TextView;

public class MainActivity extends AppCompatActivity {
    Button Bluetooth, next, TextColor, TextAlign, makePhoto;
    EditText site;
    String search, sub;
    TextView Edit;
    ImageView Image;
    private static final int REQUEST_ENABLE_BT=0;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        //Uri uriUrl = Uri.parse ("www.yandex.ru");
        //Intent search = new Intent (Intent.ACTION_WEB_SEARCH);
        //search.putExtra (SearchManager.QUERY, String.valueOf(uriUrl));
        //startActivity (search);
        site = findViewById(R.id.site);
        next = findViewById(R.id.next);
        TextColor = findViewById(R.id.color);
        TextAlign = findViewById(R.id.side);
        Bluetooth = findViewById(R.id.bluetooth);
        Edit = findViewById(R.id.edit);
        makePhoto = findViewById(R.id.photo);
        Image = findViewById(R.id.image);
        BluetoothAdapter bluetooth = BluetoothAdapter.getDefaultAdapter();
        next.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                search = site.getText().toString();
                sub = "https://";
                if (!search.isEmpty()) {
                    if (!search.contains(sub)) {
                        search = sub + search;
                    }
                    Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(search));
                    startActivity(intent);
                }
            }
        });
        Bluetooth.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if (!bluetooth.isEnabled()) {
                    Intent intent = new Intent(BluetoothAdapter.ACTION_REQUEST_ENABLE);
                    startActivity(intent);
                } else {
                    bluetooth.disable();
                }
            }
        });
        TextColor.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent("android.example.intent.color");
                startActivityForResult(intent, 1);
            }
        });
        TextAlign.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent("android.example.intent.align");
                startActivityForResult(intent, 2);
            }
        });
        makePhoto.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
                startActivityForResult(intent, 3);
            }
        });
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent intent) {
        super.onActivityResult(requestCode, resultCode, intent);
        if (intent == null) {return;}
        if (requestCode == 1) {
            String color = intent.getStringExtra("color");
            Edit.setTextColor(Integer.parseInt(color));
        }
        if (requestCode == 2) {
            int align =intent.getIntExtra("align", 0);
            Edit.setGravity(align);
        }
        if (requestCode == 3) {
            Bundle extra = intent.getExtras();
            Bitmap img = (Bitmap) extra.get("data");
            Image.setImageBitmap(img);
        }
    }
}
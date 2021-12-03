package com.example.filters;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.Gravity;
import android.view.View;
import android.widget.Button;

public class TextAlign extends AppCompatActivity {
    Button Right, Left, Center;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_text_align);
        Left = findViewById(R.id.left);
        Right = findViewById(R.id.right);
        Center = findViewById(R.id.center);
        Intent intent = new Intent();
        Left.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                intent.putExtra("align", Gravity.START);
                setResult(RESULT_OK, intent);
                finish();
            }
        });
        Center.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                intent.putExtra("align", Gravity.CENTER);
                setResult(RESULT_OK, intent);
                finish();
            }
        });
        Right.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                intent.putExtra("align", Gravity.END);
                setResult(RESULT_OK, intent);
                finish();
            }
        });
    }
}
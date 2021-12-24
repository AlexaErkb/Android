package com.example.to_dolist;

import androidx.appcompat.app.AppCompatActivity;

import android.os.Bundle;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;

import java.util.ArrayList;

public class Tomorrow extends AppCompatActivity implements View.OnClickListener {
    ArrayAdapter todoListAdapter;
    ListView todo;
    ArrayList<String> todoList = new ArrayList<>();
    EditText addDo;
    Button add;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_tomorrow);
        todo = findViewById(R.id.listtodo);
        todoListAdapter = new ArrayAdapter(this,
                android.R.layout.simple_list_item_1,
                todoList);
        todo.setAdapter(todoListAdapter);
        addDo = findViewById(R.id.to_add);
        add = findViewById(R.id.add);
        add.setOnClickListener(this);
    }
    @Override
    public void onClick(View view) {
        todoList.add(addDo.getText().toString());
        todoListAdapter.notifyDataSetChanged();
    }
}
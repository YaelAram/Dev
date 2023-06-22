package com.yaelaram.schedule_app.Activities;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

import com.yaelaram.schedule_app.LifeCycleObservers.MainActivityLifeCycleObserver;
import com.yaelaram.schedule_app.Model.Person;
import com.yaelaram.schedule_app.R;
import com.yaelaram.schedule_app.databinding.ActivityMainBinding;

import io.realm.Realm;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //Initializing View Binding auto generated class, useful to get the widgets from the xml file to our class
        ActivityMainBinding binding = ActivityMainBinding.inflate(getLayoutInflater());
        View view  = binding.getRoot();
        setContentView(view);

        //Adding a LifeCycleObserver, MainActivityLifeCycleObserver from the LifeCycleObservers package
        getLifecycle().addObserver(new MainActivityLifeCycleObserver(binding, getIntent().getExtras(), MainActivity.this));
    }

}

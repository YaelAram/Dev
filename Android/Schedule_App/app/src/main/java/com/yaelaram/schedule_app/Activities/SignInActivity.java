package com.yaelaram.schedule_app.Activities;

import androidx.appcompat.app.AppCompatActivity;

import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import com.yaelaram.schedule_app.LifeCycleObservers.SignInActivityLifeCycleObserver;
import com.yaelaram.schedule_app.Model.Person;
import com.yaelaram.schedule_app.R;
import com.yaelaram.schedule_app.databinding.ActivitySignInBinding;

import io.realm.Realm;

public class SignInActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //Initializing View Binding auto generated class, useful to get the widgets from the xml file to our class
        ActivitySignInBinding binding = ActivitySignInBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);

        getLifecycle().addObserver(new SignInActivityLifeCycleObserver(binding, SignInActivity.this));
    }
}
package com.yaelaram.schedule_app.LifeCycleObservers;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.widget.Toast;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleObserver;
import androidx.lifecycle.OnLifecycleEvent;

import com.yaelaram.schedule_app.Activities.SignInActivity;
import com.yaelaram.schedule_app.Activities.ToDoActivity;
import com.yaelaram.schedule_app.Model.Person;
import com.yaelaram.schedule_app.R;
import com.yaelaram.schedule_app.databinding.ActivityMainBinding;

import io.realm.Realm;

public class MainActivityLifeCycleObserver implements LifecycleObserver {
    //Binding variable, used for View Binding
    private final ActivityMainBinding binding;
    //Bundle variable to get values from the SignInActivity (Registry successfully)
    private final Bundle bundle;
    //MainActivity context
    private final Activity mainActivity;
    //Realm variable connection
    private Realm realm;
    //Constant value for keys used for queries, intent and bundle extras
    private final static String ID_KEY = "id";
    private final static String EMAIL_KEY = "email";
    private final static String PASSWORD_KEY = "password";

    public MainActivityLifeCycleObserver(ActivityMainBinding binding, Bundle bundle, Activity mainActivity){
        this.binding = binding;
        this.bundle = bundle;
        this.mainActivity = mainActivity;
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_CREATE)
    public void initializeRealmInstance(){
        //Getting the pre-defined Realm configuration, the setup was perform on the MyApplication class at the app package
        this.realm = Realm.getDefaultInstance();
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_CREATE)
    public void getBundleValues(){
        //Checking if the bundle is not null, it is not null when a new user has been registered
        //It uses the email and password entered at the registry to auto.complete the login
        if(bundle != null){
            binding.editTextUserName.setText(bundle.getString(EMAIL_KEY));
            binding.editTextPassword.setText(bundle.getString(PASSWORD_KEY));
        }
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_RESUME)
    public void logInButtonBehavior(){
        //Describing the behavior of the log in button
        binding.logInButton.setOnClickListener(view -> {
            //Getting the email and password from the UI
            String userName = binding.editTextUserName.getText().toString().trim();
            String password = binding.editTextPassword.getText().toString().trim();
            //Using the validateEmailAndPassword method
            if(validateEmailAndPassword(userName, password)){
                //Query to get the Person class that define a user of the app, Person class is at the Model Package
                //It make a search for an specific user with the given email
                Person person = this.realm.where(Person.class).equalTo(EMAIL_KEY, userName).findFirst();
                //Query has founded a result if person != null
                if(person != null){
                    //Matching the password entered by the user and the password stored
                    if(person.getPassword().equals(password))
                        intentGoToToDoActivity(person.getId());
                    else
                        Toast.makeText(mainActivity, R.string.passwordAndEmailWrong, Toast.LENGTH_SHORT).show();
                }
                else
                    intentGoToSignInActivity();
            }
        });
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_RESUME)
    public void signInButtonBehavior(){
        //Describing the behavior of the goSignInButton, it redirect us to the SignInActivity (Registry)
        binding.goSignInButton.setOnClickListener(view -> intentGoToSignInActivity());
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    public void closeRealmConnection(){
        //Closing the realm connection
        this.realm.close();
    }

    //Validating if the data is empty
    private boolean validateEmailAndPassword(String email, String password){
        if(email.isEmpty())
            Toast.makeText(mainActivity, R.string.emailFieldEmpty, Toast.LENGTH_SHORT).show();
        else if(password.isEmpty())
            Toast.makeText(mainActivity, R.string.passwordFieldEmpty, Toast.LENGTH_SHORT).show();
        else
            return true;
        return false;
    }

    //Method to create an intent and start the ToDoActivity (Log in action performed successfully)
    private void intentGoToToDoActivity(int id){
        Intent toToDoActivity = new Intent(mainActivity, ToDoActivity.class);
        toToDoActivity.putExtra(ID_KEY, id);
        toToDoActivity.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK | Intent.FLAG_ACTIVITY_CLEAR_TASK);
        mainActivity.startActivity(toToDoActivity);
    }

    //Method to create an intent and start the SignInActivity (User is not registered (system) or the user want to sign in)
    private void intentGoToSignInActivity(){
        Intent goLogInIntent = new Intent(mainActivity, SignInActivity.class);
        mainActivity.startActivity(goLogInIntent);
    }
}

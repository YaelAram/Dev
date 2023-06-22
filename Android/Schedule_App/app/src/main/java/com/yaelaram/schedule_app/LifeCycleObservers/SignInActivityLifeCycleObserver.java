package com.yaelaram.schedule_app.LifeCycleObservers;

import android.app.Activity;
import android.content.Intent;
import android.widget.Toast;

import androidx.lifecycle.Lifecycle;
import androidx.lifecycle.LifecycleObserver;
import androidx.lifecycle.OnLifecycleEvent;

import com.yaelaram.schedule_app.Activities.MainActivity;
import com.yaelaram.schedule_app.Model.Person;
import com.yaelaram.schedule_app.R;
import com.yaelaram.schedule_app.databinding.ActivitySignInBinding;

import io.realm.Realm;

public class SignInActivityLifeCycleObserver implements LifecycleObserver {
    //Binding variable, used for View Binding
    private final ActivitySignInBinding binding;
    //MainActivity context
    private final Activity signInActivity;
    //Realm variable connection
    private Realm realm;
    //Constant value for keys used for queries and intent
    private final static String EMAIL_KEY = "email";
    private final static String PASSWORD_KEY = "password";

    public SignInActivityLifeCycleObserver(ActivitySignInBinding binding, Activity signInActivity){
        this.binding = binding;
        this.signInActivity = signInActivity;
    }



    @OnLifecycleEvent(Lifecycle.Event.ON_CREATE)
    public void initializeRealmInstance(){
        //Getting the pre-defined Realm configuration, the setup was perform on the MyApplication class at the app package
        this.realm = Realm.getDefaultInstance();
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_RESUME)
    public void signInButtonBehavior(){
        //Describing the behavior of the sign in button
        binding.signInButton.setOnClickListener(view -> {
            //Getting the data from the UI
            String userName = binding.nameUserInputText.getText().toString().trim();
            String lastName = binding.lastNameUserInputText.getText().toString().trim();
            String email = binding.emailUserInputText.getText().toString().trim();
            String password = binding.passwordUserInputText.getText().toString().trim();
            //Validating the data entered by the user
            if(validateData(userName, lastName, email, password)){
                //Creating a new Person instance
                Person person = new Person(userName, lastName, email, password);
                //Storing the Person instance
                realm.executeTransaction(realm1 -> realm1.copyToRealm(person));
                //intentGoToMainActivity (create an intent)
                intentGoToMainActivity(email, password);
            }
        });
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_RESUME)
    public void logInButtonBehavior(){
        //Describing the behavior of the goLogInMessage button
        binding.goLogInMessage.setOnClickListener(view -> intentGoToMainActivity());
    }

    @OnLifecycleEvent(Lifecycle.Event.ON_DESTROY)
    public void closeRealmConnection(){
        //Closing the realm connection
        this.realm.close();
    }

    //Validating if the data is empty
    private boolean validateData(String userName, String lastName, String email, String password){
        if(userName.isEmpty())
            Toast.makeText(signInActivity, R.string.userNameFieldEmpty, Toast.LENGTH_SHORT).show();
        else if(lastName.isEmpty())
            Toast.makeText(signInActivity, R.string.lastNameFieldEmpty, Toast.LENGTH_SHORT).show();
        else if(email.isEmpty())
            Toast.makeText(signInActivity, R.string.emailFieldEmpty, Toast.LENGTH_SHORT).show();
        else if(password.isEmpty())
            Toast.makeText(signInActivity, R.string.passwordFieldEmpty, Toast.LENGTH_SHORT).show();
        else
            return true;
        return false;
    }

    //Performing intent go to Main Activity without any extra (Registry was not performed by the user)
    private void intentGoToMainActivity(){
        Intent goLogInIntent = new Intent(signInActivity, MainActivity.class);
        signInActivity.startActivity(goLogInIntent);
    }

    //Performing intent go to Main Activity with extras (Registry was performed by the user successfully)
    private void intentGoToMainActivity(String email, String password){
        Intent goToMainActivity = new Intent(signInActivity, MainActivity.class);
        goToMainActivity.putExtra(EMAIL_KEY, email);
        goToMainActivity.putExtra(PASSWORD_KEY, password);
        signInActivity.startActivity(goToMainActivity);
    }
}

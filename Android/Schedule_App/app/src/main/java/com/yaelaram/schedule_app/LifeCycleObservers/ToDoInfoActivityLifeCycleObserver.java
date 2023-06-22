package com.yaelaram.schedule_app.LifeCycleObservers;

import android.app.Activity;
import android.os.Bundle;

import androidx.lifecycle.LifecycleObserver;

import com.yaelaram.schedule_app.Model.Person;
import com.yaelaram.schedule_app.Model.To_Do_Item;
import com.yaelaram.schedule_app.databinding.ActivityToDoInfoBinding;

import io.realm.Realm;

public class ToDoInfoActivityLifeCycleObserver implements LifecycleObserver {
    //View binding variable
    private final ActivityToDoInfoBinding binding;
    //MainActivity context
    private final Activity toDoInfoActivity;
    //Bundle variable to get values from the SignInActivity
    private final Bundle bundle;
    //Realm variable connection
    private Realm realm;
    //Int used to store the position of the event to update, it still with the value of -1 if hte activity create a new event
    private int position = -1;
    //Variable used to store a To_Do_Item, no matter if is a new event or an pre-existing event
    private To_Do_Item to_do_item;
    //Variable used to store the user who is the owner of the event
    private Person person;
    //It flag is used to detect if the info of an pre-existing event has been updated
    private boolean flag = false;
    //Boolean used to detect if the activity must use the create new event button or update event button
    private boolean updating_new_to_do_item = false;
    //Constant value for keys used for queries, intent and bundle extras
    private final static String ID_KEY = "id";
    private static final String CASE_KEY = "case";
    private static final String POSITION_KEY = "position";

    public ToDoInfoActivityLifeCycleObserver(ActivityToDoInfoBinding binding, Activity toDoInfoActivity, Bundle bundle){
        this.binding = binding;
        this.toDoInfoActivity = toDoInfoActivity;
        this.bundle = bundle;
    }
}

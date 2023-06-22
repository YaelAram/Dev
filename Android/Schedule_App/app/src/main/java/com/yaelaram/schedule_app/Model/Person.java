package com.yaelaram.schedule_app.Model;

import com.yaelaram.schedule_app.App.MyApplication;

import io.realm.RealmList;
import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class Person extends RealmObject {
    @PrimaryKey
    private int id;
    @Required
    private String name;
    @Required
    private String lastName;
    @Required
    private String email;
    @Required
    private String password;

    private RealmList<To_Do_Item> itemList;

    //Empty constructor, required by Realm
    public Person(){

    }

    //Constructor for creating a new Person instance
    public Person(String name, String lastName, String email, String password){
        this.id = MyApplication.PersonID.incrementAndGet();
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.itemList = new RealmList<>();
    }

    //Getter for id field, the id field does not require a setter method
    public int getId() {
        return id;
    }

    //Getter and setter for name field
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    //Getter and setter for lastName field
    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    //Getter and setter for email field
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    //Getter and setter for password field
    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    //Getter for itemList field
    public RealmList<To_Do_Item> getTo_do_list() {
        return itemList;
    }
}

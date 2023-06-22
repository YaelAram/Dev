package com.yaelaram.schedule_app.App;

import android.app.Application;

import com.yaelaram.schedule_app.Model.Person;
import com.yaelaram.schedule_app.Model.To_Do_Item;

import java.util.concurrent.atomic.AtomicInteger;

import io.realm.Realm;
import io.realm.RealmConfiguration;
import io.realm.RealmObject;
import io.realm.RealmResults;

public class MyApplication extends Application {

    public static AtomicInteger PersonID = new AtomicInteger();
    public static AtomicInteger To_Do_ItemID = new AtomicInteger();

    @Override
    public void onCreate() {
        super.onCreate();
        Realm.init(getApplicationContext());
        setUpRealmConfig();
        Realm realm = Realm.getDefaultInstance();
        PersonID = getIdByTable(realm, Person.class);
        To_Do_ItemID = getIdByTable(realm, To_Do_Item.class);
        realm.close();
    }

    private void setUpRealmConfig(){
        RealmConfiguration config = new RealmConfiguration.Builder()
                .deleteRealmIfMigrationNeeded()
                .allowWritesOnUiThread(true)
                .build();
        Realm.setDefaultConfiguration(config);
    }

    private <T extends RealmObject> AtomicInteger getIdByTable(Realm realm, Class<T> anyClass){
        RealmResults<T> results = realm.where(anyClass).findAll();
        return (results.size() > 0) ? new AtomicInteger(results.max("id").intValue()) : new AtomicInteger();
    }
}

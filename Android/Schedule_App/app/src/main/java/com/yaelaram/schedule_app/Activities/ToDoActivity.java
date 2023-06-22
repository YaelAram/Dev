package com.yaelaram.schedule_app.Activities;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Toast;

import androidx.annotation.Nullable;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.DefaultItemAnimator;
import androidx.recyclerview.widget.LinearLayoutManager;
import androidx.recyclerview.widget.RecyclerView;

import com.yaelaram.schedule_app.Adapters.To_Do_List_Adapter;
import com.yaelaram.schedule_app.Model.Person;
import com.yaelaram.schedule_app.Model.To_Do_Item;
import com.yaelaram.schedule_app.R;
import com.yaelaram.schedule_app.databinding.ActivityToDoBinding;

import io.realm.Realm;
import io.realm.RealmList;

public class ToDoActivity extends AppCompatActivity implements To_Do_List_Adapter.OnItemClickListener, To_Do_List_Adapter.OnItemLongClickListener{

    //Variable for the adapter created for our recycler view
    private To_Do_List_Adapter adapterRecyclerView;
    //View binding variable
    private ActivityToDoBinding binding;
    //Layout Manager variable
    private RecyclerView.LayoutManager layoutManager;
    //Realm variable connection
    private Realm realm;
    //Id variable used for queries, it is initialized by the bundle extras
    private int id;
    /** Constant used for the start activity for result, both activities use the same activity, it adapt itself
    SECOND_ACTIVITY_INFO is used for showing advanced information about an event
    SECOND_ACTIVITY_ADD is used for showing an activity for creating a new event **/
    private final static int SECOND_ACTIVITY_INFO = 100;
    private final static int SECOND_ACTIVITY_ADD = 200;
    //Constant value for keys used for queries, intent and bundle extras
    private static final String ID_KEY = "id";
    private static final String CASE_KEY = "case";
    private static final String POSITION_KEY = "position";
    private static final boolean CASE_CREATE_KEY = true;
    private static final boolean CASE_VIEW_OR_UPDATE_KEY = false;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //Initializing View Binding auto generated class, useful to get the widgets from the xml file to our class
        binding = ActivityToDoBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);

        //Initializing the id field
        if(getIntent().getExtras() != null)
            id = getIntent().getExtras().getInt(ID_KEY);

        //Getting the pre-defined Realm configuration, the setup was perform on the MyApplication class at the app package
        realm = Realm.getDefaultInstance();

        //Query to get the Person instance of the user with the given ID
        Person person = realm.where(Person.class).equalTo(ID_KEY, id).findFirst();
        assert person != null;
        //Getting the RealmList of To_Do_Item
        RealmList<To_Do_Item> to_do_items = person.getTo_do_list();

        //Getting the recycler view from the XML
        RecyclerView recyclerView = binding.toDoRecyclerList;
        //Initializing the linear layout manager
        layoutManager = new LinearLayoutManager(ToDoActivity.this);
        //Defining the adapter for the recycler view, action and deleteAction methods were implemented on the class
        //Action is defined at line 137, deleteAction is defined at line 147
        adapterRecyclerView = new To_Do_List_Adapter(to_do_items, R.layout.to_do_item_layout, this, this);

        //Improving the performance of the recycler view, all the items will have the same size
        recyclerView.setHasFixedSize(true);
        //Adding the default animator
        recyclerView.setItemAnimator(new DefaultItemAnimator());
        //Adding the layout manager to the recycler view
        recyclerView.setLayoutManager(layoutManager);
        //Adding the personalized adapter to the recycler view
        recyclerView.setAdapter(adapterRecyclerView);
    }

    @Override
    protected void onResume() {
        super.onResume();
        //Describing the behavior of addItemButton
        binding.addItemButton.setOnClickListener(view -> goToToDoInfoActivity());
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, @Nullable Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        //Getting the result from the ToDoInfoActivity, RESULT_OK is delivered if and only if the user update the event
        if(requestCode == SECOND_ACTIVITY_INFO){
            if(resultCode == Activity.RESULT_OK){
                if (data != null)
                    //Notifying to the adapter that an event has been updated
                    adapterRecyclerView.notifyItemChanged(data.getIntExtra("position", 0));
            }
        }
        //Getting the result from the ToDoInfoActivity
        // RESULT_OK is delivered if and only if the user create a new event (Press the button "Save")
        if(requestCode == SECOND_ACTIVITY_ADD){
            if(resultCode == Activity.RESULT_OK){
                //Notifying to the adapter that an event has been created
                adapterRecyclerView.notifyItemInserted(0);
                //Scrolling the view to the top, where the new item has been inserted
                layoutManager.scrollToPosition(0);
            }
        }
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        //Closing the realm connection
        realm.close();
    }

    //It create an intent to ToDoInfoActivity to create a new event
    private void goToToDoInfoActivity(){
        Intent intent_to_toDoInfoActivity = new Intent(ToDoActivity.this, ToDoInfoActivity.class);
        intent_to_toDoInfoActivity.putExtra(ID_KEY, id);
        intent_to_toDoInfoActivity.putExtra(CASE_KEY, CASE_CREATE_KEY);
        startActivityForResult(intent_to_toDoInfoActivity, SECOND_ACTIVITY_ADD);
    }

    //Action method, used as parameter of the adapter
    //It create an intent to ToDoInfoActivity to show advanced details of the event or update the information
    @Override
    public void onItemClickListener(To_Do_Item item, int position) {
        Intent intent_to_toDoInfoActivity = new Intent(ToDoActivity.this, ToDoInfoActivity.class);
        intent_to_toDoInfoActivity.putExtra(ID_KEY, id);
        intent_to_toDoInfoActivity.putExtra(CASE_KEY, CASE_VIEW_OR_UPDATE_KEY);
        intent_to_toDoInfoActivity.putExtra(POSITION_KEY, position);
        startActivityForResult(intent_to_toDoInfoActivity, SECOND_ACTIVITY_INFO);
    }

    ////DeleteAction method, used ad parameter of the adapter, id delete the item from the database and from the UI
    @Override
    public boolean onItemLongClickListener(To_Do_Item item, int position) {
        Toast.makeText(ToDoActivity.this, R.string.itemDeletedSuccessfully, Toast.LENGTH_SHORT).show();
        realm.executeTransaction(realm1 -> item.deleteFromRealm());
        adapterRecyclerView.notifyItemRemoved(position);
        return true;
    }
}
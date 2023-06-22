package com.yaelaram.schedule_app.Activities;

import android.app.Activity;
import android.app.DatePickerDialog;
import android.app.TimePickerDialog;
import android.content.Intent;
import android.os.Bundle;
import android.view.Menu;
import android.view.MenuInflater;
import android.view.MenuItem;
import android.view.View;
import android.widget.DatePicker;
import android.widget.TimePicker;
import android.widget.Toast;

import androidx.annotation.NonNull;
import androidx.appcompat.app.AppCompatActivity;

import com.yaelaram.schedule_app.Model.Person;
import com.yaelaram.schedule_app.Model.To_Do_Item;
import com.yaelaram.schedule_app.R;
import com.yaelaram.schedule_app.databinding.ActivityToDoInfoBinding;

import java.util.Calendar;
import java.util.Locale;

import io.realm.Realm;

public class ToDoInfoActivity extends AppCompatActivity implements DatePickerDialog.OnDateSetListener, TimePickerDialog.OnTimeSetListener{

    //Boolean used to detect if the activity must use the create new event button or update event button
    private boolean updating_new_to_do_item = false;
    //View binding variable
    private ActivityToDoInfoBinding binding;
    //Int used to store the position of the event to update, it still with the value of -1 if hte activity create a new event
    private int position = -1;
    //Variable used to store a To_Do_Item, no matter if is a new event or an pre-existing event
    private To_Do_Item to_do_item;
    //Variable used to store the user who is the owner of the event
    private Person person;
    //It flag is used to detect if the info of an pre-existing event has been updated
    private boolean flag = false;
    //Realm variable connection
    private Realm realm;
    //Constant value for keys used for queries, intent and bundle extras
    private final static String ID_KEY = "id";
    private static final String CASE_KEY = "case";
    private static final String POSITION_KEY = "position";
    //Calendar used to store the current date and time
    private Calendar currentDateTime;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //Initializing View Binding auto generated class, useful to get the widgets from the xml file to our class
        binding = ActivityToDoInfoBinding.inflate(getLayoutInflater());
        View view = binding.getRoot();
        setContentView(view);

        //Getting the pre-defined Realm configuration, the setup was perform on the MyApplication class at the app package
        realm = Realm.getDefaultInstance();

        initializeWithBundleData();
    }

    @Override
    protected void onResume() {
        super.onResume();
        //Setting a event to show a datePickerDialog if the textView or the imageButton is pressed
        binding.toDoItemDateText.setOnClickListener(editTextView -> showDatePicker());
        binding.toDoItemDateButton.setOnClickListener(buttonView -> showDatePicker());
        //Setting a event to show a timePickerDialog if the textView or the imageButton is pressed
        binding.toDoItemTimeText.setOnClickListener(editTextView -> showTimePicker());
        binding.toDoItemTimeButton.setOnClickListener(buttonView -> showTimePicker());
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        //Closing the realm connection
        realm.close();
    }

    @Override
    public boolean onCreateOptionsMenu(Menu menu) {
        MenuInflater menuInflater = getMenuInflater();
        //If the updating_new_to_do_item variable is true then the user is viewing advanced details or updating an event
        //If the updating_new_to_do_item variable is false then the user is creating a new event
        if(updating_new_to_do_item)
            menuInflater.inflate(R.menu.action_bar_update_to_do_item, menu);
        else
            menuInflater.inflate(R.menu.action_bar_save_to_do_item, menu);
        return true;
    }

    @Override
    public boolean onOptionsItemSelected(@NonNull MenuItem item) {
        //Getting the data from the UI
        String title = binding.toDoItemTitleText.getText().toString().trim();
        String short_Des = binding.toDoItemShortDesText.getText().toString().trim();
        String long_Des = binding.toDoItemLongDesText.getText().toString().trim();
        String date = binding.toDoItemDateText.getText().toString().trim();
        String time = binding.toDoItemTimeText.getText().toString().trim();
        int importance = (binding.toDoItemUnimportantEvent.isChecked()) ? To_Do_Item.UNIMPORTANT_EVENT : (binding.toDoItemNormalEvent.isChecked()) ? To_Do_Item.NORMAL_EVENT : To_Do_Item.IMPORTANT_EVENT;

        if(item.getItemId() == R.id.add_to_do_item_action_bar){
            //Validating if the fields are empty
            if(validateData(title, short_Des, long_Des)){
                //Setting the values to the generic To_Do_Item created at the beginning (method onCreate)
                to_do_item.setTitle(title);
                to_do_item.setShort_description(short_Des);
                to_do_item.setLong_description(long_Des);
                to_do_item.setImportance(importance);

                realm.executeTransaction(realm1 -> {
                    realm1.copyToRealm(to_do_item);
                    person.getTo_do_list().add(0, to_do_item);
                });

                setResult(Activity.RESULT_OK);
                finish();
            }

            return true;
        }
        else if(item.getItemId() == R.id.update_to_do_item_action_bar){
            //Validating if the fields are empty
            if(validateData(title, short_Des, long_Des)){
                realm.executeTransaction(realm1 -> {
                    if(!title.equals(to_do_item.getTitle())){
                        to_do_item.setTitle(title);
                        flag = true;
                    }
                    if(!date.equals(to_do_item.getDateLongFormat())){
                        to_do_item.setDay(currentDateTime.get(Calendar.DAY_OF_MONTH));
                        to_do_item.setMonth(currentDateTime.get(Calendar.MONTH));
                        to_do_item.setYear(currentDateTime.get(Calendar.YEAR));
                        flag = true;
                    }
                    if(!time.equals(to_do_item.getTimeLongFormat())){
                        to_do_item.setHour(currentDateTime.get(Calendar.HOUR_OF_DAY));
                        to_do_item.setMinute(currentDateTime.get(Calendar.MINUTE));
                        flag = true;
                    }
                    if(!short_Des.equals(to_do_item.getShort_description())){
                        to_do_item.setShort_description(short_Des);
                        flag = true;
                    }
                    if(!long_Des.equals(to_do_item.getLong_description())){
                        to_do_item.setLong_description(long_Des);
                        flag = true;
                    }
                    if(importance != to_do_item.getImportance()){
                        to_do_item.setImportance(importance);
                        flag = true;
                    }
                });

                //If flag is true then the user has updated the event
                //If the flag is false the user has not updated the event
                if(flag)
                    intentToToDoActivity();
                else
                    setResult(Activity.RESULT_CANCELED);
                finish();
            }

            return true;
        }
        else
            return super.onOptionsItemSelected(item);
    }

    @Override
    public void onDateSet(DatePicker view, int year, int month, int dayOfMonth) {
        //Detecting if the day or month or the year has been updated, if one of them were updated then the flag is turned to true
        Calendar currentDate = Calendar.getInstance();
        Calendar calendarFromToDoItem = Calendar.getInstance();
        calendarFromToDoItem.set(to_do_item.getYear(), to_do_item.getMonth(), to_do_item.getDay());
        Calendar calendarFromTimePicker = Calendar.getInstance();
        calendarFromTimePicker.set(year, month, dayOfMonth);

        //Validating if the date entered in the datePicker is equal or greater than the current date
        int validDate = currentDate.compareTo(calendarFromTimePicker);
        //Validating if the date entered in the datePicker is not equal to the date from the current To_Do_Item (event)
        int result = calendarFromToDoItem.compareTo(calendarFromTimePicker);

        if(validDate <= 0 && result != 0){
            currentDateTime.set(Calendar.YEAR, year);
            currentDateTime.set(Calendar.MONTH, month);
            currentDateTime.set(Calendar.DAY_OF_MONTH, dayOfMonth);
        }

        binding.toDoItemDateText.setText(new To_Do_Item("", currentDateTime, "",
                "", To_Do_Item.IMPORTANT_EVENT).getDateLongFormat());
    }

    @Override
    public void onTimeSet(TimePicker view, int hourOfDay, int minute) {
        //Getting the hour and minute
        int currentHour = to_do_item.getHour();
        int currentMinute = to_do_item.getMinute();

        //Detecting if the hour or minute has been updated, if one of them were updated then the flag is turned to true
        if(currentHour != hourOfDay)
            currentDateTime.set(Calendar.HOUR_OF_DAY, hourOfDay);
        if(currentMinute != minute)
            currentDateTime.set(Calendar.MINUTE, minute);

        binding.toDoItemTimeText.setText(new To_Do_Item("", currentDateTime,
                "", "", To_Do_Item.IMPORTANT_EVENT).getTimeLongFormat());
    }

    private void showDatePicker(){
        //The ToDoInfoActivity implements the DatePickerDialog.OnDateSetListener interface
        DatePickerDialog datePickerDialog = new DatePickerDialog(this, this,
                currentDateTime.get(Calendar.YEAR), currentDateTime.get(Calendar.MONTH),
                currentDateTime.get(Calendar.DAY_OF_MONTH));
        datePickerDialog.show();
    }

    private void showTimePicker(){
        //The ToDoInfoActivity implements the TimePickerDialog.OnTimeSetListener interface
        TimePickerDialog timePickerDialog = new TimePickerDialog(this, this,
                currentDateTime.get(Calendar.HOUR_OF_DAY), currentDateTime.get(Calendar.MINUTE),
                true);
        timePickerDialog.show();
    }

    private void bindData(Bundle bundle){
        updating_new_to_do_item = true;
        //Getting the position of the existing event from the list of TO_Do_Item of the Person model class
        position = bundle.getInt(POSITION_KEY);
        assert person != null;
        //Getting the existing event
        to_do_item = person.getTo_do_list().get(position);
        assert to_do_item != null;
        //Setting the data of the event on the UI
        binding.toDoItemTitleText.setText(to_do_item.getTitle());
        binding.toDoItemDateText.setText(to_do_item.getDateLongFormat());
        binding.toDoItemTimeText.setText(to_do_item.getTimeLongFormat());
        binding.toDoItemShortDesText.setText(to_do_item.getShort_description());
        binding.toDoItemLongDesText.setText(to_do_item.getLong_description());
        //Setting the importance of the event on the radio buttons
        if(to_do_item.getImportance() == To_Do_Item.UNIMPORTANT_EVENT)
            binding.toDoItemUnimportantEvent.setChecked(true);
        else if(to_do_item.getImportance() == To_Do_Item.NORMAL_EVENT)
            binding.toDoItemNormalEvent.setChecked(true);
        else
            binding.toDoItemImportantEvent.setChecked(true);
    }

    private boolean validateData(String title, String short_Des, String long_Des){
        if(title.isEmpty())
            Toast.makeText(ToDoInfoActivity.this, R.string.titleFieldEmpty, Toast.LENGTH_SHORT).show();
        else if(short_Des.isEmpty())
            Toast.makeText(ToDoInfoActivity.this, R.string.shortDesFieldEmpty, Toast.LENGTH_SHORT).show();
        else if(long_Des.isEmpty())
            Toast.makeText(ToDoInfoActivity.this, R.string.longDesFieldEmpty, Toast.LENGTH_SHORT).show();
        else
            return true;
        return false;
    }

    private void intentToToDoActivity(){
        Intent intentToDoActivity = new Intent();
        intentToDoActivity.putExtra(POSITION_KEY, position);
        setResult(Activity.RESULT_OK, intentToDoActivity);
    }

    public void initializeWithBundleData(){
        //Checking if the bundle is not null, if bundle.getBoolean("case") is true the activity is used to create a event
        //if bundle.getBoolean("case") is false the activity is used to view advanced details or update an event
        Bundle bundle = getIntent().getExtras();
        if(bundle != null){
            //Getting the person instance (owner of the event or the new event)
            person = realm.where(Person.class).equalTo(ID_KEY, bundle.getInt(ID_KEY)).findFirst();
            if(bundle.getBoolean(CASE_KEY))
                //Creating a generic event
                to_do_item = new To_Do_Item("", Calendar.getInstance(), "", "", To_Do_Item.NORMAL_EVENT);
            else
                //Using the existing event to show the information in the UI
                bindData(bundle);
            currentDateTime = to_do_item.getCalendar();
        }
    }
}
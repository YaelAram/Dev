package com.yaelaram.schedule_app.Model;

import androidx.annotation.NonNull;

import com.yaelaram.schedule_app.App.MyApplication;

import java.util.Calendar;
import java.util.Date;
import java.util.Locale;

import io.realm.RealmObject;
import io.realm.annotations.PrimaryKey;
import io.realm.annotations.Required;

public class To_Do_Item extends RealmObject {
    @PrimaryKey
    private int id;
    @Required
    private String title;
    @Required
    private Date dead_line;
    @Required
    private String short_description;
    @Required
    private String long_description;
    private int importance;

    //Useful constants for setting the importance of a event
    public static final int NORMAL_EVENT = 0;
    public static final int IMPORTANT_EVENT = 1;
    public static final int UNIMPORTANT_EVENT = 2;

    //Empty constructor required by Realm
    public To_Do_Item(){

    }

    //Constructor for creating a new To_Do_Item instance
    public To_Do_Item(String title, Calendar dead_line, String short_description, String long_description, int importance){
        this.id = MyApplication.To_Do_ItemID.incrementAndGet();
        this.title = title;
        this.dead_line = dead_line.getTime();
        this.short_description = short_description;
        this.long_description = long_description;
        this.importance = importance;
    }

    //Getter for id field, it does not require a set method
    public int getId() {
        return id;
    }

    //toString method override
    @NonNull
    @Override
    public String toString() {
        return this.title + ":" + this.short_description;
    }

    //Getter and setter for title field
    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    //Getter and setter for short description
    public String getShort_description() {
        return this.short_description;
    }

    public void setShort_description(String short_description) {
        this.short_description = short_description;
    }

    //Getter and setter for long description
    public String getLong_description() {
        return this.long_description;
    }

    public void setLong_description(String long_description) {
        this.long_description = long_description;
    }

    //Getter and setter for importance field
    public Integer getImportance() {
        return this.importance;
    }

    public void setImportance(int importance) {
        this.importance = importance;
    }

    //Methods for dead_line field, get and set method for year, month, day, hour, minute
    public Calendar getCalendar(){
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(this.dead_line);
        return calendar;
    }

    public String getDateLongFormat(){
        Calendar calendar = getCalendar();
        return calendar.getDisplayName(Calendar.MONTH, Calendar.LONG, Locale.ENGLISH) + " " +
                ((calendar.get(Calendar.DAY_OF_MONTH) < 10) ?
                        ("0" + calendar.get(Calendar.DAY_OF_MONTH)) :
                        (calendar.get(Calendar.DAY_OF_MONTH))) + " "
                + calendar.get(Calendar.YEAR);
    }

    public String getTimeLongFormat(){
        Calendar calendar = getCalendar();
        return calendar.get(Calendar.HOUR_OF_DAY) + ":" + ((calendar.get(Calendar.MINUTE) < 10) ?
                ("0" + calendar.get(Calendar.MINUTE)) : (calendar.get(Calendar.MINUTE)));
    }

    public int getDay(){
        Calendar calendar = getCalendar();
        return calendar.get(Calendar.DAY_OF_MONTH);
    }

    public int getMonth(){
        Calendar calendar = getCalendar();
        return calendar.get(Calendar.MONTH);
    }

    public int getYear(){
        Calendar calendar = getCalendar();
        return calendar.get(Calendar.YEAR);
    }

    public int getHour(){
        Calendar calendar = getCalendar();
        return calendar.get(Calendar.HOUR_OF_DAY);
    }

    public int getMinute(){
        Calendar calendar = getCalendar();
        return calendar.get(Calendar.MINUTE);
    }

    public void setDay(int day){
        Calendar calendar = getCalendar();
        calendar.set(Calendar.DAY_OF_MONTH, day);
        this.dead_line = calendar.getTime();
    }

    public void setMonth(int month){
        Calendar calendar = getCalendar();
        calendar.set(Calendar.MONTH, month);
        this.dead_line = calendar.getTime();
    }

    public void setYear(int year){
        Calendar calendar = getCalendar();
        calendar.set(Calendar.YEAR, year);
        this.dead_line = calendar.getTime();
    }

    public void setHour(int hour){
        Calendar calendar = getCalendar();
        calendar.set(Calendar.HOUR_OF_DAY, hour);
        this.dead_line = calendar.getTime();
    }

    public void setMinute(int minute){
        Calendar calendar = getCalendar();
        calendar.set(Calendar.MINUTE, minute);
        this.dead_line = calendar.getTime();
    }
}

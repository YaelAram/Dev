package com.yaelaram.schedule_app.Adapters;

import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import androidx.annotation.NonNull;
import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.RecyclerView;

import com.yaelaram.schedule_app.Model.To_Do_Item;
import com.yaelaram.schedule_app.R;

import java.util.List;

public class To_Do_List_Adapter extends RecyclerView.Adapter<To_Do_List_Adapter.ViewHolder> {
    //List of To_Do_Item used to charge the data to each item of the recycler view
    private final List<To_Do_Item> dataSet;
    //Personalized layout used for each item of the recycler view
    private final int layout;
    //Action used for the OnClick event
    private final OnItemClickListener action;
    //Action used for the OnLongClick event
    private final OnItemLongClickListener deleteAction;

    //Constructor method
    public To_Do_List_Adapter(List<To_Do_Item> dataSet, int layout, OnItemClickListener action, OnItemLongClickListener deleteAction){
        this.dataSet = dataSet;
        this.layout = layout;
        this.action = action;
        this.deleteAction = deleteAction;
    }

    @NonNull
    @Override
    public To_Do_List_Adapter.ViewHolder onCreateViewHolder(@NonNull ViewGroup parent, int viewType) {
        //Loading the personalized layout got in the constructor
        View view = LayoutInflater.from(parent.getContext()).inflate(this.layout, parent, false);
        return new ViewHolder(view);
    }

    @Override
    public void onBindViewHolder(@NonNull To_Do_List_Adapter.ViewHolder holder, int position) {
        //Validating if the item still on the dataSet, is useful to avoid an exception if the user delete an item
        if(dataSet.get(position).isValid()){
            //Delivering the To_Do_Item, OnClick event and OnLongClick event
            holder.bind(this.dataSet.get(position), this.action, this.deleteAction);
        }
    }

    @Override
    public int getItemCount() {
        //Returning the size of the dataSet
        return this.dataSet.size();
    }

    public static class ViewHolder extends RecyclerView.ViewHolder{
        //Personalized layout for each item only contains the title, date and short description of the event
        private final TextView to_do_item_title_text;
        private final TextView to_do_item_short_description;
        private final TextView to_do_item_dead_line;

        public ViewHolder(@NonNull View itemView) {
            super(itemView);
            //Getting te reference of each element of the layout
            to_do_item_title_text = itemView.findViewById(R.id.to_do_item_title);
            to_do_item_dead_line = itemView.findViewById(R.id.to_do_item_date);
            to_do_item_short_description = itemView.findViewById(R.id.to_do_item_short_des);
        }

        public void bind(final To_Do_Item item, final OnItemClickListener action, final OnItemLongClickListener deleteAction){
            //Setting the data of each event to the item layout
            this.to_do_item_title_text.setText(item.getTitle());
            this.to_do_item_dead_line.setText(item.getDateLongFormat());
            this.to_do_item_short_description.setText(item.getShort_description());
            //Setting the background color to each item
            //BLUE = UNIMPORTANT_EVENT, GREEN = NORMAL_EVENT, RED = IMPORTANT_EVENT
            if(item.getImportance() == To_Do_Item.UNIMPORTANT_EVENT)
                itemView.setBackgroundColor(ContextCompat.getColor(itemView.getContext(), R.color.blue));
            else if(item.getImportance() == To_Do_Item.NORMAL_EVENT)
                itemView.setBackgroundColor(ContextCompat.getColor(itemView.getContext(), R.color.green));
            else
                itemView.setBackgroundColor(ContextCompat.getColor(itemView.getContext(), R.color.red));

            //Setting the OnClick event to the item
            itemView.setOnClickListener(view -> action.onItemClickListener(item, getAdapterPosition()));
            //Setting the OnLongClick event to the item
            itemView.setOnLongClickListener(view -> deleteAction.onItemLongClickListener(item, getAdapterPosition()));
        }
    }

    //Interface used to OnClick event for each item of the recycler view
    public interface OnItemClickListener{
        void onItemClickListener(To_Do_Item item, int position);
    }

    //Interface used to OnLongClick event for each item of the recycler view
    public interface OnItemLongClickListener{
        boolean onItemLongClickListener(To_Do_Item item, int position);
    }
}

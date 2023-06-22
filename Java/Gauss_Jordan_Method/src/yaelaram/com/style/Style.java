package yaelaram.com.style;

import javax.swing.*;
import java.awt.*;
import java.awt.event.FocusEvent;
import java.awt.event.FocusListener;
import java.awt.event.MouseEvent;
import java.awt.event.MouseListener;

public class Style implements FocusListener, MouseListener {
    private final Color greyLight = new Color(230, 230, 230);
    private final Color grey = new Color(212, 212, 212);
    private final Color greyDark = new Color(55, 58, 64);
    private final Color black = new Color(0, 0, 0);
    private final Font primaryFont = new Font("Roboto", Font.PLAIN, 13);
    private final Font primaryFontBold = new Font("Roboto", Font.BOLD, 16);
    private final Font secondaryFont = new Font("Roboto", Font.BOLD, 13);
    private final JFrame jFrame;

    public Style(JFrame jFrame) {
        this.jFrame = jFrame;
    }

    //Styling Method JFrame
    public void frameStyle(String title, int exitMode, int[] bound){
        jFrame.setBounds(bound[0], bound[1], bound[2], bound[3]);
        jFrame.setTitle(title);
        jFrame.getContentPane().setBackground(this.greyLight);
        jFrame.setLayout(null);
        jFrame.setDefaultCloseOperation(exitMode);
        jFrame.setLocationRelativeTo(null);
    }

    //Styling Method JLabel
    public void labelStyle(JLabel jLabel, int[] bound, String text){
        jLabel.setBounds(bound[0], bound[1], bound[2], bound[3]);
        jLabel.setText(text);
        jLabel.setForeground(this.black);
        jLabel.setFont(this.secondaryFont);
        jFrame.add(jLabel);
    }

    //Styling Methods JTextField
    public void activeTextFieldStyle(JTextField jTextField){
        jTextField.setBorder(BorderFactory.createMatteBorder(0, 0, 3, 0, this.greyDark));
        jTextField.setBackground(this.greyLight);
        jTextField.setForeground(this.black);
    }

    public void inactiveTextFieldStyle(JTextField jTextField){
        jTextField.setBorder(BorderFactory.createEmptyBorder(0,0,1,0));
        jTextField.setBackground(this.grey);
        jTextField.setForeground(this.greyDark);
    }

    public void textFieldStyle(JTextField jTextField, int[] bound){
        jTextField.setBounds(bound[0], bound[1], bound[2], bound[3]);
        jTextField.setFont(this.primaryFont);
        jTextField.setForeground(this.black);
        inactiveTextFieldStyle(jTextField);
        jTextField.addFocusListener(this);
        jFrame.add(jTextField);
    }

    //Styling Methods JButton
    public void activeButtonStyle(JButton jButton){
        jButton.setBorder(BorderFactory.createMatteBorder(3, 3, 3, 3, this.greyDark));
        jButton.setBackground(this.greyDark);
        jButton.setForeground(this.greyLight);
    }

    public void inactiveButtonStyle(JButton jButton){
        jButton.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, this.greyDark));
        jButton.setBackground(this.greyLight);
        jButton.setForeground(this.greyDark);
    }

    public void buttonStyle(JButton jButton, int[] bound, String text){
        jButton.setBounds(bound[0], bound[1], bound[2], bound[3]);
        jButton.setText(text);
        jButton.setFocusable(false);
        jButton.setFont(this.primaryFontBold);
        inactiveButtonStyle(jButton);
        jButton.addMouseListener(this);
        jFrame.add(jButton);
    }

    //Focus Events
    @Override
    public void focusGained(FocusEvent focusEvent) {
        try{
            activeTextFieldStyle((JTextField) focusEvent.getSource());
        }
        catch (Exception error){
            System.out.println(error.getMessage());
            error.printStackTrace();
        }
    }

    @Override
    public void focusLost(FocusEvent focusEvent) {
        try{
            inactiveTextFieldStyle((JTextField) focusEvent.getSource());
        }
        catch (Exception error){
            System.out.println(error.getMessage());
            error.printStackTrace();
        }
    }

    //Mouse Events
    @Override
    public void mouseClicked(MouseEvent e) {

    }

    @Override
    public void mousePressed(MouseEvent e) {

    }

    @Override
    public void mouseReleased(MouseEvent e) {

    }

    @Override
    public void mouseEntered(MouseEvent mouseEvent) {
        try{
            activeButtonStyle((JButton) mouseEvent.getSource());
        }
        catch (Exception error){
            System.out.println(error.getMessage());
            error.printStackTrace();
        }
    }

    @Override
    public void mouseExited(MouseEvent mouseEvent) {
        try{
            inactiveButtonStyle((JButton) mouseEvent.getSource());
        }
        catch (Exception error){
            System.out.println(error.getMessage());
            error.printStackTrace();
        }
    }
}

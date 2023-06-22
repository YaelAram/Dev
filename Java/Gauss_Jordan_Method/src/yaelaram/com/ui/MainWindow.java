package yaelaram.com.ui;

import yaelaram.com.style.StringUI;
import yaelaram.com.style.Style;

import javax.swing.*;
import java.awt.event.*;
import java.text.DecimalFormat;

public class MainWindow extends JFrame implements ActionListener {

    //Style class helps us to apply a personalized style for the components of the UI
    private final Style style;
    //Core buttons
    private JButton buildTableButton, calculateResultButton, cleanTableButton;
    //Contain the number of rows and columns of the table
    private JTextField rowTextField, columnTextField;
    private int numberOfRow, numberOfColumn;
    //Constants used for set the max size of the matrix
    private final static int MAX_SIZE_MATRIX_ROW = 20;
    private final static int MAX_SIZE_MATRIX_COLUMN = 20;
    //Table create from the rowTextField and columnTextField values
    private final JTextField[][] systemMatrix = new JTextField[MAX_SIZE_MATRIX_ROW][MAX_SIZE_MATRIX_COLUMN];

    public MainWindow(){
        style = new Style(this);
        style.frameStyle(StringUI.TITLE, WindowConstants.EXIT_ON_CLOSE, new int[]{100, 10, 1030, 710});
        inicio();
        setVisible(true);
    }

    private void inicio(){
        //Labels for TextFields used to get the number of rows and columns
        style.labelStyle(new JLabel(), new int[]{30, 18, 90, 30}, StringUI.ROW_LABEL);

        style.labelStyle(new JLabel(), new int[]{175, 18, 120, 30}, StringUI.COLUMN_LABEL);

        rowTextField = new JTextField();
        style.textFieldStyle(rowTextField, new int[]{100, 20, 40, 25});

        columnTextField = new JTextField();
        style.textFieldStyle(columnTextField, new int[]{275, 20, 40, 25});

        //Core Buttons
        //buildTableButton draw a table based on the number of columns and rows entered
        buildTableButton = new JButton();
        style.buttonStyle(buildTableButton, new int[]{350, 15, 100, 35}, StringUI.OK_BUTTON);
        buildTableButton.addActionListener(this);

        //calculateResultButton give us the result of the equation system
        calculateResultButton = new JButton();
        style.buttonStyle(calculateResultButton, new int[]{470, 15, 120, 35}, StringUI.CALCULATE_BUTTON);
        calculateResultButton.addActionListener(this);

        //rebuildTableButton is used to reset size of the matrix
        cleanTableButton = new JButton();
        style.buttonStyle(cleanTableButton, new int[]{610, 15, 140, 35}, StringUI.CLEAN_BUTTON);
        cleanTableButton.addActionListener(this);

        //Creating the matrix
        for(int i = 0 ; i<MAX_SIZE_MATRIX_ROW ; i++){
            for(int j = 0 ; j<MAX_SIZE_MATRIX_COLUMN ; j++){
                systemMatrix[i][j] = new JTextField();
                systemMatrix[i][j].setVisible(false);
                style.textFieldStyle(systemMatrix[i][j], new int[]{(10 + (50 * j)), (65 + (30 * i)), 40, 25});
            }
        }
    }

    private boolean verifyRowAndColumnNumberIsNotEmpty(){
        String rowNumber = rowTextField.getText();
        String columnNumber = columnTextField.getText();
        if(rowNumber.isEmpty() || rowNumber.isBlank())
            JOptionPane.showMessageDialog(null, StringUI.WARNING_MESSAGE_EMPTY_ROW_NUMBER);
        else if(columnNumber.isBlank() || columnNumber.isEmpty())
            JOptionPane.showMessageDialog(null, StringUI.WARNING_MESSAGE_EMPTY_COLUMN_NUMBER);
        else
            return true;
        return false;
    }

    private boolean verifyRowAndColumnNumberIsRight(){
        if(numberOfRow > 20 || numberOfRow < 2)
            JOptionPane.showMessageDialog(null, StringUI.WARNING_MESSAGE_WRONG_RANGE_ROW_NUMBER);
        else if(numberOfColumn > 20 || numberOfColumn < 1)
            JOptionPane.showMessageDialog(null, StringUI.WARNING_MESSAGE_WRONG_RANGE_COLUMN_NUMBER);
        else
            return true;
        return false;
    }

    private void showTable(){
        for (int i = 0; i < MAX_SIZE_MATRIX_ROW; i++) {
            for (int j = 0; j < MAX_SIZE_MATRIX_COLUMN; j++) {
                if(i < numberOfRow && j < numberOfColumn){
                    systemMatrix[i][j].setVisible(true);
                    systemMatrix[i][j].setText("");
                }
                else
                    systemMatrix[i][j].setVisible(false);
            }
        }
    }

    private void cleanTable(){
        for (int i = 0; i < numberOfRow; i++) {
            for (int j = 0; j < numberOfColumn; j++) {
                if(systemMatrix[i][j].isVisible())
                    systemMatrix[i][j].setText("");
            }
        }
    }

    @Override
    public void actionPerformed(ActionEvent evt) {
        try {
            if(evt.getSource() == buildTableButton){
                if(verifyRowAndColumnNumberIsNotEmpty()){
                    numberOfRow = Integer.parseInt(rowTextField.getText());
                    numberOfColumn = Integer.parseInt(columnTextField.getText());
                    if(verifyRowAndColumnNumberIsRight())
                        showTable();
                }
            }
            if(evt.getSource() == calculateResultButton){
                double[][] num = new double[numberOfRow][numberOfColumn];
                double aux, mul;
                DecimalFormat salida = new DecimalFormat("#.####");
                //Getting data from the UI table
                for(int i = 0 ; i< numberOfRow; i++){
                    for(int j = 0 ; j< numberOfColumn; j++){
                        num[i][j] = Double.parseDouble(systemMatrix[i][j].getText());
                    }
                }
                //Diagonalizing
                int numberOfRowsToDiagonalizing = (numberOfRow == numberOfColumn) ? (numberOfRow - 1) : (numberOfRow < numberOfColumn) ? numberOfRow : (numberOfColumn - 1);
                for(int i = 0 ; i<numberOfRowsToDiagonalizing ; i++){
                    aux = num[i][i];
                    System.out.println("Division: " + aux);
                    for(int j = 0 ; j<numberOfColumn ; j++){
                        if(aux != 0) num[i][j] /= aux;
                        System.out.println(num[i][j] + "\t");
                    }

                    for(int k = 0 ; k<numberOfRow ; k++){
                        mul = num[k][i];
                        System.out.println("Mul: " + mul);
                        for(int l = 0 ; l<numberOfColumn ; l++){
                            if(k != i) num[k][l] -= (mul * num[i][l]);
                        }
                        for(int m = 0 ; m<numberOfRow ; m++){
                            for(int n = 0 ; n<numberOfColumn ; n++)
                                System.out.print(num[m][n] + "    ");
                            System.out.println();
                        }
                    }
                }
                //Showing the diagonalized matrix
                for(int i = 0 ; i< numberOfRow; i++){
                    for(int j = 0 ; j< numberOfColumn; j++)
                        systemMatrix[i][j].setText(String.valueOf(salida.format(num[i][j])));
                }
            }
            if(evt.getSource() == cleanTableButton){
                if(verifyRowAndColumnNumberIsNotEmpty()){
                    numberOfRow = Integer.parseInt(rowTextField.getText());
                    numberOfColumn = Integer.parseInt(columnTextField.getText());
                    if(verifyRowAndColumnNumberIsRight())
                        cleanTable();
                }
            }
        }catch (Exception e){
            System.out.println("Error: " + e.getMessage());
            e.printStackTrace();
        }
    }
}

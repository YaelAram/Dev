package com.yaelaram;

import javax.swing.*;
import java.awt.*;
import java.text.DecimalFormat;

public class ElementWindow {

    private final JFrame f;
    private final TableElement element = TableElementList.getInstance().get(TableElementList.getPosition());
    private final Color greyDarkCool = new Color(110, 110, 110);
    private final Font primaryFont = new Font("Roboto", Font.BOLD, 17);

    public ElementWindow(){
        f = new JFrame();
        f.setBounds(100, 10, 450, 500);
        f.setLayout(null);
        f.setDefaultCloseOperation(WindowConstants.DISPOSE_ON_CLOSE);
        f.setTitle(element.getName());
        Color greyCool = new Color(33, 33, 33);
        f.getContentPane().setBackground(greyCool);
        start();
        f.setVisible(true);
    }

    private void start(){

        DecimalFormat decimalFormat = new DecimalFormat("#.000");

        JLabel name = new JLabel("Name: " + element.getName());
        name.setBounds(10, 10, 250, 30);
        name.setForeground(greyDarkCool);
        name.setFont(primaryFont);
        f.add(name);

        JLabel symbol = new JLabel("Symbol: " + element.getSymbol());
        symbol.setBounds(10, 50, 250, 30);
        symbol.setForeground(greyDarkCool);
        symbol.setFont(primaryFont);
        f.add(symbol);

        JLabel atomicNumber = new JLabel("Atomic Number: " + element.getAtomic_number());
        atomicNumber.setBounds(10, 90, 250, 30);
        atomicNumber.setForeground(greyDarkCool);
        atomicNumber.setFont(primaryFont);
        f.add(atomicNumber);

        JLabel classification = new JLabel("Classification: " + element.getClassification());
        classification.setBounds(10, 130, 250, 30);
        classification.setForeground(greyDarkCool);
        classification.setFont(primaryFont);
        f.add(classification);

        JLabel group = new JLabel("Group: " + element.getGroup());
        group.setBounds(10, 170, 250, 30);
        group.setForeground(greyDarkCool);
        group.setFont(primaryFont);
        f.add(group);

        JLabel period = new JLabel("Period: " + element.getPeriod());
        period.setBounds(10, 210, 250, 30);
        period.setForeground(greyDarkCool);
        period.setFont(primaryFont);
        f.add(period);

        JLabel atomicWeight = new JLabel("Atomic Weight: " + element.getAtomic_weight() + "u");
        atomicWeight.setBounds(10, 250, 250, 30);
        atomicWeight.setForeground(greyDarkCool);
        atomicWeight.setFont(primaryFont);
        f.add(atomicWeight);

        JLabel meltingPoint = new JLabel("Melting Point: " + decimalFormat.format(element.getMelting_point()) + "°K equal to " + decimalFormat.format(element.getBoiling_point() + 263) + " °C");
        meltingPoint.setBounds(10, 290, 450, 30);
        meltingPoint.setForeground(greyDarkCool);
        meltingPoint.setFont(primaryFont);
        f.add(meltingPoint);

        JLabel boilingPoint = new JLabel("Boiling Point: " + decimalFormat.format(element.getBoiling_point()) + "°K equal to " + decimalFormat.format(element.getBoiling_point() + 263) + " °C");
        boilingPoint.setBounds(10, 330, 450, 30);
        boilingPoint.setForeground(greyDarkCool);
        boilingPoint.setFont(primaryFont);
        f.add(boilingPoint);

        JLabel electronegativity = new JLabel("Electronegativity: " + element.getElectronegativity());
        electronegativity.setBounds(10, 370, 250, 30);
        electronegativity.setForeground(greyDarkCool);
        electronegativity.setFont(primaryFont);
        f.add(electronegativity);

        JLabel electronicConfiguration = new JLabel("Electronic Configuration: " + element.getElectronic_configuration());
        electronicConfiguration.setBounds(10, 410, 660, 30);
        electronicConfiguration.setForeground(greyDarkCool);
        electronicConfiguration.setFont(primaryFont);
        f.add(electronicConfiguration);

        JLabel valences = new JLabel("Valences: " + element.getValences());
        valences.setBounds(10, 450, 250, 30);
        valences.setForeground(greyDarkCool);
        valences.setFont(primaryFont);
        f.add(valences);
    }
}

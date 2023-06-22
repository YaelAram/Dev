package com.yaelaram;

import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.text.DecimalFormat;
import java.util.Collections;
import java.util.List;

public class Window implements ActionListener {

    private JButton Mix;
    private final JFrame f;
    private JTextField FirstElement, SecondElement;
    private JLabel result;
    private JCheckBox showInfoElement;
    private final Color greyCool = new Color(33, 33, 33);
    private final Color greyLightCool = new Color(170, 170, 170);
    private final Font primaryFont = new Font("Roboto", Font.BOLD, 16);
    private final Font secundaryFont = new Font("Roboto", Font.BOLD, 15);

    public Window(){
        f = new JFrame();
        f.setBounds(100, 10, 1150, 710);
        f.setLayout(null);
        f.setDefaultCloseOperation(WindowConstants.EXIT_ON_CLOSE);
        f.setTitle("Chemistry Project");
        f.getContentPane().setBackground(greyCool);
        start();
        f.setVisible(true);
    }

    private void start(){

        FirstElement = new JTextField();
        FirstElement.setBounds(10, 25, 120, 30);
        FirstElement.setEditable(false);
        FirstElement.setBackground(greyCool);
        FirstElement.setForeground(greyLightCool);
        FirstElement.setFont(primaryFont);
        FirstElement.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
        f.add(FirstElement);

        SecondElement = new JTextField();
        SecondElement.setBounds(140, 25, 120, 30);
        SecondElement.setEditable(false);
        SecondElement.setBackground(greyCool);
        SecondElement.setForeground(greyLightCool);
        SecondElement.setFont(primaryFont);
        SecondElement.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
        f.add(SecondElement);

        Mix = new JButton("Mix Elements");
        Mix.setBackground(greyCool);
        Mix.setBounds(270, 25, 120, 30);
        Mix.setForeground(greyLightCool);
        Mix.setFont(primaryFont);
        Mix.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
        Mix.addActionListener(this);
        f.add(Mix);

        showInfoElement = new JCheckBox("Information Mode");
        showInfoElement.setBounds(10, 60, 200, 30);
        showInfoElement.setForeground(greyLightCool);
        showInfoElement.setFont(primaryFont);
        showInfoElement.setBackground(greyCool);
        f.add(showInfoElement);

        result = new JLabel();
        result.setBounds(420, 25, 450, 30);
        result.setForeground(greyLightCool);
        result.setFont(primaryFont);
        result.setBackground(greyCool);
        f.add(result);

        JButton hydrogen = new JButton("H");
        hydrogen.setBounds(10, 100, 60, 60);
        hydrogen.setName("Hydrogen");
        hydrogen.setFont(secundaryFont);
        hydrogen.setForeground(greyLightCool);
        hydrogen.setBackground(greyCool);
        hydrogen.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
        hydrogen.addActionListener(this);
        f.add(hydrogen);

        JButton helium = new JButton("He");
        helium.setBounds(1030, 100, 60, 60);
        helium.setName("Helium");
        helium.setFont(secundaryFont);
        helium.setForeground(greyLightCool);
        helium.setBackground(greyCool);
        helium.setBorder(BorderFactory.createMatteBorder(2, 2, 1, 2, greyLightCool));
        helium.addActionListener(this);
        f.add(helium);

        JButton lithium = new JButton("Li");
        lithium.setBounds(10, 160, 60, 60);
        lithium.setName("Lithium");
        lithium.setFont(secundaryFont);
        lithium.setForeground(greyLightCool);
        lithium.setBackground(greyCool);
        lithium.setBorder(BorderFactory.createMatteBorder(2, 2, 1, 2, greyLightCool));
        lithium.addActionListener(this);
        f.add(lithium);

        JButton beryllium = new JButton("Be");
        beryllium.setBounds(70, 160, 60, 60);
        beryllium.setName("Beryllium");
        beryllium.setFont(secundaryFont);
        beryllium.setForeground(greyLightCool);
        beryllium.setBackground(greyCool);
        beryllium.setBorder(BorderFactory.createMatteBorder(2, 2, 1, 2, greyLightCool));
        beryllium.addActionListener(this);
        f.add(beryllium);

        JButton boron = new JButton("B");
        boron.setBounds(730, 160, 60, 60);
        boron.setName("Boron");
        boron.setFont(secundaryFont);
        boron.setForeground(greyLightCool);
        boron.setBackground(greyCool);
        boron.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
        boron.addActionListener(this);
        f.add(boron);

        JButton carbon = new JButton("C");
        carbon.setBounds(790, 160, 60, 60);
        carbon.setName("Carbon");
        carbon.setFont(secundaryFont);
        carbon.setForeground(greyLightCool);
        carbon.setBackground(greyCool);
        carbon.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 1, greyLightCool));
        carbon.addActionListener(this);
        f.add(carbon);

        JButton nitrogen = new JButton("N");
        nitrogen.setBounds(850, 160, 60, 60);
        nitrogen.setName("Nitrogen");
        nitrogen.setFont(secundaryFont);
        nitrogen.setForeground(greyLightCool);
        nitrogen.setBackground(greyCool);
        nitrogen.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        nitrogen.addActionListener(this);
        f.add(nitrogen);

        JButton oxygen = new JButton("O");
        oxygen.setBounds(910, 160, 60, 60);
        oxygen.setName("Oxygen");
        oxygen.setFont(secundaryFont);
        oxygen.setForeground(greyLightCool);
        oxygen.setBackground(greyCool);
        oxygen.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 2, greyLightCool));
        oxygen.addActionListener(this);
        f.add(oxygen);

        JButton fluorine = new JButton("F");
        fluorine.setBounds(970, 160, 60, 60);
        fluorine.setName("Fluorine");
        fluorine.setFont(secundaryFont);
        fluorine.setForeground(greyLightCool);
        fluorine.setBackground(greyCool);
        fluorine.setBorder(BorderFactory.createMatteBorder(2, 2, 1, 2, greyLightCool));
        fluorine.addActionListener(this);
        f.add(fluorine);

        JButton neon = new JButton("Ne");
        neon.setBounds(1030, 160, 60, 60);
        neon.setName("Neon");
        neon.setFont(secundaryFont);
        neon.setForeground(greyLightCool);
        neon.setBackground(greyCool);
        neon.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        neon.addActionListener(this);
        f.add(neon);

        JButton sodium = new JButton("Na");
        sodium.setBounds(10, 220, 60, 60);
        sodium.setName("Sodium");
        sodium.setFont(secundaryFont);
        sodium.setForeground(greyLightCool);
        sodium.setBackground(greyCool);
        sodium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        sodium.addActionListener(this);
        f.add(sodium);

        JButton magnesium = new JButton("Mg");
        magnesium.setBounds(70, 220, 60, 60);
        magnesium.setName("Magnesium");
        magnesium.setFont(secundaryFont);
        magnesium.setForeground(greyLightCool);
        magnesium.setBackground(greyCool);
        magnesium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        magnesium.addActionListener(this);
        f.add(magnesium);

        JButton aluminium = new JButton("Al");
        aluminium.setBounds(730, 220, 60, 60);
        aluminium.setName("Aluminium");
        aluminium.setFont(secundaryFont);
        aluminium.setForeground(greyLightCool);
        aluminium.setBackground(greyCool);
        aluminium.setBorder(BorderFactory.createMatteBorder(2, 2, 1, 2, greyLightCool));
        aluminium.addActionListener(this);
        f.add(aluminium);

        JButton silicon = new JButton("Si");
        silicon.setBounds(790, 220, 60, 60);
        silicon.setName("Silicon");
        silicon.setFont(secundaryFont);
        silicon.setForeground(greyLightCool);
        silicon.setBackground(greyCool);
        silicon.setBorder(BorderFactory.createMatteBorder(2, 2, 1, 2, greyLightCool));
        silicon.addActionListener(this);
        f.add(silicon);

        JButton phosphorus = new JButton("P");
        phosphorus.setBounds(850, 220, 60, 60);
        phosphorus.setName("Phosphorus");
        phosphorus.setFont(secundaryFont);
        phosphorus.setForeground(greyLightCool);
        phosphorus.setBackground(greyCool);
        phosphorus.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 1, greyLightCool));
        phosphorus.addActionListener(this);
        f.add(phosphorus);

        JButton sulfur = new JButton("S");
        sulfur.setBounds(910, 220, 60, 60);
        sulfur.setName("Sulfur");
        sulfur.setFont(secundaryFont);
        sulfur.setForeground(greyLightCool);
        sulfur.setBackground(greyCool);
        sulfur.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 2, greyLightCool));
        sulfur.addActionListener(this);
        f.add(sulfur);

        JButton chlorine = new JButton("Cl");
        chlorine.setBounds(970, 220, 60, 60);
        chlorine.setName("Chlorine");
        chlorine.setFont(secundaryFont);
        chlorine.setForeground(greyLightCool);
        chlorine.setBackground(greyCool);
        chlorine.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        chlorine.addActionListener(this);
        f.add(chlorine);

        JButton argon = new JButton("Ar");
        argon.setBounds(1030, 220, 60, 60);
        argon.setName("Argon");
        argon.setFont(secundaryFont);
        argon.setForeground(greyLightCool);
        argon.setBackground(greyCool);
        argon.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        argon.addActionListener(this);
        f.add(argon);

        JButton potassium = new JButton("K");
        potassium.setBounds(10, 280, 60, 60);
        potassium.setName("Potassium");
        potassium.setFont(secundaryFont);
        potassium.setForeground(greyLightCool);
        potassium.setBackground(greyCool);
        potassium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        potassium.addActionListener(this);
        f.add(potassium);

        JButton calcium = new JButton("Ca");
        calcium.setBounds(70, 280, 60, 60);
        calcium.setName("Calcium");
        calcium.setFont(secundaryFont);
        calcium.setForeground(greyLightCool);
        calcium.setBackground(greyCool);
        calcium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        calcium.addActionListener(this);
        f.add(calcium);

        JButton scandium = new JButton("Sc");
        scandium.setBounds(130, 280, 60, 60);
        scandium.setName("Scandium");
        scandium.setFont(secundaryFont);
        scandium.setForeground(greyLightCool);
        scandium.setBackground(greyCool);
        scandium.setBorder(BorderFactory.createMatteBorder(2, 2, 1, 1, greyLightCool));
        scandium.addActionListener(this);
        f.add(scandium);

        JButton titanium = new JButton("Ti");
        titanium.setBounds(190, 280, 60, 60);
        titanium.setName("Titanium");
        titanium.setFont(secundaryFont);
        titanium.setForeground(greyLightCool);
        titanium.setBackground(greyCool);
        titanium.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        titanium.addActionListener(this);
        f.add(titanium);

        JButton vanadium = new JButton("V");
        vanadium.setBounds(250, 280, 60, 60);
        vanadium.setName("Vanadium");
        vanadium.setFont(secundaryFont);
        vanadium.setForeground(greyLightCool);
        vanadium.setBackground(greyCool);
        vanadium.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        vanadium.addActionListener(this);
        f.add(vanadium);

        JButton chromium = new JButton("Cr");
        chromium.setBounds(310, 280, 60, 60);
        chromium.setName("Chromium");
        chromium.setFont(secundaryFont);
        chromium.setForeground(greyLightCool);
        chromium.setBackground(greyCool);
        chromium.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        chromium.addActionListener(this);
        f.add(chromium);

        JButton manganese = new JButton("Mn");
        manganese.setBounds(370, 280, 60, 60);
        manganese.setName("Manganese");
        manganese.setFont(secundaryFont);
        manganese.setForeground(greyLightCool);
        manganese.setBackground(greyCool);
        manganese.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        manganese.addActionListener(this);
        f.add(manganese);

        JButton iron = new JButton("Fe");
        iron.setBounds(430, 280, 60, 60);
        iron.setName("Iron");
        iron.setFont(secundaryFont);
        iron.setForeground(greyLightCool);
        iron.setBackground(greyCool);
        iron.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        iron.addActionListener(this);
        f.add(iron);

        JButton cobalt = new JButton("Co");
        cobalt.setBounds(490, 280, 60, 60);
        cobalt.setName("Cobalt");
        cobalt.setFont(secundaryFont);
        cobalt.setForeground(greyLightCool);
        cobalt.setBackground(greyCool);
        cobalt.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        cobalt.addActionListener(this);
        f.add(cobalt);

        JButton nickel = new JButton("Ni");
        nickel.setBounds(550, 280, 60, 60);
        nickel.setName("Nickel");
        nickel.setFont(secundaryFont);
        nickel.setForeground(greyLightCool);
        nickel.setBackground(greyCool);
        nickel.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        nickel.addActionListener(this);
        f.add(nickel);

        JButton copper = new JButton("Cu");
        copper.setBounds(610, 280, 60, 60);
        copper.setName("Copper");
        copper.setFont(secundaryFont);
        copper.setForeground(greyLightCool);
        copper.setBackground(greyCool);
        copper.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 1, greyLightCool));
        copper.addActionListener(this);
        f.add(copper);

        JButton zinc = new JButton("Zn");
        zinc.setBounds(670, 280, 60, 60);
        zinc.setName("Zinc");
        zinc.setFont(secundaryFont);
        zinc.setForeground(greyLightCool);
        zinc.setBackground(greyCool);
        zinc.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 2, greyLightCool));
        zinc.addActionListener(this);
        f.add(zinc);

        JButton gallium = new JButton("Ga");
        gallium.setBounds(730, 280, 60, 60);
        gallium.setName("Gallium");
        gallium.setFont(secundaryFont);
        gallium.setForeground(greyLightCool);
        gallium.setBackground(greyCool);
        gallium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        gallium.addActionListener(this);
        f.add(gallium);

        JButton germanium = new JButton("Ge");
        germanium.setBounds(790, 280, 60, 60);
        germanium.setName("Germanium");
        germanium.setFont(secundaryFont);
        germanium.setForeground(greyLightCool);
        germanium.setBackground(greyCool);
        germanium.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 1, greyLightCool));
        germanium.addActionListener(this);
        f.add(germanium);

        JButton arsenic = new JButton("As");
        arsenic.setBounds(850, 280, 60, 60);
        arsenic.setName("Arsenic");
        arsenic.setFont(secundaryFont);
        arsenic.setForeground(greyLightCool);
        arsenic.setBackground(greyCool);
        arsenic.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 2, greyLightCool));
        arsenic.addActionListener(this);
        f.add(arsenic);

        JButton selenium = new JButton("Se");
        selenium.setBounds(910, 280, 60, 60);
        selenium.setName("Selenium");
        selenium.setFont(secundaryFont);
        selenium.setForeground(greyLightCool);
        selenium.setBackground(greyCool);
        selenium.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 2, greyLightCool));
        selenium.addActionListener(this);
        f.add(selenium);

        JButton bromine = new JButton("Br");
        bromine.setBounds(970, 280, 60, 60);
        bromine.setName("Bromine");
        bromine.setFont(secundaryFont);
        bromine.setForeground(greyLightCool);
        bromine.setBackground(greyCool);
        bromine.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        bromine.addActionListener(this);
        f.add(bromine);

        JButton krypton = new JButton("Kr");
        krypton.setBounds(1030, 280, 60, 60);
        krypton.setName("Krypton");
        krypton.setFont(secundaryFont);
        krypton.setForeground(greyLightCool);
        krypton.setBackground(greyCool);
        krypton.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        krypton.addActionListener(this);
        f.add(krypton);

        JButton rubidium = new JButton("Rb");
        rubidium.setBounds(10, 340, 60, 60);
        rubidium.setName("Rubidium");
        rubidium.setFont(secundaryFont);
        rubidium.setForeground(greyLightCool);
        rubidium.setBackground(greyCool);
        rubidium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        rubidium.addActionListener(this);
        f.add(rubidium);

        JButton strontium = new JButton("Sr");
        strontium.setBounds(70, 340, 60, 60);
        strontium.setName("Strontium");
        strontium.setFont(secundaryFont);
        strontium.setForeground(greyLightCool);
        strontium.setBackground(greyCool);
        strontium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        strontium.addActionListener(this);
        f.add(strontium);

        JButton yttrium = new JButton("Y");
        yttrium.setBounds(130, 340, 60, 60);
        yttrium.setName("Yttrium");
        yttrium.setFont(secundaryFont);
        yttrium.setForeground(greyLightCool);
        yttrium.setBackground(greyCool);
        yttrium.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 1, greyLightCool));
        yttrium.addActionListener(this);
        f.add(yttrium);

        JButton zirconium = new JButton("Zr");
        zirconium.setBounds(190, 340, 60, 60);
        zirconium.setName("Zirconium");
        zirconium.setFont(secundaryFont);
        zirconium.setForeground(greyLightCool);
        zirconium.setBackground(greyCool);
        zirconium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        zirconium.addActionListener(this);
        f.add(zirconium);

        JButton niobium = new JButton("Nb");
        niobium.setBounds(250, 340, 60, 60);
        niobium.setName("Niobium");
        niobium.setFont(secundaryFont);
        niobium.setForeground(greyLightCool);
        niobium.setBackground(greyCool);
        niobium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        niobium.addActionListener(this);
        f.add(niobium);

        JButton molybdenum = new JButton("Mo");
        molybdenum.setBounds(310, 340, 60, 60);
        molybdenum.setName("Molybdenum");
        molybdenum.setFont(secundaryFont);
        molybdenum.setForeground(greyLightCool);
        molybdenum.setBackground(greyCool);
        molybdenum.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        molybdenum.addActionListener(this);
        f.add(molybdenum);

        JButton technetium = new JButton("Tc");
        technetium.setBounds(370, 340, 60, 60);
        technetium.setName("Technetium");
        technetium.setFont(secundaryFont);
        technetium.setForeground(greyLightCool);
        technetium.setBackground(greyCool);
        technetium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        technetium.addActionListener(this);
        f.add(technetium);

        JButton ruthenium = new JButton("Ru");
        ruthenium.setBounds(430, 340, 60, 60);
        ruthenium.setName("Ruthenium");
        ruthenium.setFont(secundaryFont);
        ruthenium.setForeground(greyLightCool);
        ruthenium.setBackground(greyCool);
        ruthenium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        ruthenium.addActionListener(this);
        f.add(ruthenium);

        JButton rhodium = new JButton("Rh");
        rhodium.setBounds(490, 340, 60, 60);
        rhodium.setName("Rhodium");
        rhodium.setFont(secundaryFont);
        rhodium.setForeground(greyLightCool);
        rhodium.setBackground(greyCool);
        rhodium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        rhodium.addActionListener(this);
        f.add(rhodium);

        JButton palladium = new JButton("Pd");
        palladium.setBounds(550, 340, 60, 60);
        palladium.setName("Palladium");
        palladium.setFont(secundaryFont);
        palladium.setForeground(greyLightCool);
        palladium.setBackground(greyCool);
        palladium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        palladium.addActionListener(this);
        f.add(palladium);

        JButton silver = new JButton("Ag");
        silver.setBounds(610, 340, 60, 60);
        silver.setName("Silver");
        silver.setFont(secundaryFont);
        silver.setForeground(greyLightCool);
        silver.setBackground(greyCool);
        silver.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        silver.addActionListener(this);
        f.add(silver);

        JButton cadmium = new JButton("Cd");
        cadmium.setBounds(670, 340, 60, 60);
        cadmium.setName("Cadmium");
        cadmium.setFont(secundaryFont);
        cadmium.setForeground(greyLightCool);
        cadmium.setBackground(greyCool);
        cadmium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 2, greyLightCool));
        cadmium.addActionListener(this);
        f.add(cadmium);

        JButton indium = new JButton("In");
        indium.setBounds(730, 340, 60, 60);
        indium.setName("Indium");
        indium.setFont(secundaryFont);
        indium.setForeground(greyLightCool);
        indium.setBackground(greyCool);
        indium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 1, greyLightCool));
        indium.addActionListener(this);
        f.add(indium);

        JButton tin = new JButton("Sn");
        tin.setBounds(790, 340, 60, 60);
        tin.setName("Tin");
        tin.setFont(secundaryFont);
        tin.setForeground(greyLightCool);
        tin.setBackground(greyCool);
        tin.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 2, greyLightCool));
        tin.addActionListener(this);
        f.add(tin);

        JButton antimony = new JButton("Sb");
        antimony.setBounds(850, 340, 60, 60);
        antimony.setName("Antimony");
        antimony.setFont(secundaryFont);
        antimony.setForeground(greyLightCool);
        antimony.setBackground(greyCool);
        antimony.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 1, greyLightCool));
        antimony.addActionListener(this);
        f.add(antimony);

        JButton tellurium = new JButton("Te");
        tellurium.setBounds(910, 340, 60, 60);
        tellurium.setName("Tellurium");
        tellurium.setFont(secundaryFont);
        tellurium.setForeground(greyLightCool);
        tellurium.setBackground(greyCool);
        tellurium.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 2, greyLightCool));
        tellurium.addActionListener(this);
        f.add(tellurium);

        JButton iodine = new JButton("I");
        iodine.setBounds(970, 340, 60, 60);
        iodine.setName("Iodine");
        iodine.setFont(secundaryFont);
        iodine.setForeground(greyLightCool);
        iodine.setBackground(greyCool);
        iodine.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        iodine.addActionListener(this);
        f.add(iodine);

        JButton xenon = new JButton("Xe");
        xenon.setBounds(1030, 340, 60, 60);
        xenon.setName("Xenon");
        xenon.setFont(secundaryFont);
        xenon.setForeground(greyLightCool);
        xenon.setBackground(greyCool);
        xenon.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        xenon.addActionListener(this);
        f.add(xenon);

        JButton caesium = new JButton("Cs");
        caesium.setBounds(10, 400, 60, 60);
        caesium.setName("Caesium");
        caesium.setFont(secundaryFont);
        caesium.setForeground(greyLightCool);
        caesium.setBackground(greyCool);
        caesium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        caesium.addActionListener(this);
        f.add(caesium);

        JButton barium = new JButton("Ba");
        barium.setBounds(70, 400, 60, 60);
        barium.setName("Barium");
        barium.setFont(secundaryFont);
        barium.setForeground(greyLightCool);
        barium.setBackground(greyCool);
        barium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        barium.addActionListener(this);
        f.add(barium);

        JButton lanGroup = new JButton("");
        lanGroup.setBounds(130, 400, 60, 60);
        lanGroup.setBackground(greyCool);
        lanGroup.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
        f.add(lanGroup);

        JButton lanthanum = new JButton("La");
        lanthanum.setBounds(130, 540, 60, 60);
        lanthanum.setName("Lanthanum");
        lanthanum.setFont(secundaryFont);
        lanthanum.setForeground(greyLightCool);
        lanthanum.setBackground(greyCool);
        lanthanum.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 1, greyLightCool));
        lanthanum.addActionListener(this);
        f.add(lanthanum);

        JButton cerium = new JButton("Ce");
        cerium.setBounds(190, 540, 60, 60);
        cerium.setName("Cerium");
        cerium.setFont(secundaryFont);
        cerium.setForeground(greyLightCool);
        cerium.setBackground(greyCool);
        cerium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        cerium.addActionListener(this);
        f.add(cerium);

        JButton praseodymium = new JButton("Pr");
        praseodymium.setBounds(250, 540, 60, 60);
        praseodymium.setName("Praseodymium");
        praseodymium.setFont(secundaryFont);
        praseodymium.setForeground(greyLightCool);
        praseodymium.setBackground(greyCool);
        praseodymium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        praseodymium.addActionListener(this);
        f.add(praseodymium);

        JButton neodymium = new JButton("Nd");
        neodymium.setBounds(310, 540, 60, 60);
        neodymium.setName("Neodymium");
        neodymium.setFont(secundaryFont);
        neodymium.setForeground(greyLightCool);
        neodymium.setBackground(greyCool);
        neodymium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        neodymium.addActionListener(this);
        f.add(neodymium);

        JButton promethium = new JButton("Pm");
        promethium.setBounds(370, 540, 60, 60);
        promethium.setName("Promethium");
        promethium.setFont(secundaryFont);
        promethium.setForeground(greyLightCool);
        promethium.setBackground(greyCool);
        promethium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        promethium.addActionListener(this);
        f.add(promethium);

        JButton samarium = new JButton("Sm");
        samarium.setBounds(430, 540, 60, 60);
        samarium.setName("Samarium");
        samarium.setFont(secundaryFont);
        samarium.setForeground(greyLightCool);
        samarium.setBackground(greyCool);
        samarium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        samarium.addActionListener(this);
        f.add(samarium);

        JButton europium = new JButton("Eu");
        europium.setBounds(490, 540, 60, 60);
        europium.setName("Europium");
        europium.setFont(secundaryFont);
        europium.setForeground(greyLightCool);
        europium.setBackground(greyCool);
        europium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        europium.addActionListener(this);
        f.add(europium);

        JButton gadolinium = new JButton("Gd");
        gadolinium.setBounds(550, 540, 60, 60);
        gadolinium.setName("Gadolinium");
        gadolinium.setFont(secundaryFont);
        gadolinium.setForeground(greyLightCool);
        gadolinium.setBackground(greyCool);
        gadolinium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        gadolinium.addActionListener(this);
        f.add(gadolinium);

        JButton terbium = new JButton("Tb");
        terbium.setBounds(610, 540, 60, 60);
        terbium.setName("Terbium");
        terbium.setFont(secundaryFont);
        terbium.setForeground(greyLightCool);
        terbium.setBackground(greyCool);
        terbium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        terbium.addActionListener(this);
        f.add(terbium);

        JButton dysprosium = new JButton("Dy");
        dysprosium.setBounds(670, 540, 60, 60);
        dysprosium.setName("Dysprosium");
        dysprosium.setFont(secundaryFont);
        dysprosium.setForeground(greyLightCool);
        dysprosium.setBackground(greyCool);
        dysprosium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        dysprosium.addActionListener(this);
        f.add(dysprosium);

        JButton holmium = new JButton("Ho");
        holmium.setBounds(730, 540, 60, 60);
        holmium.setName("Holmium");
        holmium.setFont(secundaryFont);
        holmium.setForeground(greyLightCool);
        holmium.setBackground(greyCool);
        holmium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        holmium.addActionListener(this);
        f.add(holmium);

        JButton erbium = new JButton("Er");
        erbium.setBounds(790, 540, 60, 60);
        erbium.setName("Erbium");
        erbium.setFont(secundaryFont);
        erbium.setForeground(greyLightCool);
        erbium.setBackground(greyCool);
        erbium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        erbium.addActionListener(this);
        f.add(erbium);

        JButton thulium = new JButton("Tm");
        thulium.setBounds(850, 540, 60, 60);
        thulium.setName("Thulium");
        thulium.setFont(secundaryFont);
        thulium.setForeground(greyLightCool);
        thulium.setBackground(greyCool);
        thulium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        thulium.addActionListener(this);
        f.add(thulium);

        JButton ytterbium = new JButton("Yb");
        ytterbium.setBounds(910, 540, 60, 60);
        ytterbium.setName("Ytterbium");
        ytterbium.setFont(secundaryFont);
        ytterbium.setForeground(greyLightCool);
        ytterbium.setBackground(greyCool);
        ytterbium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        ytterbium.addActionListener(this);
        f.add(ytterbium);

        JButton lutetium = new JButton("Lu");
        lutetium.setBounds(970, 540, 60, 60);
        lutetium.setName("Lutetium");
        lutetium.setFont(secundaryFont);
        lutetium.setForeground(greyLightCool);
        lutetium.setBackground(greyCool);
        lutetium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 2, greyLightCool));
        lutetium.addActionListener(this);
        f.add(lutetium);

        JButton hafnium = new JButton("Hf");
        hafnium.setBounds(190, 400, 60, 60);
        hafnium.setName("Hafnium");
        hafnium.setFont(secundaryFont);
        hafnium.setForeground(greyLightCool);
        hafnium.setBackground(greyCool);
        hafnium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 1, greyLightCool));
        hafnium.addActionListener(this);
        f.add(hafnium);

        JButton tantalum = new JButton("Ta");
        tantalum.setBounds(250, 400, 60, 60);
        tantalum.setName("Tantalum");
        tantalum.setFont(secundaryFont);
        tantalum.setForeground(greyLightCool);
        tantalum.setBackground(greyCool);
        tantalum.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        tantalum.addActionListener(this);
        f.add(tantalum);

        JButton wolfram = new JButton("W");
        wolfram.setBounds(310, 400, 60, 60);
        wolfram.setName("Wolfram");
        wolfram.setFont(secundaryFont);
        wolfram.setForeground(greyLightCool);
        wolfram.setBackground(greyCool);
        wolfram.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        wolfram.addActionListener(this);
        f.add(wolfram);

        JButton rhenium = new JButton("Re");
        rhenium.setBounds(370, 400, 60, 60);
        rhenium.setName("Rhenium");
        rhenium.setFont(secundaryFont);
        rhenium.setForeground(greyLightCool);
        rhenium.setBackground(greyCool);
        rhenium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        rhenium.addActionListener(this);
        f.add(rhenium);

        JButton osmium = new JButton("Os");
        osmium.setBounds(430, 400, 60, 60);
        osmium.setName("Osmium");
        osmium.setFont(secundaryFont);
        osmium.setForeground(greyLightCool);
        osmium.setBackground(greyCool);
        osmium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        osmium.addActionListener(this);
        f.add(osmium);

        JButton iridium = new JButton("Ir");
        iridium.setBounds(490, 400, 60, 60);
        iridium.setName("Iridium");
        iridium.setFont(secundaryFont);
        iridium.setForeground(greyLightCool);
        iridium.setBackground(greyCool);
        iridium.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        iridium.addActionListener(this);
        f.add(iridium);

        JButton platinum = new JButton("Pt");
        platinum.setBounds(550, 400, 60, 60);
        platinum.setName("Platinum");
        platinum.setFont(secundaryFont);
        platinum.setForeground(greyLightCool);
        platinum.setBackground(greyCool);
        platinum.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        platinum.addActionListener(this);
        f.add(platinum);

        JButton gold = new JButton("Au");
        gold.setBounds(610, 400, 60, 60);
        gold.setName("Gold");
        gold.setFont(secundaryFont);
        gold.setForeground(greyLightCool);
        gold.setBackground(greyCool);
        gold.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        gold.addActionListener(this);
        f.add(gold);

        JButton mercury = new JButton("Hg");
        mercury.setBounds(670, 400, 60, 60);
        mercury.setName("Mercury");
        mercury.setFont(secundaryFont);
        mercury.setForeground(greyLightCool);
        mercury.setBackground(greyCool);
        mercury.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 2, greyLightCool));
        mercury.addActionListener(this);
        f.add(mercury);

        JButton thallium = new JButton("Tl");
        thallium.setBounds(730, 400, 60, 60);
        thallium.setName("Thallium");
        thallium.setFont(secundaryFont);
        thallium.setForeground(greyLightCool);
        thallium.setBackground(greyCool);
        thallium.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 1, greyLightCool));
        thallium.addActionListener(this);
        f.add(thallium);

        JButton lead = new JButton("Pb");
        lead.setBounds(790, 400, 60, 60);
        lead.setName("Lead");
        lead.setFont(secundaryFont);
        lead.setForeground(greyLightCool);
        lead.setBackground(greyCool);
        lead.setBorder(BorderFactory.createMatteBorder(1, 1, 1, 1, greyLightCool));
        lead.addActionListener(this);
        f.add(lead);

        JButton bismuth = new JButton("Bi");
        bismuth.setBounds(850, 400, 60, 60);
        bismuth.setName("Bismuth");
        bismuth.setFont(secundaryFont);
        bismuth.setForeground(greyLightCool);
        bismuth.setBackground(greyCool);
        bismuth.setBorder(BorderFactory.createMatteBorder(2, 1, 1, 2, greyLightCool));
        bismuth.addActionListener(this);
        f.add(bismuth);

        JButton polonium = new JButton("Po");
        polonium.setBounds(910, 400, 60, 60);
        polonium.setName("Polonium");
        polonium.setFont(secundaryFont);
        polonium.setForeground(greyLightCool);
        polonium.setBackground(greyCool);
        polonium.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 2, greyLightCool));
        polonium.addActionListener(this);
        f.add(polonium);

        JButton astatine = new JButton("At");
        astatine.setBounds(970, 400, 60, 60);
        astatine.setName("Astatine");
        astatine.setFont(secundaryFont);
        astatine.setForeground(greyLightCool);
        astatine.setBackground(greyCool);
        astatine.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        astatine.addActionListener(this);
        f.add(astatine);

        JButton radon = new JButton("Rn");
        radon.setBounds(1030, 400, 60, 60);
        radon.setName("Radon");
        radon.setFont(secundaryFont);
        radon.setForeground(greyLightCool);
        radon.setBackground(greyCool);
        radon.setBorder(BorderFactory.createMatteBorder(1, 2, 1, 2, greyLightCool));
        radon.addActionListener(this);
        f.add(radon);

        JButton francium = new JButton("Fr");
        francium.setBounds(10, 460, 60, 60);
        francium.setName("Francium");
        francium.setFont(secundaryFont);
        francium.setForeground(greyLightCool);
        francium.setBackground(greyCool);
        francium.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 2, greyLightCool));
        francium.addActionListener(this);
        f.add(francium);

        JButton radium = new JButton("Ra");
        radium.setBounds(70, 460, 60, 60);
        radium.setName("Radium");
        radium.setFont(secundaryFont);
        radium.setForeground(greyLightCool);
        radium.setBackground(greyCool);
        radium.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 2, greyLightCool));
        radium.addActionListener(this);
        f.add(radium);

        JButton actGroup = new JButton("");
        actGroup.setBounds(130, 460, 60, 60);
        actGroup.setBackground(greyCool);
        actGroup.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
        f.add(actGroup);

        JButton actinium = new JButton("Ac");
        actinium.setBounds(130, 600, 60, 60);
        actinium.setName("Actinium");
        actinium.setFont(secundaryFont);
        actinium.setForeground(greyLightCool);
        actinium.setBackground(greyCool);
        actinium.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 1, greyLightCool));
        actinium.addActionListener(this);
        f.add(actinium);

        JButton thorium = new JButton("Th");
        thorium.setBounds(190, 600, 60, 60);
        thorium.setName("Thorium");
        thorium.setFont(secundaryFont);
        thorium.setForeground(greyLightCool);
        thorium.setBackground(greyCool);
        thorium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        thorium.addActionListener(this);
        f.add(thorium);

        JButton protactinium = new JButton("Pa");
        protactinium.setBounds(250, 600, 60, 60);
        protactinium.setName("Protactinium");
        protactinium.setFont(secundaryFont);
        protactinium.setForeground(greyLightCool);
        protactinium.setBackground(greyCool);
        protactinium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        protactinium.addActionListener(this);
        f.add(protactinium);

        JButton uranium = new JButton("U");
        uranium.setBounds(310, 600, 60, 60);
        uranium.setName("Uranium");
        uranium.setFont(secundaryFont);
        uranium.setForeground(greyLightCool);
        uranium.setBackground(greyCool);
        uranium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        uranium.addActionListener(this);
        f.add(uranium);

        JButton neptunium = new JButton("Np");
        neptunium.setBounds(370, 600, 60, 60);
        neptunium.setName("Neptunium");
        neptunium.setFont(secundaryFont);
        neptunium.setForeground(greyLightCool);
        neptunium.setBackground(greyCool);
        neptunium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        neptunium.addActionListener(this);
        f.add(neptunium);

        JButton plutonium = new JButton("Pu");
        plutonium.setBounds(430, 600, 60, 60);
        plutonium.setName("Plutonium");
        plutonium.setFont(secundaryFont);
        plutonium.setForeground(greyLightCool);
        plutonium.setBackground(greyCool);
        plutonium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        plutonium.addActionListener(this);
        f.add(plutonium);

        JButton americium = new JButton("Am");
        americium.setBounds(490, 600, 60, 60);
        americium.setName("Americium");
        americium.setFont(secundaryFont);
        americium.setForeground(greyLightCool);
        americium.setBackground(greyCool);
        americium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        americium.addActionListener(this);
        f.add(americium);

        JButton curium = new JButton("Cm");
        curium.setBounds(550, 600, 60, 60);
        curium.setName("Curium");
        curium.setFont(secundaryFont);
        curium.setForeground(greyLightCool);
        curium.setBackground(greyCool);
        curium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        curium.addActionListener(this);
        f.add(curium);

        JButton berkelium = new JButton("Bk");
        berkelium.setBounds(610, 600, 60, 60);
        berkelium.setName("Berkelium");
        berkelium.setFont(secundaryFont);
        berkelium.setForeground(greyLightCool);
        berkelium.setBackground(greyCool);
        berkelium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        berkelium.addActionListener(this);
        f.add(berkelium);

        JButton californium = new JButton("Cf");
        californium.setBounds(670, 600, 60, 60);
        californium.setName("Californium");
        californium.setFont(secundaryFont);
        californium.setForeground(greyLightCool);
        californium.setBackground(greyCool);
        californium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        californium.addActionListener(this);
        f.add(californium);

        JButton einsteinium = new JButton("Es");
        einsteinium.setBounds(730, 600, 60, 60);
        einsteinium.setName("Einsteinium");
        einsteinium.setFont(secundaryFont);
        einsteinium.setForeground(greyLightCool);
        einsteinium.setBackground(greyCool);
        einsteinium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        einsteinium.addActionListener(this);
        f.add(einsteinium);

        JButton fermium = new JButton("Fm");
        fermium.setBounds(790, 600, 60, 60);
        fermium.setName("Fermium");
        fermium.setFont(secundaryFont);
        fermium.setForeground(greyLightCool);
        fermium.setBackground(greyCool);
        fermium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        fermium.addActionListener(this);
        f.add(fermium);

        JButton mendelevium = new JButton("Md");
        mendelevium.setBounds(850, 600, 60, 60);
        mendelevium.setName("Mendelevium");
        mendelevium.setFont(secundaryFont);
        mendelevium.setForeground(greyLightCool);
        mendelevium.setBackground(greyCool);
        mendelevium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        mendelevium.addActionListener(this);
        f.add(mendelevium);

        JButton nobelium = new JButton("No");
        nobelium.setBounds(910, 600, 60, 60);
        nobelium.setName("Nobelium");
        nobelium.setFont(secundaryFont);
        nobelium.setForeground(greyLightCool);
        nobelium.setBackground(greyCool);
        nobelium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 1, greyLightCool));
        nobelium.addActionListener(this);
        f.add(nobelium);

        JButton lawrencium = new JButton("Lr");
        lawrencium.setBounds(970, 600, 60, 60);
        lawrencium.setName("Lawrencium");
        lawrencium.setFont(secundaryFont);
        lawrencium.setForeground(greyLightCool);
        lawrencium.setBackground(greyCool);
        lawrencium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 2, greyLightCool));
        lawrencium.addActionListener(this);
        f.add(lawrencium);

        JButton rutherfordium = new JButton("Rf");
        rutherfordium.setBounds(190, 460, 60, 60);
        rutherfordium.setName("Rutherfordium");
        rutherfordium.setFont(secundaryFont);
        rutherfordium.setForeground(greyLightCool);
        rutherfordium.setBackground(greyCool);
        rutherfordium.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 1, greyLightCool));
        rutherfordium.addActionListener(this);
        f.add(rutherfordium);

        JButton dubnium = new JButton("Db");
        dubnium.setBounds(250, 460, 60, 60);
        dubnium.setName("Dubnium");
        dubnium.setFont(secundaryFont);
        dubnium.setForeground(greyLightCool);
        dubnium.setBackground(greyCool);
        dubnium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        dubnium.addActionListener(this);
        f.add(dubnium);

        JButton seaborgium = new JButton("Sg");
        seaborgium.setBounds(310, 460, 60, 60);
        seaborgium.setName("Seaborgium");
        seaborgium.setFont(secundaryFont);
        seaborgium.setForeground(greyLightCool);
        seaborgium.setBackground(greyCool);
        seaborgium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        seaborgium.addActionListener(this);
        f.add(seaborgium);

        JButton bohrium = new JButton("Bh");
        bohrium.setBounds(370, 460, 60, 60);
        bohrium.setName("Bohrium");
        bohrium.setFont(secundaryFont);
        bohrium.setForeground(greyLightCool);
        bohrium.setBackground(greyCool);
        bohrium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        bohrium.addActionListener(this);
        f.add(bohrium);

        JButton hassium = new JButton("Hs");
        hassium.setBounds(430, 460, 60, 60);
        hassium.setName("Hassium");
        hassium.setFont(secundaryFont);
        hassium.setForeground(greyLightCool);
        hassium.setBackground(greyCool);
        hassium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        hassium.addActionListener(this);
        f.add(hassium);

        JButton meitnerium = new JButton("Mt");
        meitnerium.setBounds(490, 460, 60, 60);
        meitnerium.setName("Meitnerium");
        meitnerium.setFont(secundaryFont);
        meitnerium.setForeground(greyLightCool);
        meitnerium.setBackground(greyCool);
        meitnerium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        meitnerium.addActionListener(this);
        f.add(meitnerium);

        JButton darmstadtium = new JButton("Ds");
        darmstadtium.setBounds(550, 460, 60, 60);
        darmstadtium.setName("Darmstadtium");
        darmstadtium.setFont(secundaryFont);
        darmstadtium.setForeground(greyLightCool);
        darmstadtium.setBackground(greyCool);
        darmstadtium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        darmstadtium.addActionListener(this);
        f.add(darmstadtium);

        JButton roentgenium = new JButton("Rg");
        roentgenium.setBounds(610, 460, 60, 60);
        roentgenium.setName("Roentgenium");
        roentgenium.setFont(secundaryFont);
        roentgenium.setForeground(greyLightCool);
        roentgenium.setBackground(greyCool);
        roentgenium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        roentgenium.addActionListener(this);
        f.add(roentgenium);

        JButton copernicium = new JButton("Cn");
        copernicium.setBounds(670, 460, 60, 60);
        copernicium.setName("Copernicium");
        copernicium.setFont(secundaryFont);
        copernicium.setForeground(greyLightCool);
        copernicium.setBackground(greyCool);
        copernicium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 2, greyLightCool));
        copernicium.addActionListener(this);
        f.add(copernicium);

        JButton nihonium = new JButton("Uut");
        nihonium.setBounds(730, 460, 60, 60);
        nihonium.setName("Nihonium");
        nihonium.setFont(secundaryFont);
        nihonium.setForeground(greyLightCool);
        nihonium.setBackground(greyCool);
        nihonium.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 1, greyLightCool));
        nihonium.addActionListener(this);
        f.add(nihonium);

        JButton flerovium = new JButton("Fl");
        flerovium.setBounds(790, 460, 60, 60);
        flerovium.setName("Flerovium");
        flerovium.setFont(secundaryFont);
        flerovium.setForeground(greyLightCool);
        flerovium.setBackground(greyCool);
        flerovium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        flerovium.addActionListener(this);
        f.add(flerovium);

        JButton moscovium = new JButton("Uup");
        moscovium.setBounds(850, 460, 60, 60);
        moscovium.setName("Moscovium");
        moscovium.setFont(secundaryFont);
        moscovium.setForeground(greyLightCool);
        moscovium.setBackground(greyCool);
        moscovium.setBorder(BorderFactory.createMatteBorder(1, 1, 2, 1, greyLightCool));
        moscovium.addActionListener(this);
        f.add(moscovium);

        JButton livermorium = new JButton("Lv");
        livermorium.setBounds(910, 460, 60, 60);
        livermorium.setName("Livermorium");
        livermorium.setFont(secundaryFont);
        livermorium.setForeground(greyLightCool);
        livermorium.setBackground(greyCool);
        livermorium.setBorder(BorderFactory.createMatteBorder(2, 1, 2, 2, greyLightCool));
        livermorium.addActionListener(this);
        f.add(livermorium);

        JButton tennessine = new JButton("Uus");
        tennessine.setBounds(970, 460, 60, 60);
        tennessine.setName("Tennessine");
        tennessine.setFont(secundaryFont);
        tennessine.setForeground(greyLightCool);
        tennessine.setBackground(greyCool);
        tennessine.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 2, greyLightCool));
        tennessine.addActionListener(this);
        f.add(tennessine);

        JButton oganesson = new JButton("Uuo");
        oganesson.setBounds(1030, 460, 60, 60);
        oganesson.setName("Oganesson");
        oganesson.setFont(secundaryFont);
        oganesson.setForeground(greyLightCool);
        oganesson.setBackground(greyCool);
        oganesson.setBorder(BorderFactory.createMatteBorder(1, 2, 2, 2, greyLightCool));
        oganesson.addActionListener(this);
        f.add(oganesson);
    }

    @Override
    public void actionPerformed(ActionEvent evt) {
        try{
            if(showInfoElement.isSelected()){
                if(evt.getSource() == Mix){
                    JOptionPane.showMessageDialog(null, "Select check box to mix elements.");
                }
                else{
                    JButton element = (JButton)evt.getSource();
                    String nameElement = element.getName();
                    List<TableElement> list = TableElementList.getInstance();
                    int position = Collections.binarySearch(list, new TableElement(nameElement), (element1, element2) -> element1.getName().compareToIgnoreCase(element2.getName()));
                    TableElementList.setPosition(position);
                    new ElementWindow();
                }
            }
            else{
                if(evt.getSource() == Mix){
                    if(!FirstElement.getText().isEmpty() || !SecondElement.getText().isEmpty()){
                        List<TableElement> list = TableElementList.getInstance();
                        System.out.println(FirstElement.getText());
                        System.out.println(SecondElement.getText());
                        TableElement FirsElementObject, SecondElementObject;
                        DecimalFormat decimalFormat = new DecimalFormat("#.000");
                        FirsElementObject = list.get(Collections.binarySearch(list, new TableElement(FirstElement.getText()), (element1, element2) -> element1.getName().compareToIgnoreCase(element2.getName())));
                        SecondElementObject = list.get(Collections.binarySearch(list, new TableElement(SecondElement.getText()), (element1, element2) -> element1.getName().compareToIgnoreCase(element2.getName())));
                        if(FirsElementObject.getClassification().equalsIgnoreCase("Noble Gas") || FirsElementObject.getAtomic_number() > 103 || SecondElementObject.getClassification().equalsIgnoreCase("Noble Gas") || SecondElementObject.getAtomic_number() > 103){
                            JOptionPane.showMessageDialog(null, "One or more of the elements will not be able to mix.");
                        }
                        else{
                            double electronegativity = FirsElementObject.getElectronegativity() - SecondElementObject.getElectronegativity();
                            if(electronegativity < 0){
                                electronegativity *= -1;
                            }
                            result.setText("Element " + FirstElement.getText() + " and " + SecondElement.getText() + " have a difference of " + decimalFormat.format(electronegativity));
                        }
                        FirstElement.setText("");
                        SecondElement.setText("");
                    }
                    else{
                        JOptionPane.showMessageDialog(null, "Select at least two elements.");
                    }
                }
                else{
                    JButton aux = (JButton)evt.getSource();
                    String name = aux.getName();
                    if(FirstElement.getText().isEmpty()){
                        FirstElement.setText(name);
                        FirstElement.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
                    }
                    else if(SecondElement.getText().isEmpty()){
                        SecondElement.setText(name);
                        SecondElement.setBorder(BorderFactory.createMatteBorder(2, 2, 2, 2, greyLightCool));
                    }
                }
            }
        }catch (Exception e){
            System.out.println("Window Error in ActionPerformed: " + e.getMessage());
            e.printStackTrace();
        }
    }
}

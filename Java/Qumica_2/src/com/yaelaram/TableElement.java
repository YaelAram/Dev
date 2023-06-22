package com.yaelaram;

public class TableElement{
    private final String name;
    private final String symbol;
    private final String classification;
    private final int group;
    private final int period;
    private final double atomic_weight;
    private final double melting_point;
    private final double boiling_point;
    private final double electronegativity;
    private final String electronic_configuration;
    private final String valences;
    private final int atomic_number;

    public TableElement(String name){
        this(name, "Null", "Null", 0, 0, 0, 0, 0, 0, "Null", "Null", 0);
    }

    public TableElement(String name, String symbol, String classification, int group, int period, double atomic_weight, double melting_point, double boiling_point, double electronegativity, String electronic_configuration, String valences, int atomic_number) {
        this.name = name;
        this.symbol = symbol;
        this.classification = classification;
        this.group = group;
        this.period = period;
        this.atomic_weight = atomic_weight;
        this.melting_point = melting_point;
        this.boiling_point = boiling_point;
        this.electronegativity = electronegativity;
        this.electronic_configuration = electronic_configuration;
        this.valences = valences;
        this.atomic_number = atomic_number;
    }

    public String getName() {
        return name;
    }

    public String getSymbol() {
        return symbol;
    }

    public String getClassification() {
        return classification;
    }

    public int getGroup() {
        return group;
    }

    public int getPeriod() {
        return period;
    }

    public double getAtomic_weight() {
        return atomic_weight;
    }

    public double getMelting_point() {
        return melting_point;
    }

    public double getBoiling_point() {
        return boiling_point;
    }

    public double getElectronegativity() {
        return electronegativity;
    }

    public String getElectronic_configuration() {
        return electronic_configuration;
    }

    public String getValences() {
        return valences;
    }

    public int getAtomic_number(){
        return atomic_number;
    }
}

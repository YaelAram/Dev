package com.yaelaram;

import java.util.*;

public class TableElementList {
    private static final List<TableElement> elementList = new ArrayList<>();
    private static int position;

    private TableElementList(){
    }

    private static void initializeList(){
        elementList.add(new TableElement("Actinium", "Ac", "Actinides", 0, 7, 227, 1323, 3471, 1.1, "[Rn] 6d\u00B9 7s \u00B2", "3", 89));
        elementList.add(new TableElement("Aluminium", "Al", "Block Metal P", 13, 3, 26.981, 933.47, 2791, 1.61, "[Ne] 3s\u00B2 3p\u00B9", "3", 13));
        elementList.add(new TableElement("Americium", "Am", "Actinides", 0, 7, 243, 1449, 2880, 1.3, "[Rn] 5f\u2077 7s\u00B2", "3", 95));
        elementList.add(new TableElement("Antimony", "Sb", "Metalloid", 15, 5, 121.6, 903.78, 1860, 2.05, "[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u00B3", "-3, 3, 5", 51));
        elementList.add(new TableElement("Argon", "Ar", "Noble Gas", 18, 3, 39.948, 83.8, 87.3, 0.0, "[Ne] 3s\u00B2 3p\u2076", "0", 28));
        elementList.add(new TableElement("Arsenic", "As", "Metalloid", 15, 4, 74.921, 887, 1090, 2.0, "[Ar] 4s\u00B2 3d\u00B9\u2070 4p\u00B3", "-3, 3, 5", 33));
        elementList.add(new TableElement("Astatine", "At", "Halogen", 17, 6, 210, 575, 609.95, 2.2, "[Xe] 4f\u00B9\u2077 5d\u00B9\u2070 6s\u00B2 6p\u2075", "-1, 1", 85));
        elementList.add(new TableElement("Barium", "Ba", "Alkaline Earth Metal", 2, 6, 137.327, 1000, 2118, 0.89, "[Xe] 6s\u00B2", "2", 56));
        elementList.add(new TableElement("Berkelium", "Bk", "Lantanoid", 0, 7, 247, 1260, 2900, 1.3, "[Rn] 5f\u2079 7s\u00B2", "3", 97));
        elementList.add(new TableElement("Beryllium", "Be", "Alkaline Earth Metal", 2, 2, 9.012, 1560, 2742, 1.57, "[He] 2s\u00B2", "2", 4));
        elementList.add(new TableElement("Bismuth", "Bi", "Block Metal P", 15, 6, 208.980, 544.4, 1837, 2.02, "[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u00B3", "3, 5", 83));
        elementList.add(new TableElement("Bohrium", "Bh", "Transition Metal", 7, 7, 264, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u2075 7s\u00B2", "", 107));
        elementList.add(new TableElement("Boron", "B", "Metalloid", 13, 2, 10.811, 2349, 4200, 2.04, "[He] 2s\u00B2 2p\u00B9", "3, -3", 5));
        elementList.add(new TableElement("Bromine", "Br", "Halogen", 17, 4, 79.904, 265.8, 332, 2.96, "[Ar] 4s\u00B2 3d\u00B9\u2070 4p\u2075", "1, -1, 3, 5, 7", 35));
        elementList.add(new TableElement("Cadmium", "Cd", "Transition Metal", 12, 5, 112.411, 594.22, 1041, 1.69, "[Kr] 4d\u00B9\u2070 5s\u00B2", "1, 2", 48));
        elementList.add(new TableElement("Calcium", "Ca", "Alkaline Earth Metal", 2, 4, 40.078, 1115, 1757, 1.0, "[Ar] 4s\u00B2", "2", 20));
        elementList.add(new TableElement("Californium", "Cf", "Actinides", 0, 7, 251, 1173, 1743, 1.3, "[Rn] 5f\u00B9\u2070 7s\u00B2", "2, 3, 4", 98));
        elementList.add(new TableElement("Carbon", "C", "No Metals", 14, 2, 12.010, 3800, 5100, 2.55, "[He] 2s\u00B2 2p\u00B2", "2, 4", 6));
        elementList.add(new TableElement("Cerium", "Ce", "Lantanoid", 0, 6, 140.116, 1071, 3699, 1.12, "[Xe] 4f\u2070 5d\u00B9 6s\u00B2", "3, 4", 58));
        elementList.add(new TableElement("Cesium", "Cs", "Alkali Metal", 1, 6, 132.905, 301.59, 944, 0.79, "[Xe] 6s\u2070", "1", 55));
        elementList.add(new TableElement("Chlorine", "Cl", "Halogen", 17, 3, 35.453, 171.16, 239.16, 3.16, "[Ne] 3s\u00B2 3p\u2075", "1, -1, 3, 5, 7", 17));
        elementList.add(new TableElement("Chromium", "Cr", "Transition Metal", 6, 4, 51.996, 2130, 2945, 1.66, "[Ar] 3d\u2075 5s\u00B9", "2, 3, 6", 24));
        elementList.add(new TableElement("Cobalt", "Co", "Transition Metal", 9, 4, 58.933, 1768, 3200, 1.88, "[Ar] 3d\u2077 4s\u00B2", "1, -1, 2, 3, 4, 5", 27));
        elementList.add(new TableElement("Copernicium", "Cn", "Transition Metal", 12, 7, 285, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2", "2, 4", 112));
        elementList.add(new TableElement("Copper", "Cu", "Transition Metal", 11, 4, 63.546, 1357.77, 2835, 1.9, "[Ar] 3d\u00B9\u2070 4s\u00B9", "1, 2, 3, 4", 29));
        elementList.add(new TableElement("Curium", "Cm", "Actinides", 0, 7, 247, 1613, 3383, 1.3, "[Rn] 5f\u2077 6d\u00B9 7s\u00B2", "3", 96));
        elementList.add(new TableElement("Darmstadtium", "Ds", "Transition Metal", 10, 7, 281, 0, 0, 0, "[Rn] 7s\u00B2 5f\u00B9\u2074 6d\u2078", "6", 110));
        elementList.add(new TableElement("Dubnium", "Db", "Transition Metal", 5, 7, 262, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u00B3 7s\u00B2", "3, 4, 5", 105));
        elementList.add(new TableElement("Dysprosium", "Dy", "Lantanoid", 0, 6, 162.5, 1680, 2840, 1.22, "[Xe] 6s\u00B2 4f\u00B9\u2070", "3", 66));
        elementList.add(new TableElement("Einsteinium", "Es", "Actinides", 0, 7, 252, 1133, 1269.15, 1.3, "[Rn] 5f\u00B9\u00B9 7s\u00B2", "2, 3, 4", 99));
        elementList.add(new TableElement("Erbium", "Er", "Lantanoid", 0, 6, 167, 259, 1795,  1.24, "[Xe] 6s\u00B2 4f\u00B9\u00B2", "3", 68));
        elementList.add(new TableElement("Europium", "Eu", "Lantanoid", 0, 6, 151.94, 1099, 1800, 1.2, "[Xe] 6s\u00B2 4f\u2077", "2, 3", 63));
        elementList.add(new TableElement("Fermium", "Fm", "Actinides", 0, 7, 257, 0, 0, 1.3, "[Rn] 5f\u00B9\u2072 7s\u00B2", "3", 100));
        elementList.add(new TableElement("Flerovium", "Fl", "Block Metal P", 14, 7, 287, 340, 420, 0, "[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u00B2", "2, 4", 114));
        elementList.add(new TableElement("Fluorine", "F", "Halogen", 17, 2, 18.998, 53.53, 85.03, 3.98, "[He] 2s\u00B2 2p\u2075", "-1", 9));
        elementList.add(new TableElement("Francium", "Fr", "Alkali Metal", 4, 7, 223, 300, 950, 0.7, "[Rn] 7s\u00B9", "1", 87));
        elementList.add(new TableElement("Gadolinium", "Gd", "Lantanoid", 0, 6, 157.25, 1585, 3523, 1.2, "[Xe] 4f\u2077 5d\u00B9 6s\u00B2", "3", 64));
        elementList.add(new TableElement("Gallium", "Ga", "Block Metal P", 13, 4, 69.723, 302.914, 2477, 1.81, "[Ar] 4s\u00B2 3d\u00B9\u2070 4p\u00B9", "3", 31));
        elementList.add(new TableElement("Germanium", "Ge", "Metalloid", 14, 4, 72.64, 1211.4, 3093, 2.01, "[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u00B2", "2, 4", 32));
        elementList.add(new TableElement("Gold", "Au", "Transition Metal", 11, 6, 196.966, 1337.33, 3129, 2.54, "[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B9", "1, 3", 79));
        elementList.add(new TableElement("Hafnium", "Hf", "Transition Metal", 4, 6, 178.49, 2506, 4876, 1.3, "[Xe54] 6s\u00B2 4f\u00B9\u2074 5d\u00B2", "2, 3, 4", 72));
        elementList.add(new TableElement("Hassium", "Hs", "Transition Metal", 8, 7, 269, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u2076 7s\u00B2", "8", 108));
        elementList.add(new TableElement("Helium", "He", "Noble Gas", 18, 1, 4.002, 0.95, 4.22, 0, "1s\u00B2", "0", 2));
        elementList.add(new TableElement("Holmium", "Ho", "Lantanoid", 0, 6, 164.93, 1734, 2873, 1.23, "[Xe] 6s\u00B2 4f\u00B9\u00B9", "1, 2, 3", 67));
        elementList.add(new TableElement("Hydrogen", "H", "No Metal", 1, 1, 1.007, 14.025, 20.268, 2.2, "1s\u00B9", "1, -1", 1));
        elementList.add(new TableElement("Indium", "In", "Block Metal P", 13, 5, 114.818, 429.75, 2345, 1.78, "[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u00B9", "3", 49));
        elementList.add(new TableElement("Iodine", "I", "Halogen", 7, 5, 126.904, 386.85, 457.4, 2.66, "[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u2075", "1, -1, 3, 5, 7", 53));
        elementList.add(new TableElement("Iridium", "Ir", "Transition Metal", 9, 6, 192.217, 2739, 4701, 2.2, "[Xe] 4f\u00B9\u2074 5d\u2077 6s\u00B2", "2, 3, 4, 5, 6,", 77));
        elementList.add(new TableElement("Iron", "Fe", "Transition Metal", 8, 4, 55.847, 1808, 3023, 1.83, "[Ar] 3d\u2076 4s\u00B2", "2, 3", 26));
        elementList.add(new TableElement("Krypton", "Kr", "Noble Gas", 18, 4, 83.8, 115.79, 199.93, 3, "[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u2076", "0", 36));
        elementList.add(new TableElement("Lanthanum", "La", "Lantanoid", 0, 6, 138.905, 1193, 3730, 1.1, "[Xe] 5d\u00B9 6s\u00B2", "3", 57));
        elementList.add(new TableElement("Lawrencium", "Lr", "Actinides", 3, 7, 262, 0, 0, 1.3, "[Rn] 5f\u00B9\u2074 7s\u00B2 7p\u00B9", "3", 103));
        elementList.add(new TableElement("Lead", "Pb", "Block Metal P", 14, 6, 207.2, 600.61, 2022, 2.33, "[Xe] 6s\u00B2 4f\u00B9\u2074 5d\u00B9\u2070 6p\u00B2", "2, 4", 82));
        elementList.add(new TableElement("Lithium", "Li", "Alkali Metal", 1, 2, 6.941, 453.69, 1615, 0.98, "[He] 2s\u00B9", "1", 3));
        elementList.add(new TableElement("Livermorium", "Lv", "Block Metal P", 16, 7, 291, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u2074", "2, 4", 116));
        elementList.add(new TableElement("Lutetium", "Lu", "Lantanoid", 3, 6, 174.967, 1925, 3675, 1.27, "[Xe] 4f\u00B9\u2074 5d\u00B9 6s\u00B2", "3", 71));
        elementList.add(new TableElement("Magnesium", "Mg", "Alkaline Earth Metal", 2, 3, 24.312, 923, 1363, 1.31, "[Ne] 3s\u00B2", "2", 12));
        elementList.add(new TableElement("Manganese", "Mn", "Transition Metal", 7, 4, 54.938, 1519, 2334, 1.55, "[Ar] 3d\u2075 4s\u00B2", "2, 3, 4, 6, 7", 25));
        elementList.add(new TableElement("Meitnerium", "Mt", "Transition Metal", 9, 7, 268, 0, 0, 0, "[Rn] 7s\u00B2 5f\u00B9\u2074 6d\u2077", "3, 4, 6", 109));
        elementList.add(new TableElement("Mendelevium", "Md", "Actinides", 0, 7, 259.1, 1100, 0, 1.3, "[Rn] 5f\u00B9\u00B3 7s\u00B2", "2, 3", 101));
        elementList.add(new TableElement("Mercury", "Hg", "Transition Metal", 12, 6, 200.59, 234.32, 629.88, 2.0, "[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2", "1, 2, 4", 80));
        elementList.add(new TableElement("Molybdenum", "Mo", "Transition Metal", 6, 5, 95.94, 2896, 4912, 2.16, "[Kr] 4d\u2075 5s\u00B9", "2, 3, 4, 5, 6", 42));
        elementList.add(new TableElement("Moscovium", "Mc", "Block Metal P", 15, 7, 288, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u00B3", "1, 3", 115));
        elementList.add(new TableElement("Neodymium", "Nd", "Lantanoid", 0, 6, 144.24, 1297, 3373, 1.14, "[Xe] 4f\u2074 6s\u00B2", "3", 60));
        elementList.add(new TableElement("Neon", "Ne", "Noble Gas", 18, 2, 20.179, 24.56, 27.104, 0, "[He] 2s\u00B2 2p\u2076", "0", 10));
        elementList.add(new TableElement("Neptunium", "Np", "Actinides", 0, 7, 237, 910, 4273, 1.36, "[Rn] 5f\u2074 6d\u00B9 7s\u00B2", "3, 4, 5, 6", 93));
        elementList.add(new TableElement("Nickel", "Ni", "Transition Metal", 10, 4, 58.693, 1728, 2730, 1.91, "[Ar] 4s\u00B2 3d\u2078", "2, 3", 28));
        elementList.add(new TableElement("Nihonium", "Nh", "Block Metal P", 13, 7, 286, 700, 1400, 0, "[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7p\u00B9", "1, 3, 5", 113));
        elementList.add(new TableElement("Niobium", "Nb", "Transition Metal", 5, 5, 92.906, 2750, 5017, 1.6, "[Kr] 4d\u2074 5s\u00B9", "2, 3, 4, 5", 41));
        elementList.add(new TableElement("Nitrogen", "N", "No Metal", 15, 2, 14.007, 63.14, 77.35, 3.04, "[He] 2s\u00B2 2p\u00B3", "1, 2, 3, -3, 4, 5", 7));
        elementList.add(new TableElement("Nobelium", "No", "Actinides", 0, 7, 259, 0, 0, 1.3, "[Rn] 5f\u00B9\u2074 7s\u00B2", "2, 3", 102));
        elementList.add(new TableElement("Oganesson", "Og", "Noble Gas", 18, 7, 294, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u2079 7s\u00B2 7p\u2076​", "0", 118));
        elementList.add(new TableElement("Osmium", "Os", "Transition Metal", 8, 6, 190.23, 3306, 5285, 2.2, "[Xe] 4f\u00B9\u2074 5d\u2076 6s\u00B2", "1, -1, 2, -2, 3, 4, 5, 6, 7", 76));
        elementList.add(new TableElement("Oxygen", "O", "No Metal", 16, 2, 15.999, 50.35, 90.18, 3.44, "[He] 2s\u00B2 2p\u2074", "-1, -2", 8));
        elementList.add(new TableElement("Palladium", "Pd", "Transition Metal", 10, 5, 106.42, 1828.05, 3236, 2.2, "[Kr] 4d\u00B9\u2070", "1, 2, 4, 6", 46));
        elementList.add(new TableElement("Phosphorus", "P", "No Metal", 15, 3, 30.973, 317.3, 550, 2.19, "[Ne] 3s\u00B2 3p\u00B3", "3, -3, 4, 5", 15));
        elementList.add(new TableElement("Platinum", "Pt", "Transition Metal", 10, 6, 195.084, 1769, 4098, 2.28, "[Xe] 4f\u00B9\u2074 5d\u2079 6s\u00B9", "1, -1, 2, -2, 3, 4, 5, 6", 78));
        elementList.add(new TableElement("Plutonium", "Pu", "Actinides", 0, 7, 244, 912.5, 3505, 1.28, "[Rn] 5f\u2076 7s\u00B2", "3, 4, 5, 6", 94));
        elementList.add(new TableElement("Polonium", "Po", "Metalloid", 16, 6, 209.982, 527, 1235, 2.0, "[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u2074", "2, -2, 4, 6", 84));
        elementList.add(new TableElement("Potassium", "K", "Alkali Metal", 1, 4, 39.098, 336.53, 1032, 0.82, "[Ar] 4s\u00B9", "1", 19));
        elementList.add(new TableElement("Praseodymium", "Pr", "Lantanoid", 0, 6, 140.907, 1204, 3793, 1.13, "[Xe] 6s\u00B2 4f\u00B3", "3", 59));
        elementList.add(new TableElement("Promethium", "Pm", "Lantanoid", 0, 6, 145, 1373, 3273, 1.13, "[Xe] 4f\u2075 6s\u00B2", "3", 61));
        elementList.add(new TableElement("Protactinium", "Pa", "Actinides", 0, 7, 231.035, 2113, 4300, 1.5, "[Rn] 7s\u00B2 5f\u00B2 6d\u00B9", "2, 3, 4, 5", 91));
        elementList.add(new TableElement("Radium", "Ra", "Alkaline Earth Metal", 2, 7, 226.025, 973, 2010, 0.9, "[Rn] 7s\u00B2", "2", 88));
        elementList.add(new TableElement("Radon", "Rn", "Noble Gas", 18, 6, 222, 202, 211.3, 0, "[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u2076", "0", 86));
        elementList.add(new TableElement("Rhenium", "Re", "Transition Metal", 7, 6, 186.207, 3186, 5596, 1.9, "[Xe] 4f\u00B9\u2074 5d\u2075 6s\u00B2", "1, -1, 2, 3, 4, 5, 6, 7", 75));
        elementList.add(new TableElement("Rhodium", "Rh", "Transition Metal", 9, 5, 102.905, 2237, 3968, 2.28, "[Kr] 5s\u00B9 4d\u2078", "1, -1, 2, 3, 4, 5, 6", 45));
        elementList.add(new TableElement("Roentgenium", "Rg", "Transition Metal", 11, 7, 281, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B9", "1, -1, 3, 5", 111));
        elementList.add(new TableElement("Rubidium", "Rb", "Alkali Metal", 1, 5, 85.467, 312.46, 961, 0.82, "[Kr] 5s\u00B9", "1", 37));
        elementList.add(new TableElement("Ruthenium", "Ru", "Transition Metal", 8, 5, 101.07, 2607, 4423, 2.2, "[Kr] 4d\u2077 5s\u00B9", "2, 3, 4, 6", 44));
        elementList.add(new TableElement("Rutherfordium", "Rf", "Transition Metal", 4, 7, 261, 0, 0, 0, "[Rn] 5f\u00B9\u2074 6d\u00B2 7s\u00B2", "0", 104));
        elementList.add(new TableElement("Samarium", "Sm", "Lantanoid", 0, 6, 150.35, 1345, 2076, 1.17, "[Xe] 6s\u00B2 4f\u2076", "2, 3", 62));
        elementList.add(new TableElement("Scandium", "Sc", "Transition Metal", 3, 4, 44.955, 1814, 3103, 1.36, "[Ar] 4s\u00B2 3d\u00B9", "3", 21));
        elementList.add(new TableElement("Seaborgium", "Sg", "Transition Metal", 6, 5, 269, 0, 0, 0, "[Rn] 7s\u00B2 5f\u00B9\u2074 6d\u2074", "6", 106));
        elementList.add(new TableElement("Selenium", "Se", "No Metal", 16, 4, 78.96, 494, 957.8, 2.48, "[Ar] 3d\u00B9\u2070 4s\u00B2 4p\u2074", "2, -2, 4, 6", 34));
        elementList.add(new TableElement("Silicon", "Si", "Metalloid", 14, 3, 28.085, 1687.15, 3538.15, 1.9, "[Ne] 3s\u00B2 3p\u00B2", "4", 14));
        elementList.add(new TableElement("Silver", "Ag", "Transition Metal", 11, 5, 107.868, 1234.93, 2435, 1.93, "[Kr] 5s\u00B9 4d\u00B9\u2070", "1, 2, 3, 4", 47));
        elementList.add(new TableElement("Sodium", "Na", "Alkali Metal", 1, 3, 22.989, 370.87, 1156, 0.93, "[Ne] 3s\u00B9", "1", 11));
        elementList.add(new TableElement("Strontium", "Sr", "Alkaline Earth Metal", 2, 5, 87.62, 1050, 1655, 0.95, "[Kr] 5s\u00B2", "2", 38));
        elementList.add(new TableElement("Sulfur", "S", "No Metal", 16, 3, 32.065, 388.36, 717.87, 2.58, "[Ne] 3s\u00B2 3p\u2074", "2, -2, 4, 6", 16));
        elementList.add(new TableElement("Tantalum", "Ta", "Transition Metal", 6, 6, 180.947, 3290, 5731, 1.5, "[Xe] 4f\u00B9\u2074 5d\u00B3 6s\u00B2", "-1, 2, 3, 4, 5", 73));
        elementList.add(new TableElement("Technetium", "Tc", "Transition Metal", 7, 5, 98.9063, 2430, 4538, 1.9, "[Kr] 4d\u2075 5s\u00B2", "1, 3, 4, 5, 6, 7", 43));
        elementList.add(new TableElement("Tellurium", "Te", "Metalloid", 16, 5, 127.6, 722.66, 1261, 2.1, "[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u2074", "2, -2, 4, 6", 52));
        elementList.add(new TableElement("Tennessine", "Ts", "Halogen", 17, 7, 294, 573, 823, 0, "[Rn] 5f\u00B9\u2074 6d\u00B9\u2070 7s\u00B2 7p\u2075", "1, -1, 3, 5", 117));
        elementList.add(new TableElement("Terbium", "Tb", "Lantanoid", 0, 6, 158.925, 1629, 3503, 1.2, "[Xe] 6s\u00B2 4f\u2079", "4", 65));
        elementList.add(new TableElement("Thallium", "Tl", "Block Metal P", 13, 6, 204.383, 577, 1746, 1.62, "[Xe] 4f\u00B9\u2074 5d\u00B9\u2070 6s\u00B2 6p\u00B9", "1, 3", 81));
        elementList.add(new TableElement("Thorium", "Th", "Actinides", 0, 7, 232.038, 2028, 5061, 1.3, "[Rn] 7s\u00B2 5f\u00B2", "2, 3, 4", 90));
        elementList.add(new TableElement("Thulium", "Tm", "Lantanoid", 0, 6, 168.934, 1818, 2220, 1.25, "[Xe] 6s\u00B2 4f\u00B9\u00B3", "3", 69));
        elementList.add(new TableElement("Tin", "Sn", "Block Metal P", 14, 5, 118.710, 505.08, 2875, 1.96, "[Kr] 4d\u00B9\u2070 5s\u00B2 5p\u00B2", "2, 4", 50));
        elementList.add(new TableElement("Titanium", "Ti", "Transition Metal", 4, 4, 47.867, 1941, 3560, 1.54, "[Ar] 3d\u00B2 4s\u00B2", "1, -1, 2, 3, 4", 22));
        elementList.add(new TableElement("Uranium", "U", "Actinides", 0, 7, 238.028, 1900, 2334, 1.38, "[Rn] 5f\u00B3 6d\u00B9 7s\u00B2", "3, 4, 5, 6", 92));
        elementList.add(new TableElement("Vanadium", "V", "Transition Metal", 5, 4, 50.941, 2175, 3682, 1.63, "[Ar] 4s\u00B2 3d\u00B3", "2, 3, 4, 5", 23));
        elementList.add(new TableElement("Wolfram", "W", "Transition Metal", 6, 6, 183.84, 3695, 6203, 2.36, "[Xe] 4f\u00B9\u2074 5d\u2074 6s\u00B2​", "2, 3, 4, 5, 6", 74));
        elementList.add(new TableElement("Xenon", "Xe", "Noble Gas", 18, 5,131.293, 161.4, 165.1, 2.6, "[Kr] 5s\u00B2 4d\u00B9\u2070 5p\u2076", "0", 54));
        elementList.add(new TableElement("Ytterbium", "Yb", "Lantanoid", 0, 6, 173.04, 1097, 1467, 1.1, "[Xe] 4f\u00B9\u2074 6s\u00B2", "3", 70));
        elementList.add(new TableElement("Yttrium", "Y", "Transition Metal", 3, 5, 88.905, 1799, 3609, 1.22, "[Kr] 4d\u00B9 5s\u00B2", "3", 39));
        elementList.add(new TableElement("Zinc", "Zn", "Transition Metal", 12, 4, 65.38, 692.68, 1180, 1.6, "[Ar] 3d\u00B9\u2070 4s\u00B2", "2", 30));
        elementList.add(new TableElement("Zirconium", "Zr", "Transition Metal", 4, 5, 91.224, 2128, 4644, 1.33, "[Kr] 4d\u00B2 5s\u00B2", "4", 40));
    }

    public static List<TableElement> getInstance(){
        if(elementList.isEmpty()){
            initializeList();
        }
        return elementList;
    }

    public static void setPosition(int position) {
        TableElementList.position = position;
    }

    public static int getPosition(){
        return TableElementList.position;
    }
}

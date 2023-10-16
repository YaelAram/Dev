using System;

public class Persona
{
    public string Nombre { get; }
    public int Edad { get; }

    public Persona(string nombre, int edad)
    {
        this.Nombre = nombre;
        this.Edad = edad;
    }

    public void saludar()
    {
        Console.WriteLine($"Hola, {nombre} tiene {edad} {((edad == 1) ? "año" : "años")}");
    }
}

namespace TiposDatos
{
    internal class Persona
    {
        // Forma compacta de especificar un GETTER y SETTER
        public string Nombre { get; set; }
        // Los metodos GETTER Y SETTER pueden modificar su acceso, aqui el GETTER es PRIVADO, el SETTER es PUBLICO
        public int Edad { private get; set; }

        // Cosa rara de C#, para hacer un campo privado se declaran dos variables una publica y otra privada
        private int altura;
        public int Altura 
        {
            // Forma manual de escribir GETTER y SETTER (por si se requeire un comportamiento diferente al por default)
            get
            {
                return altura;
            }
            set
            {
                // La variable value es el valor enviado al SETTER
                if(value > 0 && value < 250) altura = value;
            }
        }

        // Constructor
        public Persona(string nombre, int edad, int altura)
        {
            this.Nombre = nombre;
            this.Edad = edad;
            this.altura = altura;
        }

        // Metodo
        public string Saludar()
        {
            return $"Hola, {this.Nombre} tiene {this.Edad} {((this.Edad == 1) ? "año" : "años")} mido {this.Altura}cm";
        }
    }
}

namespace TiposDatos
{
    class Program
    {
        static void Main(string[] args)
        {
            // TIPOS NUMERICOS
            byte a = 69; // Byte (0 a 255)
            sbyte b = -50; // Signed Byte (-128 a 127)
            short y = 56; // Short (Entero de 16 bits)
            ushort z = 89; // Unsigned Short (Entero sin signo de 16 bits)
            int c = -89798; // Int (Entero de 32 bits)
            uint d = 898; // Unsigned Int (Entero sin signo de 32 bits)
            long w = 4579889; // Long (Entero de 64 bits)
            ulong x = 7989; // Unsigned Long (Entero sin signo de 64 bits)
            float e = 9.656f; // Float (4 bytes, 7 digitos de precision)
            double f = 9.6478998; // Double (8 bytes, 15 digitos de precision)
            decimal g = 2.658978m; // Deciman (16 bytes, 31 digitos de precision) (Menor rango de numeros)

            Console.WriteLine("TIPOS NUMERICOS");
            Console.WriteLine($"BYTE: {a} -> Min: {byte.MinValue} Max: {byte.MaxValue}");
            Console.WriteLine($"SBYTE: {b} -> Min: {sbyte.MinValue} Max: {sbyte.MaxValue}");
            Console.WriteLine($"SHORT: {y} -> Min: {short.MinValue} Max: {short.MaxValue}");
            Console.WriteLine($"USHORT: {z} -> Min: {ushort.MinValue} Max: {ushort.MaxValue}");
            Console.WriteLine($"INT: {c} -> Min: {int.MinValue} Max: {int.MaxValue}");
            Console.WriteLine($"UINT: {d} -> Min: {uint.MinValue} Max: {uint.MaxValue}");
            Console.WriteLine($"LONG: {w} -> Min: {long.MinValue} Max: {long.MaxValue}");
            Console.WriteLine($"ULONG: {x} -> Min: {ulong.MinValue} Max: {ulong.MaxValue}");
            Console.WriteLine($"FLOAT: {e} -> Min: {float.MinValue} Max: {float.MaxValue}");
            Console.WriteLine($"DOUBLE: {f} -> Min: {double.MinValue} Max: {double.MaxValue}");
            Console.WriteLine($"DECIMAL: {g} -> Min: {decimal.MinValue} Max: {decimal.MaxValue}");

            // TIPOS CARACTER
            char h = (char) a; // Char (1 byte) (Comillas simple)
            string i = "Hola Mundo"; // String

            Console.WriteLine("\nTIPOS CARACTER");
            Console.WriteLine(h);
            Console.WriteLine(i);

            // OTROS TIPOS
            DateTime j = DateTime.Now; // Tiempo (Asi se obtiene la fecha y hora actual)
            bool k = true; // Boolean

            Console.WriteLine("\nOTROS TIPOS");
            Console.WriteLine(j);
            Console.WriteLine(k);

            // Concatenar Strings y Variables
            string nombre = "Yael";

            Console.WriteLine("\nSTRINGS");
            Console.WriteLine("Hola " + nombre);
            Console.WriteLine($"Hola {nombre}"); // Asi se concatenan variables y strings
            Console.WriteLine($"Longitud: {nombre.Length}");
            Console.WriteLine($"Minusculas: {nombre.ToLower()}");

            // MATH
            double radio = 16.5689;

            Console.WriteLine("\nMATH");
            Console.WriteLine($"Radio: {radio}u Area: {Math.PI * Math.Pow(radio, 2)}");

            // SENTENCIAS DE CONTROL (IF)
            byte edad = 23;

            Console.WriteLine("\nIF");
            if (edad < 0) Console.WriteLine("Edad no valida");
            else if (edad >= 0 && edad < 18) Console.WriteLine("Menor de edad");
            else Console.WriteLine("Mayor de edad");

            Console.WriteLine($"{nombre} tiene {edad} {((edad == 1) ? "año" : "años")}");

            // LOOPS (WHILE) (DO WHILE existe)
            byte contador = 0;

            Console.WriteLine("\nWHILE");
            while (contador < 10)
            {
                Console.WriteLine($"Contador (WHILE): {contador}");
                contador++;
            }

            // LOOPS (FOR) (BREAK Y CONTINUE)
            Console.WriteLine("\nFOR");
            for (int index = 0; index < 10; index++)
            {
                if (index == 4) continue;
                if (index == 8) break;
                Console.WriteLine($"Contador (FOR): {index}");
            }

            // LISTAS (Este codigo es la forma simplificada que sugirio el IDE)
            List<string> nombres = new()
            {
                "Yael",
                "Joshua",
                "Axel",
                "Angel"
            };

            Console.WriteLine("\nLISTAS (FOREACH)");
            foreach (string no in nombres)
            {
                Console.WriteLine($"Nombre: {no}");
            }

            // INDEXOF
            int nombreIndex = nombres.IndexOf("Axel");
            Console.WriteLine($"Nombre en la posicion {nombreIndex + 1}: {nombres[nombreIndex]}");

            // SORT
            nombres.Sort();
            nombres.ForEach((no) => Console.WriteLine(no));

            // FIBONACCI
            List<int> fibonacci = new() { 1, 1 };

            Console.WriteLine("\nFibonacci");
            for (int limite = 2; limite < 10; limite++)
            {
                fibonacci.Add(fibonacci[limite - 2] + fibonacci[limite - 1] );
            }

            fibonacci.ForEach((no) => Console.WriteLine(no));

            // CLASES
            Console.WriteLine("\nCLASES");
            Persona persona = new("Yael", 23, 170);
            persona.Altura = 300;
            Console.WriteLine(persona.Saludar());
            Console.WriteLine($"Nombre: {persona.Nombre}");
        }
    }
}

namespace TiposDatos
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
            TIPOS DE DATOS NUMERICOS
                
            Los tipos de dato unsigned, almacenan numeros sin signo (como un valor obsoluto)
            Los tipos de dato signed, almacenan numeros con signo (negativos y positivos), el primer bit de la representacion
            binaria del numero se utiliza para almacenar el signo, usualmente si esta bit es igual a cero indica un signo "+"
            (numero positivo) y si es igual a uno un signo "-" (numero negativo)

            Tipos de datos numericos enteros (sin parte decimal):
            - byte y sbyte (Peso en memoria: 1 byte = 8 bits)
            - short y ushort (Peso en memoria: 2 bytes = 16 bits)
            - int y uint (Peso en memoria: 4 bytes = 32 bits)
            - long y ulong (Peso en memoria: 8 bytes = 64 bits)

            Tipos de datos numericos reales (con parte decimal):
            - float (Peso en memoria: 4 bytes = 32 bits) (Entre 6 y 9 digitos de precision despues del punto)
            - double (Peso en memoria: 8 bytes = 64 bits) (Entre 15 y 17 digitos de precision despues del punto)
            - decimal (Peso en memoria: 16 byte = 128 bits) (Entre 28 y 29 digitos de precision despues del punto)

            NOTA: Los tipos de dato float, double y decimal no tienen un tipo de dato unsigned (sin signo)
            */

            byte a = 69; // Byte (Rango de valores: 0 a 255) (unsigned)
            sbyte b = -50; // Signed Byte (Rango de valores: -128 a 127)

            short y = 56; // Short (Rango de valores: -32,768 a 32,767) (signed)
            ushort z = 89; // Unsigned Short (Rango de valores: 0 a 65,535)

            int c = -89798; // Int (Rango de valores: -2,147,483,648 a 2,147,483,647) (signed)
            uint d = 898; // Unsigned Int (Rango de valores: 0 a 4,294,967,295)

            long w = 4579889; // Long (Rango de valores: -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807) (signed)
            ulong x = 7989; // Unsigned Long (Rango de valores: 0 a 18,446,744,073,709,551,615)

            // Se requiere escribir un 'f' al final del numero como se observa a continuacion (9.656f), puede ser minuscula o mayuscula
            float e = 9.656f; // Float (Rango de valores: -3.40282347x10^(38) a 3.40282347x10^(38))

            // Usualmente se utiliza el tipo de dato double
            double f = 9.6478998; // Double (Rango de valores: -1.7976931348623157x10^(308) a 1.7976931348623157x10^(308))

            /*
            NOTA: Decimal permite almacenar un mayor numero de digitos de precision, pero su rango de numeros es menor
            
            Por ejemplo, imagina que un double tiene un rango de 0 a 200 con 15 digitos de precision, el tipo de dato
            decimal solo logra un rango de 0 a 100, sin embargo, tiene casi el doble de digitos de presicion

            Sacrificas tener un mayor rango de numeros en pro de tener mayor precision, este tipo de dato no se utiliza con regularidad
            salvo en casos donde la precision es muy importante, la documentacion de Microsoft dice esto:

            "El Decimal tipo de valor es adecuado para los cálculos financieros que requieren un gran número de dígitos enteros y 
            fraccionarios significativos y sin errores de redondeo. El Decimal tipo no elimina la necesidad de redondeo. En su lugar, 
            minimiza los errores debido al redondeo"

            Se requiere escribir un 'm' al final del numero como se observa a continuacion (2.658978m), puede ser minuscula o mayuscula
            */
            decimal g = 2.658978m; // Decimal (Rango de valores: -7.92228x10^(28) a 7.92228x10^(28))

            /*
            La clase byte, sbyte, short, etc. Tienen atributos y metodos muy utiles, por ejemplo, el atributo en las siguientes
            lineas imprimo un atributo llamado MinValue y MaxValue, estos atributos son solo de lectura y contienen los valores minimos
            y maximos de cada tipo de datos numerico

            Puedes escribir int. y te aparecera un menu con todos los atributos y metodos de la clase int (Integer), esto ocurre con
            todos los tipos de datos (string, char, int, double, float, byte, etc),con las flechas de
            direccion puedes navegar por el menu y leer las descripcion del elemento que en el que estas. Si no te aparece el menu
            puede teclear CTRL + ESPACIO

            Console.WriteLine es como el printf de C

            Para concatenar un texto y variables no es necesario recordar identificadores como %i, %c, etc
            Simplemente pon un signo de dolar '$' justo a un lado de las primeras comillas dobles de un string y donde necesites
            concatenar o imprimir una variable inserta los simbolos '{' y '}' entre estos simbolos escribe el nombre de la variable

            EJEMPLO:

            int edad = 23;
            Console.WriteLine($"Edad: {edad} años"); IMPRIME -> Edad: 23 años

            Tambien puedes escribir expresiones que regresen un valor (el resultado de una suma o restas, el valor que retorna una 
            funcion, etc)

            Console.WriteLine($"Edad: {edad + 1} años"); IMPRIME -> Edad: 24 años
            */
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

            // Puedes convertir un string a cualquiera de los tipos de datos numericos con ayuda del metodo Parse
            string numero = "3.14";

            Console.WriteLine($"INT: {int.Parse(numero)}");
            Console.WriteLine($"DOUBLE: {double.Parse(numero)}");

            /*
            Puedes convertir cualquiera de los tipos de datos numericos a un string con ayuda del metodo ToString,
            como puedes ver, puedes escribir el nombre de una variable seguida de un '.', esto provoca que el IDE te muestre una lista
            con todos las funciones que puedes ejecutar sobre la variable. Si la lista no aparece teclea CTRL + ESPACIO

            Intenta escribir "c." y ve que opciones te muestra
            */
            Console.WriteLine(c.ToString()); // Convertimos la variable llamada "c" de tipo int a un string
            Console.WriteLine(f.ToString()); // Convertimos la variable llamada "f" de tipo double a un string

            // TIPOS CARACTER
            char h = 'a'; // Char (1 byte) (Comillas simple) (Un solo caracter)
            /*
            String, recuerdas los arreglos de char en C para guardar cadenas de texto, en C# utilizas un string para hacer eso
            no te preocupes por definir la longitud de un arreglo, C# se encarga de eso automaticamente puedes meter en un string tanto
            texto como tu quieras

            Escribe "saludo." y ve la lista de metodos que puedes ejecutar con la cadena, que argumentos requeiren y que valor retornan
            */
            string saludo = "Hola Mundo";
            string despedida = " Adios";

            Console.WriteLine("\nTIPOS CARACTER");
            Console.WriteLine(h);
            Console.WriteLine(saludo);
            Console.WriteLine($"Longitud del string: {saludo.Length}"); // La propiedad Length contiene el numero de caracteres de un string
            Console.WriteLine($"String en mayusculas: {saludo.ToUpper()}");
            Console.WriteLine($"String en minusculas: {saludo.ToLower()}");
            Console.WriteLine($"Concatenar dos strings: {saludo.Concat(despedida)}");

            // OTROS TIPOS
            DateTime j = DateTime.Now; // Tiempo (Asi se obtiene la fecha y hora actual)
            bool k = true; // Boolean (true o false son los unicos valores que almacena)

            Console.WriteLine("\nOTROS TIPOS");
            Console.WriteLine(j);
            Console.WriteLine(k);

            // Al igual que C o C++, C# tiene una libreria llamada Math, de la que puedes obtener constantes y metodos utiles
            double radio = 16.5689;

            Console.WriteLine("\nMATH");
            Console.WriteLine($"Radio: {radio}u Area: {Math.PI * Math.Pow(radio, 2)}");

            // SENTENCIAS DE CONTROL (IF)
            string nombre = "Yael";
            byte edad = 23;

            Console.WriteLine("\nIF");
            if (edad < 0) Console.WriteLine("Edad no valida");
            else if (edad >= 0 && edad < 18) Console.WriteLine("Menor de edad");
            else Console.WriteLine("Mayor de edad");

            /*
            Esta es una forma de hacer una sentencia IF en una sola linea y retorna un valor, en este ejemplo dependiendo
            de la expresion "edad == 1" (el valor de edad es igual a cero), si es verdadera retorna el string "año" si es falsa
            retorna "años"
            */
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

            /*
            LISTAS (Este codigo es la forma simplificada que sugirio el IDE)
            
            En C tenias que definir un arreglo de X tipo de dato, en C# tambien lo puedes hacer pero existe un tipo de dato llamado
            List, que te ofrece varias ventajas, entre ellas es que no tiene un tamaño fijo por lo que puedes agregar tantos elementos
            como necesites y la otra ventaja es que tiene metodos y atributos que te puedes ayudar

            En este caso es una lista llamada nombres que almacena strings, pero puedes almacenar cuando cualquier tipo de dato
            pro ejemplo List<int> seria una lista de integers, solo necesitas poner el tipo de dato entre los simbolos '<' y '>'
            */
            List<string> nombres = new()
            {
                "Yael",
                "Isael",
                "Yonatan",
                "Ricardo"
            };

            nombres.Remove("Yael"); // Eliminamos un elemento de la lista
            nombres.RemoveAt(0); // Eliminamos el primer elemento de la lista
            nombres.Add("Isael"); // Agregamos un elemento al final de la lista

            nombres.Reverse(); // Invierte el orden de la lista

            Console.WriteLine("\nLISTAS (FOREACH)");
            /*
            Este es otro tipo de for que te permite recorrer una lista, simplifica la sintaxis del FOR normal de C,
            si lo deseas puedes ocupar un FOR de C en una lista
            */
            foreach (string no in nombres)
            {
                Console.WriteLine($"Nombre: {no}");
            }

            Console.WriteLine(nombres.ElementAt(1)); // Obtemos el segundo elemento de la lista
            Console.WriteLine(nombres.First()); // Obtenemos el primer elemento de la lista
            Console.WriteLine(nombres.Last()); // Obtenemos el ultimo elemento de la lista

            // INDEXOF: Te da el indice del elemento que esta buscando "Isael", si no existe el elemento en la lista te retorna un -1
            int nombreIndex = nombres.IndexOf("Isael");
            Console.WriteLine($"Nombre en la posicion {nombreIndex + 1}: {nombres[nombreIndex]}");

            /*
            SORT: Te permite ordenar los elementos en una lista, en este caso orden alfabetico, si necesitaras que los elementos se ordenen
            segun otras condiciones, este metodo te permite envarle como parametro una funcion que le diga como ordenar los elementos
            */
            nombres.Sort();
            // Un FOR EACH tambien se puede escribir de esta forma, la funcion que envias por parametro se ejecuta por cada item de la lista
            nombres.ForEach((no) => Console.WriteLine(no));
            //Por ejemplo, aqui ordenamos los nombres segun la longitud del nombre (Del nombre mas corto al mas largo)
            nombres.Sort((nombre1, nombre2) => nombre1.Length - nombre2.Length);
            nombres.ForEach((no) => Console.WriteLine(no));

            // FIBONACCI, Aqui usamos una lista de integers
            List<int> fibonacci = new() { 1, 1 };

            Console.WriteLine("\nFibonacci");
            for (int limite = 2; limite < 10; limite++)
            {
                fibonacci.Add(fibonacci[limite - 2] + fibonacci[limite - 1] );
            }

            fibonacci.ForEach((no) => Console.WriteLine(no));

            // CLASES
            Console.WriteLine("\nCLASES");
            Persona persona = new("Yael", 23, 170); // Creamos una nueva instancia
            persona.Altura = 300; // Modificamos un atributo
            Console.WriteLine(persona.Saludar()); // Ejecutamos un metodo de la instancia
            Console.WriteLine($"Nombre: {persona.Nombre}"); // Imprimimos un atributo
        }
    }
}

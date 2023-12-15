import java.util.Scanner

// La funcion main es el punto de inicio de toda la aplicacion
fun main() {
    // La palabra clave VAL crea constantes mientras la palabra VAR crea variables
    val byte: Byte = 127 // 8 bits. De -128 a 127
    val short: Short = 3_500 // 16 bits. De -32,768 a 32,767
    val entero = 56 // 32 bits. De -2,147,483,648 X10^(-231) a 2,147,483,647 X10^(231 - 1)
    val long: Long = 9_956_569 // 64 bits. De -9,223,372,036,854,775,808 X10^(-263) a 9,223,372,036,854,775,807 X10^(263 - 1)
    /*
    Nota: Existen sus contrapartes sin signo:
        UByte: 0 a 255
        UShort: 0 a 65,535
        UInt: 0 a 2^32-1
        ULong: 0 a 2^64-1
    Los arreglos de estos tipos de datos estan en beta
    */

    val float = 1.5689F // 32 bits. De 6 a 7 digitos de precision
    val double = 3.141678 // 64 bits. De 15 a 16 digitos de precision

    println("Tipos Enteros")
    println("Byte: $byte") // Asi se concatena una variable a un string
    println("Short: ${short + 1}") // Asi se concatena una expresion a un string
    println("Int: $entero")
    println("Long: $long\n")

    println("Tipos Flotantes")
    println("Float: $float")
    println("Double: \$$double\n") // Asi escapamos el simbolo '$'

    val digito = '5'

    println("Tipos Caracter")
    println("Char: $digito")
    println("Digito: ${digito.digitToInt()}") // Convertimos a INT el valor del char
    println("ASCII: ${digito.code}\n") // Obtenemos el valor ASCII del char

    val mensaje = "Hola Mundo"

    println("String: $mensaje")
    println("Int: ${String.format("%04d", entero)}") // Agrega tanto CEROS sean necesarios para que la parte entera tenga una longitud de 4
    println("Double: ${String.format("%+.4f", double)}") // Limita el numero de digitos de precision a 4
    println("String: ${String.format("%S", mensaje)}\n") // Cambia el contenido del string a mayusculas

    println("Sentencia IF")
    val input = Scanner(System.`in`) // Creamos un objeto Scanner (Java)

    print("Ingresa tu edad: ")
    val edad = input.nextInt() // Leemos la entrada como Int

    if (edad < 0 || edad > 110) println("Edad no valida")
    else if (edad >= 18) println("Mayor de edad")
    else println("Menor de edad")

    val aviso = if (edad < 0 || edad > 110) "Edad no valida" else "Edad valida" // Sentencia IF como expresion
    println("$aviso\n")

    println("Sentencia FOR")
    val numeros = List(3) {0} // Crea un array de longitud 3, todas sus posiciones se inicializan con el valor 0
    val edades = List(5) { i -> i * 5 } // Crea un array y con una funcion lamda inicializamos los valores

    for (i in 1..5) { // De esta forma se indica el rango de valores del FOR, el valor se incrementa
        println("Index: $i")
    }

    for (i in 5 downTo 1 step 1) { // El valor decrementa
        println("Index: $i")
    }

    for (i in numeros.indices) { // La propiedad indices contiene una lista con los indices del array
        println("Indice $i: ${numeros[i]}")
    }

    for ((index, edadLista) in edades.withIndex()) { // Obtenemos el indice y la edad
        println("Indice $index: $edadLista")
    }

    println("\nClases")
    val persona = Persona("Yael", 23, 1.70)
    println(persona.toString())
    persona.edad = 20
    println(persona.toString())
    println("Es mayor: ${persona.esMayor()}\n")

    println("Funciones")
    println("Suma: ${sumar(4.0, 5.5)}")
    println("Suma: ${restar(4.0, 5.5)}")

    val nombres = listOf("Yael", "Juan", "Oscar") // ListOf tiene menos operaciones de escritura que MutableListOf
    nombres.sorted().forEach { println(it) }
    nombres.sortedBy { it.length }.forEach { println(it) }
    nombres.filter { it.length == 4 }.forEach { println(it) }

    val dias = mutableMapOf("LUNES" to 1, "MARTES" to 2) // Tipo Map, tambien posee el tipo mapOf
    dias["MIERCOLES"] = 3
    println("Dia 1: ${dias["LUNES"]}")
    println("Dia 20: ${dias.getOrDefault("ASD", 20)}")
}

fun sumar(x: Double, y: Double): Double {
    return x + y
}

fun restar(x:Double, y: Double): Double = x - y

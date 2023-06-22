from aritmetica import suma, resta, multiplicacion
from Alumno import Alumno

if __name__ == '__main__':
    numeros = {"a": 4, "b": 2, "c": 3}

    print("Funciones: ")
    print(f"Suma 1: {suma()}")
    print(f"Suma 2: {suma(3, 4)}")
    print(f"Resta 1: {resta(2, 1)}")
    print(f"Resta 1: {resta(3, 5, 6, 7)}")
    print(f"Multiplicacion 1: {multiplicacion(**numeros)}")

    print("\nClases")
    yael = Alumno("Yael", 23, "ICO")
    juan = Alumno("Juan", 22, "ICO")
    # vars muestra la informacion que contine el objeto
    print(vars(yael))
    yael.__edad = 330
    print(vars(yael))
    print(vars(juan))

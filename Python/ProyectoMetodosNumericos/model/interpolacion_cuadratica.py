from tools.polinomio import Polinomio
from model.gauss_jordan import calcular_gauss_jordan
from tools.entrada_datos import ingresar_consultas
import os


def ingresar_datos():
    print(f"\nIngresando datos....\n")
    datos = [[], [], []]
    for i in range(3):
        punto = input(f"P_{i}: ").split()
        x, y = float(punto[0]), float(punto[1])
        datos[i].append(x ** 2)
        datos[i].append(x)
        datos[i].append(1.0)
        datos[i].append(y)
    return datos


def mostrar_instrucciones():
    print(f"Instrucciones de uso:\n\n"
          f"1. Ingresa los registros separando el valor de X y Y por un espacio, si cuentas con un registro cuya X \n"
          f"   sea igual a 0 deberas ingresar este como ultimo registro.\n"
          f"   Ejemplo: El registro (7, -1) se ingresa de la forma '7 -1'\n"
          f"2. Ingresa las consultas que desees, no hay limite, cada consulta debe estar separada por un espacio.\n"
          f"   Ejemplo: Consulta los valores 2 y 4 se ingresa de la forma '2 4'\n"
          f"3. Una vez termines de ingresar las consultas presiona Enter.\n")


def iniciar_cuadratica(modo):
    os.system("cls")
    print(f"Interpolacion y Extrapolacion Cuadratica\n")
    if modo:
        mostrar_instrucciones()
    fun = Polinomio(calcular_gauss_jordan(ingresar_datos(), 3, 4))
    consultas = ingresar_consultas()
    print(f"\nFuncion = y(x) = {fun.__str__()}")
    for consulta in consultas:
        print(f"y({consulta}) = {fun.evaluar(consulta)}")

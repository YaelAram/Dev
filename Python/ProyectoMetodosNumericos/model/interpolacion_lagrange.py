from tools.polinomio import Polinomio
from tools.entrada_datos import ingresar_datos, ingresar_consultas
import os


def constante(datos, tam):
    total = 0.0
    for i in range(tam):
        subtotal, semejante = datos[1][i], datos[0][i]
        for j in range(tam):
            if i != j:
                subtotal *= (-datos[0][j])
                subtotal *= ((semejante - datos[0][j]) ** -1)
        total += subtotal
    return total


def delta(sub):
    return (sub[0] * sub[1]) + (sub[2] * (sub[0] + sub[1]))


def lineal(datos, tam):
    total = 0.0
    for i in range(tam):
        subtotal, semejante, sub = datos[1][i], datos[0][i], []
        for j in range(tam):
            if i != j:
                sub.append(datos[0][j])
                subtotal *= ((semejante - datos[0][j]) ** -1)
        total += (subtotal * delta(sub))
    return total


def term_lineal_cuadrado(datos, tam):
    total = 0.0
    for i in range(tam):
        subtotal, semejante, b0_c0 = datos[1][i], datos[0][i], 0.0
        for j in range(tam):
            if i != j:
                b0_c0 += (-datos[0][j])
                subtotal *= ((semejante - datos[0][j]) ** -1)
        total += (subtotal * b0_c0)
    return total


def term_cuadrado_cubo(datos, tam):
    total, subtotales = 0.0, []
    for i in range(tam):
        subtotal, semejante = datos[1][i], datos[0][i]
        for j in range(tam):
            if i != j:
                subtotal *= ((semejante - datos[0][j]) ** -1)
        subtotales.append(subtotal)
        total += subtotal
    return total


def mostrar_instrucciones():
    print("Sitio Web disponible: https://yaelaram.github.io/MetodosNumericosProyecto/\n\n"
          f"Instrucciones de uso:\n\n"
          f"1. Ingresa la cantidad de registros, por el momento solo son soportadas tablas con tres o cuatro "
          f"registros.\n"
          f"2. Ingresa los registros separando el valor de X y Y por un espacio.\n"
          f"   Ejemplo: El registro (7, -1) se ingresa de la forma '7 -1'\n"
          f"3. Ingresa las consultas que desees, no hay limite, cada consulta debe estar separada por un espacio.\n"
          f"   Ejemplo: Consulta los valores 2 y 4 se ingresa de la forma '2 4'\n"
          f"4. Una vez termines de ingresar las consultas presiona Enter.\n")


def iniciar_lagrange(modo):
    os.system("cls")
    print("Polinomio de Lagrange\n")
    if modo:
        mostrar_instrucciones()
    numero_datos = int(input("Numero de registros: "))
    numero_datos = numero_datos if numero_datos == 3 or numero_datos == 4 else 4
    datos, fun = ingresar_datos(numero_datos), None
    consultas = ingresar_consultas()
    if numero_datos == 3:
        fun = Polinomio([term_cuadrado_cubo(datos, numero_datos), term_lineal_cuadrado(datos, numero_datos),
                         constante(datos, numero_datos)])
    elif numero_datos == 4:
        fun = Polinomio([term_cuadrado_cubo(datos, numero_datos), term_lineal_cuadrado(datos, numero_datos),
                         lineal(datos, numero_datos), constante(datos, numero_datos)])
    else:
        print("Numero de registros no soportado por el momento.")

    if fun is not None:
        print(f"\nEcuacion: y(x) = {fun.__str__()}")
        for consulta in consultas:
            print(f"y({consulta}) = {fun.evaluar(consulta)}")

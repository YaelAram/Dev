from math import sqrt
from tools.recta import Recta
from tools.entrada_datos import ingresar_datos, ingresar_consultas
import os


def obtener_beta(tam, datos, m, b):
    beta = 0.0
    for i in range(tam):
        beta += ((b + (m * datos[0][i]) - datos[1][i]) ** 2)
    return beta


def obtener_pendiente(n, s_x, s_y, s_xy, s_x2):
    return ((n * s_xy) - (s_x * s_y)) / ((n * s_x2) - (s_x ** 2))


def obtener_ordenada(n, s_x, s_y, s_xy, s_x2):
    return ((s_y * s_x2) - (s_x * s_xy)) / ((n * s_x2) - (s_x ** 2))


def obtener_r(n, s_x, s_y, s_xy, s_x2, s_y2):
    return ((n * s_xy) - (s_x * s_y)) / sqrt(((n * s_x2) - (s_x ** 2)) * ((n * s_y2) - (s_y ** 2)))


def obtener_coeficientes(tam, datos):
    x, y, x_2, y_2, xy = 0.0, 0.0, 0.0, 0.0, 0.0
    for i in range(tam):
        x += datos[0][i]
        y += datos[1][i]
        xy += (datos[0][i] * datos[1][i])
        x_2 += (datos[0][i] ** 2)
        y_2 += (datos[1][i] ** 2)
    return x, y, xy, x_2, y_2


def mostrar_instrucciones():
    print(f"Instrucciones de uso:\n\n"
          f"1. Ingresa la cantidad de registros que tienes.\n"
          f"2. Ingresa los registros separando el valor de X y Y por un espacio.\n"
          f"   Ejemplo: El registro (7, -1) se ingresa de la forma '7 -1'\n"
          f"3. Ingresa las consultas que desees, no hay limite, cada consulta debe estar separada por un espacio.\n"
          f"   Ejemplo: Consulta los valores 2 y 4 se ingresa de la forma '2 4'\n"
          f"4. Una vez termines de ingresar las consultas presiona Enter.\n")


def iniciar_minimos(modo):
    os.system("cls")
    print("Minimos Cuadrados\n")
    if modo:
        mostrar_instrucciones()
    n = int(input("Numero de datos: "))
    datos = ingresar_datos(n)
    consultas = ingresar_consultas()
    s_x, s_y, s_xy, s_x2, s_y2 = obtener_coeficientes(n, datos)
    m, b = obtener_pendiente(n, s_x, s_y, s_xy, s_x2), obtener_ordenada(n, s_x, s_y, s_xy, s_x2)
    recta = Recta(m, b, None, None)
    print("\nResultados:\n\n"
          f"Coeficiente de correlacion lineal: {obtener_r(n, s_x, s_y, s_xy, s_x2, s_y2)}\n"
          f"Beta: {obtener_beta(n, datos, m, b)}\n"
          f"Ecuacion: {recta}\n\n"
          f"Consultas:\n")
    for consulta in consultas:
        print(f"y({consulta}) = {recta.evaluar(consulta)}")

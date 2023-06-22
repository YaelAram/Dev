from tools.recta import Recta
from tools.entrada_datos import ingresar_datos, ingresar_consultas
import os


def calcular(datos, valor):
    if (valor < datos[0][0]) or (valor > datos[0][-1]):
        return Recta(datos[0][0], datos[1][0], datos[0][-1], datos[1][-1])
    else:
        try:
            return datos[1][datos[0].index(valor)]
        except ValueError:
            for i in range(len(datos[0]) - 1):
                if datos[0][i] < valor < datos[0][i + 1]:
                    return Recta(datos[0][i], datos[1][i], datos[0][i + 1], datos[1][i + 1])


def mostrar_instrucciones():
    print(f"Instrucciones de uso:\n\n"
          f"1. Ingresa la cantidad de registros que tienes.\n"
          f"2. Ingresa los registros separando el valor de X y Y por un espacio.\n"
          f"   Ejemplo: El registro (7, -1) se ingresa de la forma '7 -1'\n"
          f"3. Ingresa las consultas que desees, no hay limite, cada consulta debe estar separada por un espacio.\n"
          f"   Ejemplo: Consulta los valores 2 y 4 se ingresa de la forma '2 4'\n"
          f"4. Una vez termines de ingresar las consultas presiona Enter.\n")


def iniciar_lineal(modo):
    os.system("cls")
    print(f"Interpolacion y Extrapolacion Lineal\n")
    if modo:
        mostrar_instrucciones()
    datos = ingresar_datos(int(input("Longitud: ")))
    consultas = ingresar_consultas()
    for consulta in consultas:
        resultado = calcular(datos, consulta)
        if type(resultado) is Recta:
            print(f"\nRecta: {resultado} \ny({consulta}): {resultado.evaluar(consulta)}")
        else:
            print(f"\ny({consulta}): {resultado}")

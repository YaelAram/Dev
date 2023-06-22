import math
from tools.factorial import factorial
from model.mclaurin import McLaurin
import os


def obtener_sin(iteraciones):
    print("Funcion Seno\n")
    num = float(input("Coeficiente de la incognita: "))
    sin = McLaurin(iteraciones, lambda i: (math.pow(-1, i) * math.pow(num, (2 * i) + 1)),
                   lambda i: factorial((2 * i) + 1), lambda i: (2 * i) + 1)
    print("\n")
    sin.mostrar()
    while True:
        x = float(input("\nEvaluar: "))
        print(f"Resultado Sin({x}) = {sin.evaluar(x)}")
        if int(input("\n¿Consultar otra x? (1/0): ")) != 1:
            break


def obtener_cos(iteraciones):
    print("Funcion Coseno\n")
    num = float(input("Coeficiente de la incognita: "))
    cos = McLaurin(iteraciones, lambda i: (math.pow(-1, i) * math.pow(num, (2 * i))), lambda i: factorial(2 * i),
                   lambda i: (2 * i))
    print("\n")
    cos.mostrar()
    while True:
        x = float(input("\nEvaluar: "))
        print(f"Resultado Cos({x}) = {cos.evaluar(x)}")
        if int(input("\n¿Consultar otra x? (1/0): ")) != 1:
            break


def obtener_exp(iteraciones):
    print("Funcion Exponencial\n")
    num = float(input("Coeficiente del exponente: "))
    exp = McLaurin(iteraciones, lambda i: (math.pow(num, i)), lambda i: factorial(i), lambda i: i)
    print("\n")
    exp.mostrar()
    while True:
        x = float(input("\nEvaluar: "))
        print(f"Resultado e^({num})({x}) = {exp.evaluar(x)}")
        con = int(input("\n¿Consultar otra x? (1/0): "))
        if con != 1:
            break


def iniciar_mclaurin():
    os.system("clear")
    print('Serie de McLaurin')
    iteraciones = int(input("\nNumero de iteraciones: "))
    print("\n1. Exponencial \n2. Seno \n3. Coseno")
    opcion = int(input("\nSeleccione una opcion: "))
    os.system("clear")
    if opcion == 1:
        obtener_exp(iteraciones)
    elif opcion == 2:
        obtener_sin(iteraciones)
    elif opcion == 3:
        obtener_cos(iteraciones)
    else:
        print("Opcion No Valida")

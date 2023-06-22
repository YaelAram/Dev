from decimal import *
import os
getcontext().prec = 64


def crear_vector(fil):
    mat = []
    for i in range(fil):
        mat.append(Decimal("0.0"))
    return mat


def crear_matriz_resultados(fil):
    print("\nIngresando valores iniciales...\n")
    resultados = []
    for i in range(fil):
        resultados.append(Decimal(input(f"Inicial[{i}]: ")))
    return resultados


def calcular(mat, fil):
    resultados_a = crear_matriz_resultados(fil)
    resultados_b = resultados_a.copy()
    for i in range(100_000):
        for index, exp in enumerate(mat):
            resultado_aux = exp[-1]
            for pos, term in enumerate(exp):
                if pos != index and pos < (len(exp) - 1):
                    resultado_aux += -(term * resultados_a[pos])
            resultado_aux *= Decimal(1 / exp[index])
            resultados_b[index] = resultado_aux
        resultados_a = resultados_b
    return resultados_a


def crear__matriz(num_fil, num_col):
    print("\nIngresando datos de la matriz...")
    matriz = []
    for i in range(num_fil):
        lista_aux = []
        for j in range(num_col):
            lista_aux.append(Decimal(input(f"Ingresa el dato[{i}][{j}]: ")))
        matriz.append(lista_aux)
    return matriz


def iniciar_jacobi():
    os.system("clear")
    print("Metodo Jacobi\n")
    tam_fila, tam_columna = int(input("Numero de filas: ")), int(input("Numero de columnas: "))
    if tam_fila == (tam_columna - 1) and 0 < tam_fila <= 10:
        matriz = crear__matriz(tam_fila, tam_columna)
        resultados, incognita = calcular(matriz, tam_fila), 112
        for i in range(tam_fila):
            print(f"\nIncognita - {chr(incognita)}: {resultados[i]}")
            incognita += 1
    else:
        print("La matriz de coeficientes no es cuadrada, intenta de nuevo.")

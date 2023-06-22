import math
import os


def mat():
    matriz = []
    for i in range(140):
        aux = []
        for j in range(340):
            if i == 10:
                aux.append("-")
            elif j == 1:
                aux.append("|")
            else:
                aux.append(" ")
        matriz.append(aux)
    return matriz


def evaluar_ajustar(iteraciones, x):
    resultado = 0.25
    for i in range(1, iteraciones + 1):
        a, b = ((i * math.pi) / 2), (i * x)
        resultado += (1 / (math.pi * i)) * ((math.sin(a) * math.cos(b)) + (math.sin(b) * (1 - math.cos(a))))
    return int(abs((resultado * 100) + 10))


def graficar(iteraciones, matriz):
    for i in range(315):
        matriz[evaluar_ajustar(iteraciones, i / 100)][i] = "*"


def main():
    print("Serie de Fourier de una Onda Cuadrada\n")
    matriz = mat()
    graficar(int(input("Ingresa el numero de iteraciones: ")), matriz)
    matriz.reverse()
    os.system("clear")
    for fila in matriz:
        for celda in fila:
            print(celda, end="")
        print()


if __name__ == '__main__':
    main()

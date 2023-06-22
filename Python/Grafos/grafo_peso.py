from io import *


def crear_matriz(tam):
    matriz = []
    for i in range(tam):
        aux = []
        for j in range(tam):
            aux.append(0)
        matriz.append(aux)
    return matriz


def main():
    archivo = open("grafo_peso.txt", "r")
    grafo = archivo.readlines()
    for i in range(len(grafo)):
        grafo[i] = grafo[i][:len(grafo[i]) - 1]
    primer_nodo, ultimo_nodo = ord(grafo[0][0]), ord(grafo[-1][0])
    for i in range(len(grafo)):
        grafo[i] = grafo[i][2:].split()
    tam = ultimo_nodo - primer_nodo + 1
    adyacente = crear_matriz(tam)
    for index, fila in enumerate(grafo):
        for dato in fila:
            segmento = dato.split(",")
            adyacente[index][ord(segmento[-1]) - primer_nodo] = int(segmento[0])
    print(f"Grafo: {grafo}")
    print(f"Adyacente: {adyacente}")
    archivo.close()


if __name__ == '__main__':
    main()

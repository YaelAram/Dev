from io import *


def inorden(raiz, arbol):
    resultado = ""
    izq, der = arbol[raiz]["izq"], arbol[raiz]["der"]
    if izq != "~":
        resultado += f"( {inorden(izq, arbol)}"
    resultado += f"{arbol[raiz]['valor']} "
    if der != "~":
        resultado += f"{inorden(der, arbol)}) "
    return resultado


def postorden(raiz, arbol):
    resultado = ""
    izq, der = arbol[raiz]["izq"], arbol[raiz]["der"]
    if izq != "~":
        resultado += postorden(izq, arbol)
    if der != "~":
        resultado += postorden(der, arbol)
    resultado += f"{arbol[raiz]['valor']} "
    return resultado


def preorden(raiz, arbol):
    resultado = ""
    resultado += f"{arbol[raiz]['valor']} "
    izq, der = arbol[raiz]["izq"], arbol[raiz]["der"]
    if izq != "~":
        resultado += preorden(izq, arbol)
    if der != "~":
        resultado += preorden(der, arbol)
    return resultado


def crear_arbol(grafo):
    arbol, raiz = {}, grafo[0][0]
    for fila in grafo:
        arbol[fila[0]] = {"valor": fila[1], "izq": fila[2], "der": fila[3]}
    return raiz, arbol


def modificar_grafo(grafo):
    for i in range(len(grafo)):
        grafo[i] = grafo[i][:len(grafo[i]) - 1].split(",")
    return grafo


def leer_archivo():
    archivo = open("arbol.txt", "r")
    grafo = archivo.readlines()
    archivo.close()
    return grafo


def main():
    raiz, arbol = crear_arbol(modificar_grafo(leer_archivo()))
    print(inorden(raiz, arbol))
    print(preorden(raiz, arbol))
    print(postorden(raiz, arbol))


if __name__ == '__main__':
    main()

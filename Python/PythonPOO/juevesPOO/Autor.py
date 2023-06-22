class Autor:
    def __init__(self, nombre, seudonimo):
        self.__nombre = nombre
        self.__seudonimo = seudonimo

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nombre):
        self.__nombre = nombre

    @property
    def seudonimo(self):
        return self.__seudonimo

    @seudonimo.setter
    def seudonimo(self, seudonimo):
        self.__seudonimo = seudonimo

    def escribir(self):
        print(f"{self.__seudonimo} esta escribiendo su siguiente obra")

    def __str__(self):
        return f"{self.__nombre} - {self.__seudonimo}"

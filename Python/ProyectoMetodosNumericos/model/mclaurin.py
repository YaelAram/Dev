import math
from tools.fraccion import Fraccion
from decimal import *
getcontext().prec = 64


class McLaurin:

    def __init__(self, iteraciones, numerador, denominador, exp):
        self.iteraciones = iteraciones
        self.exp = exp
        self.coeficientes = []
        for i in range(self.iteraciones):
            self.coeficientes.append(Fraccion(numerador(i), denominador(i)))

    def evaluar(self, x):
        result = Decimal("0.0")
        for i in range(self.iteraciones):
            result += (self.coeficientes[i].evaluar() * Decimal(math.pow(x, self.exp(i))))
        return result

    def mostrar(self):
        resultado = ""
        for indice, coeficiente in enumerate(self.coeficientes):
            if coeficiente != 0.0:
                signo = "" if indice == 0 else "+" if coeficiente.evaluar() > 0 else "-"
                potencia = self.exp(indice)
                incognita = f"x^{str(potencia)}" if potencia > 1 else "x" if potencia == 1 else ""
                constante = coeficiente.__str__() if coeficiente.__str__() != "1" or incognita == "" else ""
                resultado += f"{signo} {constante}{incognita} "
        print(resultado)

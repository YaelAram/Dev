from decimal import *
getcontext().prec = 256


class Fraccion:

    def __init__(self, numerador, denominador):
        self.numerador = Decimal(numerador)
        self.denominador = Decimal(denominador)

    def evaluar(self):
        if self.numerador == self.denominador:
            return Decimal("1")
        else:
            return self.numerador / self.denominador

    def __str__(self):
        if self.numerador == self.denominador:
            return "1"
        else:
            return f"({abs(self.numerador)}/{abs(self.denominador)})"

class Polinomio:
    __coeficientes = None

    def __init__(self, coeficientes):
        self.__coeficientes = coeficientes
        if abs(self.__coeficientes[0]) < float("1E-9"):
            self.__coeficientes = self.__coeficientes[1:]

    def evaluar(self, x):
        potencia, resultado = (len(self.__coeficientes) - 1), 0.0
        for index, coeficiente in enumerate(self.__coeficientes):
            resultado += (coeficiente * (x ** (potencia - index)))
        return resultado

    def __str__(self):
        potencia_max, resultado = (len(self.__coeficientes) - 1), ""
        for index, coeficiente in enumerate(self.__coeficientes):
            if coeficiente != 0.0:
                signo = "-" if coeficiente < 0.0 else "+" if index != 0 else ""
                constante = abs(coeficiente) if coeficiente != 1 or index == (len(self.__coeficientes) - 1) else ""
                potencia = potencia_max - index
                incognita = f"x^{potencia}" if potencia > 1 else "x" if potencia == 1 else ""
                resultado += f"{signo} {constante}{incognita} "
        return resultado

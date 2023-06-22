class Recta:
    __pendiente = 0.0
    __ordenada_origen = 0.0

    def __init__(self, x1, y1, x2, y2):
        if x2 is None and y2 is None:
            self.__pendiente = x1
            self.__ordenada_origen = y1
        else:
            self.__pendiente = (y2 - y1) / (x2 - x1)
            self.__ordenada_origen = y1 - (self.__pendiente * x1)

    def evaluar(self, x):
        return (self.__pendiente * x) + self.__ordenada_origen

    def __str__(self):
        signo_pendiente = "-" if self.__pendiente < 0.0 else ""
        signo_ordenada = "-" if self.__ordenada_origen < 0.0 else "+" if self.__ordenada_origen > 0.0 else ""
        pendiente = abs(self.__pendiente)
        coeficiente_pendiente = "" if pendiente == 1 or pendiente == 0 else pendiente
        ordenada = abs(self.__ordenada_origen)
        coeficiente_ordenada = "" if ordenada == 1 or ordenada == 0 else ordenada
        incognita = "x" if pendiente != 0 else ""
        return f"y(x) = {signo_pendiente} {coeficiente_pendiente}{incognita} {signo_ordenada} {coeficiente_ordenada}"

def validar_raza(raza="Sin Raza", raza_default="Sin Raza"):
    return raza.strip().title() if len(raza.strip()) > 0 and raza.strip().isalpha() else raza_default


def validar_edad(edad=0, edad_default=0):
    return int(edad) if 0 <= edad <= 20 else edad_default


def validar_altura(altura=0.0, altura_default=0.0):
    return float(altura) if 0.2 <= altura <= 1.5 else altura_default


class Perro:
    def __init__(self, raza, edad, altura):
        self.__raza = validar_raza(raza, "Sin Raza")
        self.__edad = validar_edad(edad, 0)
        self.__altura = validar_altura(altura, 0.5)

    @property
    def raza(self):
        return self.__raza

    @raza.setter
    def raza(self, raza):
        self.__raza = validar_raza(raza, self.__raza)

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, edad):
        self.__edad = validar_edad(edad, self.__edad)

    @property
    def altura(self):
        return self.__altura

    @altura.setter
    def altura(self, altura):
        self.__altura = validar_altura(altura, self.__altura)

    @staticmethod
    def es_cachorro(edad):
        return edad < 3

    @staticmethod
    def dormir(veces):
        print("Girando...\n" * veces if 0 < veces <= 20 else "Error", end="")

    def ladrar(self, veces=1):
        print(f"{self.__raza} ladrando...\n" * veces if 1 <= veces <= 10 else "Error", end="")

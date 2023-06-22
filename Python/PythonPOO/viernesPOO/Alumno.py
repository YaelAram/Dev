from Persona import Persona


class Alumno(Persona):
    descripcion = "Una persona que dice que estudia pero se la pasa en el cel"

    def __init__(self, nombre, edad, nc, carrera):
        Persona.__init__(self, nombre, edad)
        self.__numero_cuenta = nc
        self.__carrera = carrera

    @property
    def numero_cuenta(self):
        return self.__numero_cuenta

    @numero_cuenta.setter
    def numero_cuenta(self, nc):
        self.__numero_cuenta = nc

    @property
    def carrera(self):
        return self.__carrera

    @carrera.setter
    def carrera(self, carrera):
        self.__carrera = carrera

    def __str__(self):
        return super().__str__() + f", Numero de cuenta: {self.__numero_cuenta}, Carrera: {self.__carrera}"

    def dormir(self):
        print(super().nombre, " está durmiendo como alumno")

    @classmethod
    def constructor_defecto(cls):
        return cls("", 0, "", "")

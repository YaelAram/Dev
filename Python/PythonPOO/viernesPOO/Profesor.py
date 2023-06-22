from Persona import Persona


class Profesor(Persona):
    descripcion = "Una persona que dice que enseña pero se la pasa leyendo artículos de investigación"

    def __init__(self, nombre, edad, num_tra, area):
        Persona.__init__(self, nombre, edad)
        self.__numero_trabajador = num_tra
        self.__area = area

    @property
    def numero_trabajador(self):
        return self.__numero_trabajador

    @numero_trabajador.setter
    def numero_trabajador(self, num_tra):
        self.__numero_trabajador = num_tra

    @property
    def area(self):
        return self.__area

    @area.setter
    def area(self, area):
        self.__area = area

    def __str__(self):
        return super().__str__() + f", Numero de trabajador: {self.__numero_trabajador}, Area: {self.__area}"

    def dormir(self):
        print(super().nombre, " está durmiendo como profesor")

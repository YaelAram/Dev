from Alumno import Alumno
from Profesor import Profesor


class AyudanteProfesor(Alumno, Profesor):
    def __init__(self, nombre, edad, numero_cuenta, carrera, numero_trabajador, area, numero_horas):
        Alumno.__init__(self, nombre, edad, numero_cuenta, carrera)
        Profesor.__init__(self, nombre, edad, numero_trabajador, area)
        self.__horas = numero_horas

    @property
    def horas(self):
        return self.__horas

    @horas.setter
    def horas(self, horas):
        self.__horas = horas

    def __str__(self):
        return f"{Alumno.__str__(self)} - {Profesor.__str__(self)} - {self.__horas}"

    def dar_clase(self, materia):
        print(f"{self.nombre} esta dando clase de {materia} del area {self.area} por {self.__horas} {'horas' if self.__horas > 1 else 'hora'}")

    def dormir(self):
        Alumno.dormir(self)
        Profesor.dormir(self)

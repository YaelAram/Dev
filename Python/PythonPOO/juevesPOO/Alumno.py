from Persona import Persona


class Alumno(Persona):
    def __init__(self, nombre, edad, num_cuenta, carrera, promedio):
        super().__init__(nombre, edad)
        self.__num_cuenta = num_cuenta
        self.__carrera = carrera
        self.__promedio = promedio

    def __str__(self):
        return f"{self.nombre} - {self.edad} - {self.__num_cuenta} - {self.__carrera} - {self.__promedio}"

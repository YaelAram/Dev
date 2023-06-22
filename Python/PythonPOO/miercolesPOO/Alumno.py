class Alumno:
    facultad = "FES Aragón"

    def __init__(self, nombre, edad, carrera):
        self.__nombre = nombre
        self.__edad = edad
        self.__carrera = carrera

    def get_nombre(self):
        return self.__nombre

    def set_nombre(self, nombre='Sin Nombre'):
        if nombre.isalpha() and len(nombre) > 0:
            self.__nombre = nombre.title()

    def get_edad(self):
        return self.__edad

    def set_edad(self, edad=0):
        if 0 <= edad <= 100:
            self.__edad = edad

    def get_carrera(self):
        return self.__carrera

    def set_carrera(self, carrera="Sin Carrera"):
        if carrera.isalpha() and len(carrera) > 0:
            self.__carrera = carrera.title()

    def estudiar(self, horas=1):
        mensaje = f"{self.__nombre} esta estudiando {horas} {'horas' if horas > 1 else 'hora'}" \
            if 0 < horas <= 10 else "Error"
        print(mensaje)

    def __str__(self):
        return f"{self.__nombre} - {self.__edad} - {self.__carrera}"

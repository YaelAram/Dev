class Persona:
    descripcion = "Un ser humano común y corriente"

    def __init__(self, nombre, edad):
        self.__nombre = nombre
        self.__edad = edad

    @property
    def nombre(self):
        return self.__nombre

    @nombre.setter
    def nombre(self, nom):
        self.__nombre = nom

    @property
    def edad(self):
        return self.__edad

    @edad.setter
    def edad(self, ed):
        self.__edad = ed

    def __str__(self):
        return f"Nombre: {self.__nombre} Edad: {self.__edad}"

    def dormir(self):
        print(f"{self.__nombre} durmiendo...")

    @classmethod
    def constructor_defecto(cls):
        return cls("", 0)

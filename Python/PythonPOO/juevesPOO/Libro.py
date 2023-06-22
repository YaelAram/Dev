class Libro:
    def __init__(self, titulo, autor, anio, editorial):
        self.__titulo = titulo
        self.__autor = autor
        self.__anio = anio
        self.__editorial = editorial

    @property
    def titulo(self):
        return self.__titulo

    @titulo.setter
    def titulo(self, titulo):
        self.__titulo = titulo

    @property
    def autor(self):
        return self.__autor

    @autor.setter
    def autor(self, autor):
        self.__autor = autor

    @property
    def anio(self):
        return self.__anio

    @anio.setter
    def anio(self, anio):
        self.__anio = anio

    @property
    def editorial(self):
        return self.__editorial

    @editorial.setter
    def editorial(self, editorial):
        self.__editorial = editorial

    def leer(self, minutos):
        print(f"Leyendo {self.__titulo} por {minutos}...")

    @classmethod
    def libro_planeta(cls, titulo, autor, anio):
        return cls(titulo, autor, anio, "Planeta")

    def __str__(self):
        return f"{self.__titulo} - {self.__autor} - {self.anio} - {self.editorial}"

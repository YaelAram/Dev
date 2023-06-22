from Alumno import Alumno
from AyudanteProfesor import AyudanteProfesor
from PandasPOO import MiDataFrame
from Persona import Persona
from Profesor import Profesor

if __name__ == '__main__':
    print('Persona')
    p1 = Persona("Yael", 23)
    print(p1)
    print(p1.descripcion)

    print("\nAlumno")
    al1 = Alumno("Yael", 23, "123456789", "ICO")
    al2 = Alumno.constructor_defecto()
    print(al1)
    print(al1.descripcion)
    print(al2)
    al2.nombre = "Juan"
    print(al2)
    al2.dormir()

    print("\nProfesor")
    profe1 = Profesor("Jesus", 40, "123456", "ICO")
    print(profe1)
    print(profe1.descripcion)

    print("\nAyudante de Profesor")
    ayudante = AyudanteProfesor("Jorge", 23, "123456789", "ICO", "123456", "Ingenieria", 5)
    print(ayudante)
    ayudante.dormir()
    ayudante.dar_clase("POO")

    print("\nPandas")
    datos = {
        'A': [24.0, 33.2, 30.2, 29.4, 29.3],
        'B': [34.0, 30.2, 31.2, 29.4, 29.3]
    }
    df = MiDataFrame(datos)
    print(df.prom_columnas())
    print(df.obtener_maximo())

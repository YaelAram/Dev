from Alumno import Alumno
from Perro import Perro

if __name__ == '__main__':
    yael = Alumno("Yael", 23, "ICO")
    print(vars(yael))
    yael.set_nombre("Yael Aram")
    print(yael.get_nombre())

    print("\nToString")
    print(yael)
    yael.set_edad(999)
    print(yael)
    yael.estudiar(80)
    yael.estudiar(5)

    print("\nPerro")
    labrador = Perro("    labrado  ", 2, 1.2)
    print(vars(labrador))
    labrador.ladrar(5)
    print(labrador.raza)
    labrador.raza = "labrador"
    print(vars(labrador))
    Perro.es_cachorro(labrador.edad)
    Perro.dormir(5)

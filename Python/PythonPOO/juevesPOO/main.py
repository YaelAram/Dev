from Alumno import Alumno
from Autor import Autor
from Libro import Libro


if __name__ == '__main__':
    print("Libros")
    libro = Libro("El principe", Autor("Nicolas Maquiavelo", "Sin seudonimo"), 1532, "Sin Editorial")
    libro_planeta = Libro.libro_planeta("Poemas", Autor("Desconocido", "Sin seudonimo"), 2000)
    print(libro)
    print(libro_planeta)
    libro.titulo = libro.titulo.upper()
    print(libro)

    print("\nAlumnos")
    yael = Alumno("Juan", 23, "235689741", "ICO", 9.6)
    print(yael)
    yael.nombre = "Yael"
    print(yael)

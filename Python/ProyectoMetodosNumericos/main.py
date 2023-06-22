import os
from model.interpolacion_lineal import iniciar_lineal
from model.interpolacion_cuadratica import iniciar_cuadratica
from model.interpolacion_lagrange import iniciar_lagrange
from model.minimos_cuadrados import iniciar_minimos
from tools.ayuda import ayuda


def mostrar_menu(modo):
    formato_num, formato_texto = "\033[1;32m", "\033[0;37m"
    secciones = [". Interpolacion Lineal", ". Interpolacion Cuadratica", ". Interpolacion Polinomio de Lagrange",
                 ". Minimos Cuadrados", ". Salir\n"]
    os.system("cls")
    print("Proyecto Metodos Numericos 3.0\n"
          "Castillo Sanchez Yael Aram - Hernandez Soledad Angel Agustin - Garcia Cordova Montse\n\n"
          "https://github.com/YaelAram/Proyecto_Metodos_Numericos\n\n"
          "Escribe 'ayuda' para obtener ayuda o 'asistir' para entrar en modo asistido.\n\n"
          "Seleccione una opcion:\n")
    for i, seccion in enumerate(secciones):
        if modo:
            print(formato_num + f"{i + 1}" + formato_texto + seccion)
        else:
            print(f"{i + 1}{seccion}")
    if modo:
        print("Ingresa el numero de seccion aqui, este esta indicado en color verde. \n"
              "         ↓")


def main():
    preguntar, modo = True, False
    while True:
        mostrar_menu(modo)
        opcion = input("Opcion: ")
        if opcion == "1":
            iniciar_lineal(modo)
        elif opcion == "2":
            iniciar_cuadratica(modo)
        elif opcion == "3":
            iniciar_lagrange(modo)
        elif opcion == "4":
            iniciar_minimos(modo)
        elif opcion == "5":
            print("\nSaliendo...")
            break
        else:
            if opcion.lower() == "ayuda":
                ayuda()
            elif opcion.lower() == "asistir":
                modo = not modo
                preguntar = False
            else:
                print(f"\nComando {opcion} no reconocido.")
        if preguntar:
            print()
            if modo:
                print("Si deseas regresar al menu principal ingresa un '1' aqui"
                      "\n                                        ↓")
            if int(input("¿Deseas ingresar a otra seccion? (1/0): ")) != 1:
                break
        else:
            preguntar = True


if __name__ == '__main__':
    main()

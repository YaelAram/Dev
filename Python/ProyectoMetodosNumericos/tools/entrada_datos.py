def ingresar_datos(iteraciones):
    print("\nIngresando datos...\n")
    datos = [[], []]
    for i in range(iteraciones):
        punto = input(f"P_{i}: ").split()
        if len(punto) == 2:
            datos[0].append(float(punto[0]))
            datos[1].append(float(punto[1]))
        else:
            print("Formato de entrada erroneo.")
            break
    return datos


def ingresar_consultas():
    print(f"\nIngresando consultas....\n")
    consultas = []
    for consulta in input("Consultas: ").split():
        consultas.append(float(consulta))
    return consultas



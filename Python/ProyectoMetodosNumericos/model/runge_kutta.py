from decimal import *
getcontext().prec = 128


def evaluar(x, y):
    return ((3 * x) + 8) / (y - 1)


def crear_k(xi, yi, h):
    h_2 = h / 2
    k1 = evaluar(xi, yi)
    k2 = evaluar(xi + h_2, yi + (h_2 * k1))
    k3 = evaluar(xi + h_2, yi + (h_2 * k2))
    k4 = evaluar(xi + h, yi + (h * k3))
    return k1, k2, k3, k4


def iniciar_runge_kutta():
    print("\nMetodo de Runge - Kutta\n")
    xi, yi, h = Decimal(input("Xi: ")), Decimal(input("Yi: ")), Decimal(input("h: "))
    iteraciones = int(input("\nNumero de puntos: "))
    print(f"\nPuntos:\n\nP_0 = ({xi}, {yi})")
    for i in range(iteraciones):
        k1, k2, k3, k4 = crear_k(xi, yi, h)
        print(f"\nK1: {k1} \nK2: {k2} \nk3: {k3} \nK4: {k4}")
        xi += h
        yi = yi + ((h / 6) * (k1 + (2 * k2) + (2 * k3) + k4))
        print(f"P_{i + 1} = ({xi}, {yi})")


if __name__ == "__main__":
    iniciar_runge_kutta()



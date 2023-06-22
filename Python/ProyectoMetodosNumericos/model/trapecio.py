from decimal import *
import math
getcontext().prec = 128
iterations = 100_000_000


def evaluate(x):
    return Decimal(((8 * x) + 1) / ((4 * (x ** 2)) + x))


def calculate(a, b, delta):
    result = evaluate(a) + evaluate(b)
    for i in range(iterations - 1):
        result += (2 * evaluate(a + ((i + 1) * delta)))
    return result * (delta / 2)


def iniciar_simpson():
    print("Metodo del Trapecio \n")
    a, b = Decimal(input("Limite inferior: ")), Decimal(input("Limite superior: "))
    delta = (b - a) / iterations
    print(f"\nResultado:    {calculate(a, b, delta)}")


if __name__ == '__main__':
    iniciar_simpson()

from decimal import *
import math
getcontext().prec = 128
iterations = 100_000_000


def evaluate(x):
    return Decimal(((8 * x) + 1) / ((4 * (x ** 2)) + x))


def get_simpson_1_3(a, delta):
    plus = Decimal("0.0")
    for i in range(4):
        if i != 0 or i != 3:
            plus += (3 * evaluate(a + (delta * i)))
        else:
            plus += evaluate(a + (delta * i))
    return delta * Decimal(3/8) * plus


def get_simpson_3_8(a, delta):
    plus = evaluate(a + (3 * delta)) + evaluate(a + (iterations * delta))
    for i in range(4, iterations):
        if (i + 1) % 2 == 0:
            plus += 2 * evaluate(a + (i * delta))
        else:
            plus += 4 * evaluate(a + (i * delta))
    return delta * Decimal(1/3) * plus


def iniciar_simpson():
    print("Metodo de Simpson \n")
    a, b = Decimal(input("Limite inferior: ")), Decimal(input("Limite superior: "))
    delta = (b - a) / iterations
    result = get_simpson_1_3(a, delta) + get_simpson_3_8(a, delta)
    print(f"\nResultado:    {result}")


if __name__ == '__main__':
    iniciar_simpson()

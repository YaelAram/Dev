from decimal import *
from io import open
import time


def bin_rep(number, iteration):
    value, binary_str, i, copy = Decimal("0.5"), "", 0, number
    while i < iteration:
        if number == value:
            binary_str += "1"
            break
        elif number > value:
            binary_str += "1"
            number -= value
        else:
            binary_str += "0"
        value *= Decimal("0.5")
        i += 1
        if binary_str[-1] == "1" and dec_rep(binary_str) > copy:
            binary_str = binary_str[:len(binary_str) - 1]
            break
    return binary_str


def dec_rep(binary_str):
    value, decimal = Decimal("0.5"), Decimal("0.0")
    for char in binary_str:
        if char == "1":
            decimal += value
        value *= Decimal("0.5")
    return decimal


def get_delta(true_value, value):
    return (true_value - dec_rep(value))/true_value


if __name__ == '__main__':
    start_time = time.time()
    getcontext().prec = 64
    dec_value, iterations = Decimal(input("Decimal value: ")), int(input("Limit: "))
    binary = bin_rep(dec_value, iterations)
    delta = get_delta(dec_value, binary)
    print(f"Binary: {binary}")
    print(f"Decimal: {dec_rep(binary)}")
    print(f"Delta: {delta}")
    print(f"Delta (%): {delta*100}%")
    print(f"Time: {time.time() - start_time}")
    file = open("number.txt", "w")
    file.write("Binary:\n\n" + binary +
               "\n\nDecimal (Original): " + str(dec_value) +
               "\n\nDecimal (Approximation): " + str(dec_rep(binary)) +
               "\n\nDelta: " + str(delta) +
               "\n\nDelta (%): " + str(delta*100))
    file.close()

valores_bin_hex = {
    "0000": "0", "0001": "1", "0010": "2", "0011": "3",
    "0100": "4", "0101": "5", "0110": "6", "0111": "7",
    "1000": "8", "1001": "9", "1010": "A", "1011": "B",
    "1100": "C", "1101": "D", "1110": "E", "1111": "F"
}

valores_bin_oct = {
    "000": "0", "001": "1", "010": "2", "011": "3", "100": "4", "101": "5", "110": "6", "111": "7"
}


def buscar_hex(num_hex):
    return valores_bin_hex[num_hex]


def buscar_oct(num_oct):
    return valores_bin_oct[num_oct]


def a_dec(str_bin):
    resultado = 0
    for i, char in enumerate(str_bin):
        if char == "1":
            resultado += 2 ** (len(str_bin) - 1 - i)
    return resultado


def a_oct(str_oct):
    resultado_oct = ""
    for i in range(int(len(str_oct) / 3)):
        resultado_oct += buscar_oct(str_oct[(3 * i):(3 * (i + 1))])
    return resultado_oct


def a_hex(str_hex):
    resultado_hex = ""
    for i in range(int(len(str_hex) / 4)):
        resultado_hex += buscar_hex(str_hex[(4 * i):(4 * (i + 1))])
    return resultado_hex


def main():
    while True:
        cadena, cadena_hex, cadena_oct = input("Ingresa el numero binario: "), "", ""
        cadena_hex = cadena if (len(cadena) % 4) == 0 else ("0" * (4 - (len(cadena) % 4))) + cadena
        cadena_oct = cadena if (len(cadena) % 3) == 0 else ("0" * (3 - (len(cadena) % 3))) + cadena
        print(f"Representación Binaria: {cadena}")
        print(f"Representación Octal: {a_oct(cadena_oct)}")
        print(f"Representación Hexadecimal: {a_hex(cadena_hex)}")
        print(f"Representación Decimal: {a_dec(cadena)}")
        respuesta = input("¿Deseas realizar un nuevo calculo? (S/N): ").upper()
        if respuesta != "S":
            break
        print("\n==============================================\n")


if __name__ == '__main__':
    main()

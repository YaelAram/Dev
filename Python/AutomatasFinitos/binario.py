def reducer(estado="", tape_caracter=""):
    nuevo_estado = ""
    if (estado == "Q0" or estado == "Q2") and tape_caracter == "1":
        nuevo_estado = "Q0"
    elif (estado == "Q0" or estado == "Q1" or estado == "Q2") and tape_caracter == "0":
        nuevo_estado = "Q1"
    elif estado == "Q1" and tape_caracter == "1":
        nuevo_estado = "Q2"
    print(f"S({estado}, {tape_caracter}) = {nuevo_estado}")
    return nuevo_estado


def validar(tape=""):
    caracteres = list(tape)
    return (caracteres.count("0") + caracteres.count("1")) == len(tape)


def binario(tape=""):
    if validar(tape):
        estado = "Q0"
        for caracter in tape:
            estado = reducer(estado, caracter)
        print(f"\n∴Tape {'∈' if estado == 'Q2' else '∉'} L(G)")
    else:
        print("La cadena debe contener unicamente 0's y 1's")

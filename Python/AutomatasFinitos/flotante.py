def reducer(estado="", tape_caracter=""):
    nuevo_estado = ""
    if (estado == "A" or estado == "I") and tape_caracter.isdigit():
        nuevo_estado = "A"
    elif estado == "A" and tape_caracter == ".":
        nuevo_estado = "B"
    elif (estado == "B" or estado == "C") and tape_caracter.isdigit():
        nuevo_estado = "C"
    else:
        nuevo_estado = "D"
    print(f"S({estado}, {tape_caracter}) = {nuevo_estado}")
    return nuevo_estado


def flotante(tape=""):
    if not tape.replace(".", "1", 1).isdigit() or float(tape) < 0:
        print("El tape no esta compuesto unicamente por numeros y ser positivo")
    else:
        estado = "I"
        for caracter in tape:
            estado = reducer(estado, caracter)
            if estado == "D":
                break
        print(f"\n∴Tape {'∈' if estado == 'C' else '∉'} L(G)")

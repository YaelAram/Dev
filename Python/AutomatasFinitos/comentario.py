def reducer(estado="", tape_caracter=""):
    nuevo_estado = ""
    if estado == "I" and tape_caracter == "/":
        nuevo_estado = "A"
    elif (estado == "A" and tape_caracter == "*") or (estado == "C" and tape_caracter != "/"):
        nuevo_estado = "B"
    elif estado == "B" and tape_caracter == "*":
        nuevo_estado = "C"
    elif estado == "B" and tape_caracter != "*":
        nuevo_estado = estado
    elif estado == "C" and tape_caracter == "/":
        nuevo_estado = "D"
    else:
        nuevo_estado = "E"
    print(f"S({estado}, {tape_caracter}) = {nuevo_estado}")
    return nuevo_estado


def comentario(tape=""):
    estado = "I"
    for caracter in tape:
        estado = reducer(estado, caracter)
        if estado == "E":
            break
    print(f"\n∴Tape {'∈' if estado == 'D' else '∉'} L(G)")

def reducer(estado="", tape_caracter=""):
    nuevo_estado = ""
    if estado == "A" and tape_caracter.isalnum():
        nuevo_estado = "B"
    elif (estado == "A" or estado == "B") and (not tape_caracter.isalnum()):
        nuevo_estado = "C"
    elif estado == "B" and tape_caracter.isalnum():
        nuevo_estado = estado
    print(f"S({estado}, {tape_caracter}) = {nuevo_estado}")
    return nuevo_estado


def alfanumerico(tape=""):
    estado = "A"
    for caracter in tape:
        estado = reducer(estado, caracter)
        if estado == "C":
            break
    print(f"\n∴Tape {'∈' if estado == 'B' else '∉'} L(G)")

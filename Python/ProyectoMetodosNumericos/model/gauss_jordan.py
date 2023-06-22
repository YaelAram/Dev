def calcular_gauss_jordan(datos, filas, columnas):
    resultados = []
    for i in range(filas):
        aux = datos[i][i]
        for j in range(columnas):
            if aux != 0.0:
                datos[i][j] /= aux
        for k in range(filas):
            mul = datos[k][i]
            for l in range(columnas):
                if k != i:
                    datos[k][l] -= (mul * datos[i][l])
    for i in range(filas):
        resultados.append(datos[i][-1])
    return resultados

import numpy as np
from collections import Counter
from statistics import quantiles


def media_recortada(db, porcentaje):
    ajuste = int(porcentaje / (100.0 / len(db)))
    return np.mean(db[ajuste:len(db) - ajuste])


def main():
    datos = [76.2, 76.09, 75.98, 76.15, 76.17, 75.94, 76.12, 76.18, 76.25, 75.82]
    datos.sort()
    db = np.array(datos)
    percentiles = quantiles(db, n=100)
    print(f"{db}\nMedia: {np.mean(db)}\nMedia recortada (5%): {media_recortada(db, 5)}"
          f"\nMedia recortada (10%): {media_recortada(db, 10)}\nMediana: {np.median(db)}"
          f"\nModa: {Counter(db).most_common(1)[0][0]}\nMinimo: {db[0]}"
          f"\nMaximo: {db[-1]}\nRango: {db[-1] - db[0]}\nVarianza: {np.var(db)}"
          f"\nDesviación Estandard: {np.std(db)}\nDecil (24): {percentiles[23]}\nTercer cuartil: {percentiles[74]}"
          f"\nNueve deciles: {percentiles[89]}\nLongitud: {len(db)}")


if __name__ == '__main__':
    main()

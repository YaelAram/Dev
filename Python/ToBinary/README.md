# Proyecto: RealNumber

Permite obtener la representación binaria de la
parte decimal de un número

## Funcionamiento

El funcionamiento básico del programa es el
siguiente:

1. Ingresar la parte decimal a convertir
2. Ingresar el número de iteraciones a realizar
3. El programa muestra la representación binaria e información relevante

### Notas sobre el funcionamiento

* Mientras mayor sea el número de iteraciones la representación binaria sera más exacta
* Los diálogos del programa están en ingles
* El programa genera el archivo number.txt con el número binario y otros datos relevantes generados (los generados en la segunda parte del ejemplo de funcionamiento)
* Se hace uso del tipo de dato [Decimal](https://docs.python.org/3/library/decimal.html) 
* Se estableció el número de precision de 28 (default) a 64

## Ejemplo de funcionamiento

Encontremos la representación binaria de 0.33

En esta primera parte se ingresan los datos con los que funcionara el programa
```
Value: 0.33
Iterations: 20
```
Al dar enter el programa muestra lo siguiente:
```
Binary: 01010100011110101110
Decimal: 0.3299999237060546875
Delta: 2.311937736742424242424242424242424242424242424242424242424242424E-7
Delta (%): 0.00002311937736742424242424242424242424242424242424242424242424242424%
```

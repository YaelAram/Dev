# Proyecto de Métodos Numéricos

Este proyecto fue desarrollado utilizando Python 3.10.0 y el IDE PyCharm, para su correcto funcionamiento se
recomienda el uso de la terminal de Windows (cmd o PowerShell), para más información consultar la sección 1 y 2.

## Tabla de Contenidos
1. [Requisitos Previos](#requisitos-previos)
2. [Iniciar el Programa](#iniciar-el-programa)
3. [Menú Principal](#menu-principal)
4. [Interpolación Lineal](#interpolacion-lineal)
5. [Interpolación Cuadratica](#interpolacion-cuadratica)
6. [Método de Minimos Cuadrados](#metodo-de-minimos-cuadrados)

## Requisitos Previos

1. Tener instalado Python, lo puedes descargar desde la [página oficial](https://www.python.org/downloads/).

## Iniciar el Programa

Para iniciar el script siga las siguientes indicaciones:

1. Abrir un nuevo terminal
   - Presiona Windows + R
   - Escribe 'cmd'
   - Presiona Enter

**Nota:** También puedes utilizar la terminal PowerShell la cual puedes obtener de forma gratuita en la Microsoft Store 
de Windows 10 o Windows 11.

2. Situar la terminal en el directorio donde descargo el proyecto e ingresar al directorio del mismo, en caso de haber
clonado el repositorio puede evitar escribir '-master' en el nombre del directorio.
```
cd [path]/Proyecto_Metodos_Numericos-master
```

**Nota:** Una alternativa al paso 1 y 2 es abrir el explorador de Windows y buscar la ruta donde se descargó el proyecto
abrir la carpeta, dar clic derecho y buscar en el menu contextual la opcion 'Abrir terminal aquí'.

2. Escribir el siguiente comando y presionar ENTER:
```
py main.py
```

## Menu Principal 

Esta sección es la primera que el usuario puede ver dentro del
sistema, a partir de esta el usuario puede navegar por
las diferentes secciones del sistema.

```
Proyecto Metodos Numericos 3.0
Castillo Sanchez Yael Aram - Hernandez Soledad Angel Agustin - Garcia Cordova Montse

https://github.com/YaelAram/Proyecto_Metodos_Numericos

Escribe 'ayuda' para obtener ayuda.

Seleccione una opcion:

1. Interpolacion Lineal
2. Interpolacion Cuadratica
3. Interpolacion Polinomio de Lagrange
4. Minimos Cuadrados
5. Salir

Opcion:
```

Para facilitar al usuario regresar a esta página web puede usar el link 
que se encuentra en la parte superior.

### Navegar a otra sección

El usuario debe ingresar el número de seccion a la que desea ingresar:

#### Ejemplo

Supongamos que el usuario desea ingresar a la sección de Interpolación 
lineal, debe ingresar el número '1' en el apartado 'Opcion':

```
Opcion: 1
```

### Regresar al menú principal

Al final de cada sección se le presenta al usuario la opción de regresar 
al menú principal como el siguiente:

```
¿Deseas ingresar a otra seccion? (1/0):
```

Si el usuario desea continuar debe ingresar '1', de lo contrario el 
programa termina en ese momento.

```
¿Deseas ingresar a otra seccion? (1/0): 1
```

Al presionar ENTER el sistema vuelve a mostrar el menú principal.

## Interpolacion Lineal

Este módulo permite realizar interpolación lineal a tablas
con n datos asi como obtener los valores de n consultas y 
ecuaciones de rectas.

### Ejemplo

Supongamos que tenemos los siguientes datos:

Año | 0 | 5 | 10 | 20 | 30
--- | --- | --- | --- |--- |--- 
Población | 958 | ? | 1204 | 1456 | ?

Ingresando la longitud, en este caso contamos con 3 registros:

```
Longitug: 3
```
Posteriormente, ingresaremos los registros con los que contamos
para separar el valor de la fila Año y Población simplemente
añade un espacio (" ") entre ellos:
```
Ingresando datos...

P_0: 0 958
P_1: 10 1204
P_2: 20 1456
```

Ahora comenzaremos por ingresar las consultas, al igual que con
el punto anterior, separa cada consulta con un espacio (" "),
puedes ingresar tantas consultas como desees.

```
Ingresando consultas....

Consultas: 5 10 30
```
Las consultas pueden detonar alguno de los siguientes dos casos:
#### Interpolación y Extrapolación
```
Recta: y(x) =  24.6x + 958.0
y(5.0): 1081.0

Recta: y(x) =  24.9x + 958.0
y(30.0): 1705.0
```

#### Consulta que coincide con un dato ya existente

```
y(10.0): 1204.0
```

## Interpolacion Cuadratica

Este módulo permite realizar interpolación cuadratica a tablas 
con 3 datos asi como obtener los valores de n consultas y la
ecuación del polinomio, internamente el sistema utiliza el método
de Gauss Jordan para obtener los resultados del sistema de 
ecuaciones que requiere este método.

### Ejemplo

Supongamos que tenemos los siguientes datos:

X | -1 | 0 | 2 | 3 
--- | --- | --- | --- |--- 
Y | 6 | ? | 3 | 10 

Ingresaremos los registros con los que contamos para separar el 
valor de la fila X e Y simplemente añade un espacio (" ") entre 
ellos:

```
Ingresando datos....

P_0: -1 6
P_1: 2 3
P_2: 3 10
```

Ahora comenzaremos por ingresar las consultas, al igual que con 
el punto anterior, separa cada consulta con un espacio (" "), 
puedes ingresar tantas consultas como desees.

```
Consultas: 0
```

Ahora el sistema muestra la ecuacion de la parabola además del 
resultado de cada consulta:

```
Funcion = y(x) =  2.0x^2 - 3.0x + 1.0
y(0.0) = 1.0
```

## Interpolacion por Polinomio de Lagrange

Este módulo permite realizar interpolación por polinomio de 
Lagrange a tablas con 3 o 4 datos asi como obtener los valores de 
n consultas y la ecuación del polinomio.

### Ejemplo

Supongamos que tenemos los siguientes datos:

X | 1 | 2 | 3 | 4 | 5
--- | --- | --- | --- |--- |---
Y | -5 | -4 | -1 | 4 | ?

Ingresaremos los registros con los que contamos para separar 
el valor de la fila X e Y simplemente añade un espacio (" ") 
entre ellos:

```
Ingresando datos...

P_0: 1 -5
P_1: 2 -4
P_2: 3 -1
P_3: 4 4
```

Ahora comenzaremos por ingresar las consultas, al igual que con 
el punto anterior, separa cada consulta con un espacio (" "), 
puedes ingresar tantas consultas como desees.

```
Consultas: 5
```

Ahora el sistema nos muestra el resultado siguiente:

```
Ecuacion:  x^2 - 2.0000000000000027x - 4.0
y(5.0) = 10.999999999999986
```

## Metodo de Minimos Cuadrados

Este módulo permite aplicar el método de minimos cuadrados a
tablas con n datos asi como obtener los valores de n consultas 
y la ecuacion de la recta.

### Ejemplo

Supongamos que tenemos los siguientes datos:

X | 1 | 2 | 3 | 4 | 5
--- | --- | --- | --- |--- |---
Y | 1.5 | 2 | 4 | 4.6 | ?

Ingresaremos los registros con los que contamos para separar 
el valor de la fila X e Y simplemente añade un espacio (" ") 
entre ellos:

```
Ingresando datos...

P_0: 1 1.5
P_1: 2 2
P_2: 3 4
P_3: 4 4.6
```

Ahora comenzaremos por ingresar las consultas, al igual que con 
el punto anterior, separa cada consulta con un espacio (" "), 
puedes ingresar tantas consultas como desees.

```
Consultas: 5
```

Por último el sistema nos muestra los resultados:

```
Resultados:

Coeficiente de correlacion lineal: 0.9684330908675777
Beta: 0.4230000000000003
Ecuacion: y(x) =  1.1299999999999997x + 0.2

Consultas:

y(5.0) = 5.849999999999999
```

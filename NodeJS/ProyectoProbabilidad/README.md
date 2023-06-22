# Proyecto Probabilidad y Estadistica: Clasificador Ingenuo De Bayes

Aplicación de consola construida con JavaScript que mediante el uso de MongoDB obtiene la información estadistica
necesaria para la creación de un Clasificador Ingenuo de Bayes.

## Problematica
Se desea diseñar un sistema el cual a partir de la edad de una persona aleatoria y la temperatura actual calcule 
la probabilidad de que esta elija una bebida fria o caliente con base a los registros creados luego de 1,000 experimentos.

El registro de estos experimentos es un archivo CSV que debe ser importado a nuestra Base de Datos en MongoDB, puede verse
un ejemplo del archivo de registros [aqui](data.csv).

En nuestro caso, la importación de datos se realiza mediante MongoDBCompass, a su vez este se conecta a nuestra base de
datos en la nube creada en Mongo Atlas, por tanto, se debe crear un archivo .env con el link de conexion a nuestra 
base de datos (_este es generado en Mongo Atlas_), nuestro usuario y contraseña. Consulta el nombre la variable de entorno
[aqui](.env.production.referencia).

El schema de MongoDB es el siguiente:

```
const costomerSchema = Schema( {
    value: {
        type: Number,
        required: [ true, 'Value field required' ]
    },
    age: {
        type: Number,
        required: [ true, 'Age field required' ]
    },
    temperature: {
        type: Number,
        required: [ true, 'Temperature field required' ]
    },
    drink: {
        type: Number,
        required: [ true, 'Drink field required' ]
    }
} );
```

Donde:
- value: Es el campo que guarda el numero de registro.
- age: Es la edad del cliente.
    - Menor: age < 18 { 0 }
    - Adulto: 18 >= age < 60 { 1 }
    - Mayor: age > 60 { 2 }
- temperature: La temperatura del entorno en ese momento, ( Celcius ).
    - Frio: temperature <= 10 { 0 }
    - Templado: 10 > temperature < 20 { 1 }
    - Calido: temperature => 20 { 2 }
- drink: El tipo de bebida que el usuario eligio.
    - Fria { 0 }
    - Caliente { 1 }

**Nota: Los registros sufren una modificación en su valor para los atributos _age_ y _temperature_, donde, dependiendo
de su valor obtendran el valor que se encuentra dentro de las llaves.**

#### Ejemplo

```
{
    value: 0,
    age: 18,
    temperature: 21,
    drink: 0
}
```

Se convierte a:

```
{
    value: 0,
    age: 1,
    temperature: 2,
    drink: 0
}
```

## Creación del Clasificador Ingenuo

### Paso 1

Obtenemos la probabilidad de que el cliente elija una bebida fria y la probabilidad de que un cliente elija una bebida
fria.

```
const getColdHotDrinkProbability = async () => {
    const cold = ( await Costumer.find( { drink: 0 } ) ).length / LIMIT;
    const hot = 1.0 - cold;
    coldHotProbability.push( cold, hot );
    return true;
};
```

Para ello consultamos el total de usuario que eligieron una bebida fria ( drink debe tener el valor de 0 ), luego con 
el atributo length obtenemos el numero de usuarios, por último, dividimos entre la variable LIMIT, la cual contiene 
el numero de registros presentes en la base de datos.

La probabilidad de que elija una bebida caliente se obtiene de la resta: 1.0 - la probabilidad de que elija una bebida
fria.

**Nota: LIMIT se calcula al inicio de la ejecución del script por lo que si se agregan registros desde una herramienta
extar _esta no se actualizara al nuevo numero de registros_.**

**Nota: La variable coldHotProbability es una variable global de tipo Array ahi almacenamos los datos creados
en este paso**

### Paso 2

Obtener la probabilidad conjunta para cada combinacion de los valores de _age_ y _temperature_.

```
const getDistributionXY = async () => {
    for( const i of [ 0, 1, 2 ] ){
        const temperatures = [];
        for( const j of [ 0, 1, 2 ] ){
            const people = ( await Costumer.find( { age: i, temperature: j } ) ).length;
            temperatures.push( people / LIMIT );
        }
        distributionXY.push( temperatures );
    }

    return true;
};
```

Para ello obtenemos los clientes que eligieron cada una de las posibles combinaciones, luego con el atributo length 
obtenemos el numero de usuarios, por último, dividimos este entre nuestra variable LIMIT.

**Nota: La variable distributionXY es una variable global de tipo Array ahi almacenamos los datos creados
en este paso**

## Paso 3

Obtener la probabilidad condicional de P( age ∩ temperature | drink ).

```
const getDistributionXYZ = async () => {
    for( const i of AGE_VALUES ){
        const temperatures = [], temperatures2 = [];
        for( const j of TEMPERATURE_VALUES ){
            const drinks = [], drinks2 = [];
            for( const k of DRINK_VALUES ){
                const people = ( await Costumer.find( { age: i, temperature: j, drink: k } ) ).length / LIMIT;
                drinks.push( people );
                drinks2.push( people / coldHotProbability[ k ] );
            }
            temperatures.push( drinks );
            temperatures2.push( drinks2 );
        }
        distributionXYZ.push( temperatures );
        likeliHoodXY_Z.push( temperatures2 );
    }
    return true;
};
```

Calculamos la probabilidad que hay para cada una de las posibles combinacion de age, temperature y drink, esta la 
guardamos en la variable distributionXYZ.

Con el mismo valor calculado, lo dividimos entre la probabilidad de una bebida fria o caliente ( Paso 1 ), segun 
la combinación de la iteración, esta la guardamos en la variable likeliHoodXY_Z.

**Nota: La variable distributionXYZ es una variable global de tipo Array ahi almacenamos los datos creados
en este paso**

**Nota: La variable likeliHoodXY_Z es una variable global de tipo Array ahi almacenamos los datos creados
en este paso**

## Paso 4

Con los datos creados hasta el momento estamos listos para recibir consultas y predecir la mejor bebida para el cliente.

Para ello, solo debemos obtener del usuario los datos a consultar, en este cado el valor de age y temperature.

```
const getProbabilityBayes = async ( x, y ) => {
    const probabilityCold = ( coldHotProbability[ 0 ] * likeliHoodXY_Z[ x ][ y ][ 0 ] ) / distributionXY[ x ][ y ];
    printBayesProbability( x, y, 0, probabilityCold );
    printBayesProbability( x, y, 1, ( 1.0 - probabilityCold ) );

    if( probabilityCold > 0.5 ) console.log( '\nLa sugerencia es una bebida: Fria' );
    else if( probabilityCold < 0.5 ) console.log( '\nLa sugerencia es una bebida: Caliente' );
    else console.log( '\nLa sugerencia es una bebida: Ambas son igual de apropiadas' );

    return true;
};
```

En este paso se calculan la probababilidad de que sea mas apropiada ofrecer una bebida fria, la probabilidad de que sea 
mas apropiada una bebida caliente se calcula a partir de la resta de 1.0 - la probababilidad de que sea mas apropiada 
ofrecer una bebida fria, comparamos si la probababilidad de que sea mas apropiada ofrecer una bebida fria es mayor a 0.5
de ser asi se ofrecera una bebida fria, sino, comparamos si la probababilidad de que sea mas apropiada ofrecer una bebida 
fria es menor a 0.5 de ser asi se ofrecera una bebida caliente, sino, mostramos que ambas opciones son igual de 
apropiadas.

## Ejemplo

Este ejemplo se realiza con los datos que se encuentran [aqui](./data.csv).

Previo a iniciar nuestra aplicacion debemos importar los datos de nuestro archivo CSV en nuestra base de datos.

Iniciamos la aplicacion con el siguiente comando, debemos situarnos en el mismo directorio que el archivo app.js:

```
node app
```

Lo que nos muestra el siguiente mensaje, durante este tiempo el script esta calculando lo visto en la sección anterior:

```
Por favor espera un momento, procesando informacion...
```

Una vez haya terminado este proceso, mostrara el siguiente menu, puedes usar las teclas de dirección o teclear
el numero de la opción a la que deseas ingresar:

```
=======================================
       Selecciona una opción:
=======================================

? Selecciona una opcion: (Use arrow keys)
> 1. Recomendar Bebida
  2. Mostrar los Primeros y Ultimos 5 registros
  3. Mostrar Probabilidad de Bebida Fria o Caliente P( Z )
  4. Mostrar la Probabilidad de P( X ∩ Y )
  5. Mostrar la Probabilidad de P( X ∩ Y ∩ Z )
  6. Mostrar la Probabilidad de P( X ∩ Y | Z )
  7. Salir
```

### Opción 1

Nos muestra el siguiente menu, en este debemos elegir en que clasificación de edad se encuentra el cliente, por ejemplo,
seleccionemos la opción 'Mayor':

```
? Selecciona una opcion: 1. Recomendar Bebida
? Selecciona una opcion:
  1. Menor
  2. Adulto
> 3. Mayor
```

Ahora el siguiente menu, en este debemos elegir en que clasificación de temperatura del clima actual, por ejemplo,
seleccionemos la opción 'Frio':

```
? Selecciona una opcion: 1. Recomendar Bebida
? Selecciona una opcion: 3. Mayor
? Selecciona una opcion: (Use arrow keys)
> 1. Frio
  2. Templado
  3. Calido
```

Por último, se muestran los resultados:

```
? Selecciona una opcion: 1. Recomendar Bebida
? Selecciona una opcion: 3. Mayor
? Selecciona una opcion: 1. Frio

  P( fria | mayor ∩ frio ): 0.1038961038961039

  P( caliente | mayor ∩ frio ): 0.8961038961038961

  La sugerencia es una bebida: Caliente
```

### Opción 2

Muestra lo siguiente:

```
Primeros 5 registros
┌──────────────────────────────────────┐
│ (index) │ value │ age │ temperature │ drink │
├──────────────────────────────────────┤
│    0    │   0   │  0  │      1      │   0   │
│    1    │   1   │  0  │      1      │   0   │
│    2    │   2   │  1  │      1      │   1   │
│    3    │   3   │  1  │      1      │   0   │
│    4    │   4   │  1  │      2      │   1   │
└──────────────────────────────────────┘

Ultimos 5 registros
┌──────────────────────────────────────┐
│ (index) │ value │ age │ temperature │ drink │
├──────────────────────────────────────┤
│    0    │  995  │  0  │      1      │   0   │
│    1    │  996  │  1  │      1      │   1   │
│    2    │  997  │  2  │      0      │   1   │
│    3    │  998  │  2  │      0      │   1   │
│    4    │  999  │  1  │      0      │   0   │
└──────────────────────────────────────┘
```

### Opción 3

Muestra lo siguiente, son los datos guardados en el paso 1 de la sección anterior:

```
  P( fria ) = 0.339
  P( caliente ) = 0.661
```

### Opción 4

Muestra lo siguiente, son los datos guardados en el paso 2 de la sección anterior:

```
  P( menor ∩ frio ): 0.036
  P( menor ∩ templado ): 0.05
  P( menor ∩ calido ): 0.028
  P( adulto ∩ frio ): 0.178
  P( adulto ∩ templado ): 0.309
  P( adulto ∩ calido ): 0.126
  P( mayor ∩ frio ): 0.077
  P( mayor ∩ templado ): 0.133
  P( mayor ∩ calido ): 0.063
```

### Opción 5

Muestra lo siguiente, son los datos guardados en el paso 3 de la sección anterior, variable distributionXYZ:

```
  P( menor ∩ frio ∩ fria ): 0.016
  P( menor ∩ frio ∩ caliente ): 0.02
  P( menor ∩ templado ∩ fria ): 0.047
  P( menor ∩ templado ∩ caliente ): 0.003
  P( menor ∩ calido ∩ fria ): 0.027
  P( menor ∩ calido ∩ caliente ): 0.001
  P( adulto ∩ frio ∩ fria ): 0.043
  P( adulto ∩ frio ∩ caliente ): 0.135
  P( adulto ∩ templado ∩ fria ): 0.11
  P( adulto ∩ templado ∩ caliente ): 0.199
  P( adulto ∩ calido ∩ fria ): 0.061
  P( adulto ∩ calido ∩ caliente ): 0.065
  P( mayor ∩ frio ∩ fria ): 0.008
  P( mayor ∩ frio ∩ caliente ): 0.069
  P( mayor ∩ templado ∩ fria ): 0.014
  P( mayor ∩ templado ∩ caliente ): 0.119
  P( mayor ∩ calido ∩ fria ): 0.013
  P( mayor ∩ calido ∩ caliente ): 0.05
```

### Opción 6

Muestra lo siguiente, son los datos guardados en el paso 3 de la sección anterior, variable likeliHoodXY_Z:

```
  P( menor ∩ frio | fria ): 0.0471976401179941
  P( menor ∩ frio | caliente ): 0.030257186081694403
  P( menor ∩ templado | fria ): 0.13864306784660765
  P( menor ∩ templado | caliente ): 0.0045385779122541605
  P( menor ∩ calido | fria ): 0.07964601769911504
  P( menor ∩ calido | caliente ): 0.0015128593040847202
  P( adulto ∩ frio | fria ): 0.12684365781710913
  P( adulto ∩ frio | caliente ): 0.2042360060514372
  P( adulto ∩ templado | fria ): 0.3244837758112094
  P( adulto ∩ templado | caliente ): 0.3010590015128593
  P( adulto ∩ calido | fria ): 0.1799410029498525
  P( adulto ∩ calido | caliente ): 0.09833585476550681
  P( mayor ∩ frio | fria ): 0.02359882005899705
  P( mayor ∩ frio | caliente ): 0.1043872919818457
  P( mayor ∩ templado | fria ): 0.04129793510324484
  P( mayor ∩ templado | caliente ): 0.18003025718608168
  P( mayor ∩ calido | fria ): 0.0383480825958702
  P( mayor ∩ calido | caliente ): 0.07564296520423601
```

### Opción 7

Finaliza la aplicación, elimina los registros importados a la base de datos, permitiendonos subir nuevos datos, ademas
de cerrar la conexión a la base de datos.

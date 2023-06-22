# Hooks de React

Todos los hooks en react son importantes, sin embargo, la mayoria de estos tienen el proposito de realizar
optimizaciones sobre el rendimiento de la aplicacion mas que el ser necesarios para la construccion de esta,
los hooks mas importantes para la construccion de una aplicacion y por ende los mas comunes son:

* useState
* useEffect
* useReducer

## useState

Este hook nos permite guardar una varible de cualqueir tipo y mediante el metodo setter que este retorna actualizar 
esta variable a la vez que actualizamos la informacion mostrada en pantalla.

Parametros:

* valorInicial: Valor inicial que tendra la variable, si se omite se inicializa como undefined

```
import { useState } from 'react';

export function Counter() {
    const [ counter, setCounter ] = useState( 0 );
    return (
        <h1>Counter: { counter }</h1>
        <input type="button" value="+1" onClick={ () => setCounter( counter + 1 ) } />
    );
};
```

Este componente es un contador que nos permite aumentar en uno el valor actual del contador al dar click sobre el
boton, como se observa el hook useState nos devuelve un Array con dos elementos, donde el primero almacena almacena
el valor actual de la variable (al inicio de la aplicacion obtendra el valor inicial proporcionado al llamar el hook),
el segundo es un funcion setter la cual recibira el nuevo valor de nuestra variable y actualizara la UI para mostrar el 
nuevo valor.

La funcion setter del useState tambien puede recibir un callback que retorne el nuevo valor de la variable, este puede
recibir como parametro el valor anterior de esta.

```
import { useState } from 'react';

export function Counter() {
    const [ counter, setCounter ] = useState( 0 );
    return (
        <h1>Counter: { counter }</h1>
        <input type="button" value="+1" onClick={ () => setCounter( ( prevCounter ) => prevCounter + 1 ) } />
    );
};
```

## useEffect

Este hook nos permite realizar operaciones secundarias dentro de la aplicacion luego de que este se renderizo por primera 
vez y cuando alguna de sus dependencias sufre algun cambio.

Parametros:

* callback: Callback que realizar las operaciones secundarias necesarias, esta puede retornar opcionalmente una funcion
de limpieza que se ejecutara cuando el componente se destruya.
* dependencias: Array que contiene todas las variables de las cuales el hook estara pendiente buscando cambios en estas,
cuando una sufre un cambio el callback se ejecuta de nuevo, si se deja vacio el hook se ejecutara unicamente despues 
de que el componente que la contiene se renderiza por primera vez.

```
import { useEffect, useState } from 'react;

export function Counter() {
    const [ data, setData ] = useState();
    useEffect(
        () => {
            const peticionHTTP = async () => {
                const resp = await fetch( url, options );
                const data = await resp.json();
                setData( data );
            };
            peticionHTTP();
        },
        []
    );

    return (
        <h1>{ JSON.stringify( data ) }</h1>
    );
};
```

Ya que este hook se ejecuta luego de que la aplicacion se renderizo, el contenido de la etiqueta H1 sera undefined, sin 
embargo, la aplicacion por detras esta realizando la peticion HTTP, una vez esta finalizo llama al metodo setter setData
para establecer la informacion y con ello renderizar por segunda vez la aplicacion mostrando dentro del H1 la informacion 
obtenida, puesto que el Array de dependencias esta vacio este hook no se volvera a ejecutar en esta segunda renderizacion.

```
import { useEffect, useState } from 'react;

export function Counter() {
    const [ coords, setCoords ] = useState( { x: 0, y: 0 } );
    useEffect(
        () => {
            const showMouseCoords = ( { x, y } ) => setCoords( { x, y } );
            window.addEventListener( 'mousemove', showMouseCoords );
            return () => {
                window.removeEventListener( 'mousemove', showMouseCoords );
            };
        },
        []
    );

    return (
        <h1>{ JSON.stringify( coords ) }</h1>
    );
};
```

En este ejemplo, en el callback retornamos una funcion de limpieza, una vez el componente se renderiza suscribimos
al objeto window para que escuche la posicion actual del cursor y mediante el hook useState lo muestre en pantalla,
una vez el componente se destruya la funcion retornada elimina esa suscripcion con el fin de evitar tener subprocesos
basura que puedan limitar el rendmiento de la aplicacion.

## useReducer

## useContext

## useRef

Este hook nos permite mantener la referencia de algun elemento HTML, componente o variable, este retorna un objeto con 
el atributo current donde se almacena el objeto referenciado.

```
import { useRef } from 'react;

export function Counter() {
    const inputRef = useRef();

    return (
        <input type="text" ref={ inputRef } />
        <input type="button" value="Send" onClick={ () => console.log( inputRef.current ) } />
    );
};
```

Cada vez que se de click al boton se imprimira en consola el elemento HTML input:text.

## useMemo

Permite memorizar algun valor y mantenerlo luego de que el componente se vuelve a renderizar.

Parametros:

* callback: Funcion que retorna el valor a guardar.
* dependecias: Array de variables que en caso de cambiar provocaran que el callback se vuelva a ejecutar y almacene un
nuevo valor

```
import React, { useState, useMemo } from 'react';

const iterate = ( times ) => {
    for( let i = 0 ; i < times ; i++ ) console.log( `Iterating...` );
    return `For finished: ${ times } iterations`;
};

export function Memorize() {
    const { counter, setCounter } = useState( 5_000 );
    const [ show, setShow ] = useState( false );

    const iterationMessage = useMemo( () => iterate( counter ), [ counter ] );

    const handleOnClick = ( { target } ) => {
        setShow( !show );
        target.value = `Show/Hide ${ JSON.stringify( show ) }`;
    };

    return (
        <React.Fragment>
            <h1>Counter: { counter }</h1>
            <h4>{ iterationMessage }</h4>
            <input type="button" value="+1" onClick={ () => setCounter( counter + 1 ) } />
            <input type="button" value={ `Show/Hide ${ JSON.stringify( show ) }` } onClick={ handleOnClick } />
        </React.Fragment>
    );
};
```

Para ejmplificar un proceso "pesado" en recursos, la funcion iterate hace un ciclo FOR de 5,000 iteraciones,
si no usaramos el useMemo, este proceso se llevaria a cabo de neuvo al pulsar el boton "Show/Hide" puesto que el 
componente se esta renderizando de nuevo sin importar que este no tenga relacion con el boton "+1", provocando que esta
funcion se lleve a cabo sin realizar cambios en la UI ya que el contador permanece con el mismo valor, utilizando el hook
useMemo logramos que esta funcion "pesada" se lleve a cabo unicamente cuando la variable counter que esta en el array de
dependencias del hook cambie ya que el valor de esta determina el numero de iteraciones.

## Memo

Se utiliza para evitar que un componente se vuelva a renderizar si sus props no han cambiado, se utiliza cuando un 
componente padre tiene elementos que provoquen su rerenderizado pero este no se aplique cambios a todos los elementos 
que lo componen.

```
import React from 'react';

export const CounterLabel = React.memo(
    ( { value } ) => {
        console.log( 'Rerendering CounterLabel component' );
        return (
            <span>{ value }</span>
        );
    }
);
```

CounterLabel es un componente hijo.

```
import React, { useState } from 'react';
import { CounterLabel } from './';

export function Counter3() {
    const { counter, setCounter } = useState( 0 );
    const [ show, setShow ] = useState( false );

    const handleOnClick = ( { target } ) => {
        setShow( !show );
        target.value = `Show/Hide ${ JSON.stringify( show ) }`;
    };

    return (
        <React.Fragment>
            <h1>Counter: <CounterLabel value={ counter } /></h1>
            <input type="button" value="+1" onClick={ () => setCounter( counter + 1 ) } />
            <input type="button" value={ `Show/Hide ${ JSON.stringify( show ) }` } onClick={ handleOnClick } />
        </React.Fragment>
    );
};
```

Componente padre Counter3.

En este caso cada vez que se oprima el boton "Show/Hide" provocara el rerenderizado del componente padre, sin embargo,
debido a que las props del componente hijo CounterLabel no cambiaron este queda memorizado y se vuelve a insertar
dentro del padre sin cambios, esto es no se vuelve a renderizar, el componente hijo solo se volvera a renderizar cuando
se oprima el boton "+1" lo que cambiara el valor de la variable counter la cual es la prop que recibe el componente hijo.

## useCallback

Este hook nos permite guardar un funcion en una dirreccion de memoria permanente durante el ciclo de vida de un 
componente, esto es conveniente cuando un componente recibe como parte de las props un funcion y solo queremos que este
se vuelva a renderizar cuando esta funcion cambie. Lo importante de que este hook haga que la funcion tenga una 
direccion de memoria estatica es que permite que al envolver un componente en un MEMO de React este no active la 
renderizacion por el hecho de tener un direccion en memoria diferente (mas no una funcionalidad diferente).

```
import React from 'react';

export const IncrementButton = React.memo(
    ( { increment } ) => {
        console.log( 'Rerendering...' );
        return (
            <input type="button" value="+5" onClick={ () => increment( 5 ) } />
        );
    }
);
```

Componente hijo.

```
import React, { useState, useCallback } from 'react';
import { IncrementButton } from './';

export function Counter4() {
    const [ counter, setCounter ] = useState( 0 );
    const increment = useCallback( ( value ) => { setCounter( ( prevCounter ) => prevCounter + value ); }, [] );

    return (
        <React.Fragment>
            <h1>Counter: { counter }</h1>
            <IncrementButton increment={ increment } />
        </React.Fragment>
    );
};
```

Componente padre.

En este ejemplo, se evita que el componente IncrementButton se vuelva a renderizar cada vez que la variable counter
se actualiza, ya que la funcion mantiene su direccion en memoria, el MEMO de react no detecta ningun cambio en las props 
y por ende el componente no se vuelve a renderizar, con ello lo unico que se vuelve a renderizar es la etiqueta H1.

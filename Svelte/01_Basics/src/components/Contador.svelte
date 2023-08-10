<script>
  /*
    Obteniendo el valor inicial de las props, declarando la prop con un valor por defecto de 0 (en caso de no recibir la prop)
    Si las props fueron enviadas de la forma <Component {...obj} /> el componente las recibe con un 'export let propName'
    por cada propiedad.
  */
  export let inicial = 0;

  let contador = inicial;
  $: dosVecesContador = contador * 2; // Propiedades computadas

  const disminuir = () => contador--;
  const incrementar = () => contador++;
</script>

<h1>Componentes y Props</h1>
<p>Boton clicks: {contador} {contador === 1 ? 'vez' : 'veces'}</p>
<p>Contador x2: {dosVecesContador}</p>
<div>
  <button type="button" on:click={disminuir}>-1</button>
  <button type="button" on:click={incrementar}>+1</button>
</div>

{#if contador >= 10}
  <p>El contador es mayor o igual a 10</p>
{:else if 0 < contador && contador < 10}
  <p>El contador esta entre 0 y 9</p>
{:else}
  <p>El contador es igual a cero</p>
{/if}

<style>
  p{
    font-size: larger;
  }
</style>

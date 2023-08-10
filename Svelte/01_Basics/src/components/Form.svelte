<script>
  let algo = 'ASD';
  let numero = 0;
  let notificar = false;
  // Al ser undefined el select tomara la opcion por defecto
  let pais;
  let enviar = false;

  const cambiarAlgo = () => {
    algo = 'Algo';
  }

  const eventoSubmit = (evt) => {
    const form = new FormData(evt.target);
    const formObj = Object.fromEntries(form);
    console.log(formObj);
  }
</script>

<!-- 
  Modificadores de Event handlers, 'preventDefault' muy util al usar formularios y 'once' provoca la 
  ejecucion del controlador solo una vez
-->
<div>
  <h1>Formularios y Binding de Variables y Elementos HTML</h1>
  <form on:submit|preventDefault={eventoSubmit}>
    <!--
      El operador 'bind:value' enlaza el contenido del input y la variable, si se escribe algo dentro del input la variable
      cambiara de valor, si el valor de la variable cambia el valor del input tambien lo hara
    -->
    <input type="text" placeholder="Escribe algo..." name="algo" bind:value={algo}>
    <!-- Svelte automaticamente hace un cast a 'number' cuando el input es de tipo 'number' -->
    <input type="number" placeholder="Un numero" name="numero" bind:value={numero}>
    <!-- Svelte automaticamente hace un cast a 'boolean' cuando el input es de tipo 'checkbox' -->
    <section>
      <input type="checkbox" name="notificar" bind:checked={notificar} id="notificar-id">
      <label for="notificar-id">Notificar</label>
    </section>
    <select name="pais" bind:value={pais}>
      <option value="mx">Mexico</option>
      <option value="usa">Estados Unidos</option>
      <option value="can">Canada</option>
    </select>
    <section>
      <label for="enviar-si">Si</label>
      <input type="radio" name="enviar" id="enviar-si" value={true} bind:group={enviar}>
      <label for="enviar-no">No</label>
      <input type="radio" name="enviar" id="enviar-no" value={false} bind:group={enviar}>
    </section>
    <button type="submit">Enviar</button>
  </form>
  <p>{algo} - {numero} - {notificar} - {pais} - {enviar}</p>
  <button type="button" on:click={cambiarAlgo}>Cambiar algo</button>
</div>

<style>
  form{
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 0;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

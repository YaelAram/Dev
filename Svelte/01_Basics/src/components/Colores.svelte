<script>
  let colores = ['Rojo', 'Verde', 'Azul', 'Amarillo']
  let personas = [
    {id: 1, nombre: 'Yael'},
    {id: 2, nombre: 'Oscar'},
    {id: 3, nombre: 'Juan'},
  ]

  /**
   * 
   * @param {number} id 
   */
  const eliminarPersona = (id) => {
    personas = personas.filter((persona) => persona.id !== id);
  }
</script>

<div>
  <h1>Iterar Arrays y Objetos</h1>
  <ul>
    <!-- El segundo parametro 'index' es opcional -->
    {#each colores as color, index}
      <li>{color} - {index}</li>
    {/each}
  </ul>
  
  <ul>
    <!--
      El segundo parametro 'index' es opcional
      Al igual que en react es necesario pasar uns prop key, en Svelte se utiliza (obj.key)
    -->
    {#each personas as persona, index (persona.id)}
      <li>
        {persona.nombre} - {index}
        <button type="button" on:click={() => eliminarPersona(persona.id)}>Eliminar</button>
      </li>
    {/each}
  </ul>
</div>

<style>
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

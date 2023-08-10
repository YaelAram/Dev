<script>
  let array = [];
  let obj = { foo: 50 };

  // La reactividad no funciona con funciones que modifiquen el estado original directamente (push, pop, shift, etc)
  const addNumber = () => array = [...array, array.length]; 
  // En ambos casos las asignaciones del tipo obj.foo = algo o array[x] = algo funcionan
  const addProp = () => obj[`${new Date().getTime()}`] = 'a';
  const changeNumber = () => array[0] = 100;
  const changeProp = () => obj['foo'] = 200;
</script>

<div>
  <h1>Modificar Arrays y Objetos</h1>
  <h3>Array: {JSON.stringify(array)}</h3>
  <h3>Obj: {JSON.stringify(obj)}</h3>
  
  <section>
    <button type="button" on:click={addNumber}>Agregar numero</button>
    <button type="button" on:click={addProp}>Agregar prop</button>
    <button type="button" on:click={changeNumber}>Modificar primer numero</button>
    <button type="button" on:click={changeProp}>Modificar primer prop</button>
  </section>
</div>

<style>
  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

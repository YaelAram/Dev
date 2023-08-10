<script>
  // Import del valor por default, nombre iniciando con mayuscula
  import Contador from './components/Contador.svelte';
  import ObjArray from './components/ObjArray.svelte';
  import Colores from './components/Colores.svelte';
  import Pokemon from './components/Pokemon.svelte';
  import Form from './components/Form.svelte';

  // Esto declara una variable reactiva
  let name = 'Elvis Presley';
  let cadenaHTML = 'Hola <strong>mundo</strong>';
  const src = 'https://th.bing.com/th/id/R.6cbec0a75de7ffadf491794ac91e3964?rik=oaZINng3wQ4FHA&riu=http%3a%2f%2fjaydeanhcr.files.wordpress.com%2f2012%2f08%2felvis-presley-05.jpg&ehk=YvqLp083WJIN1VWlxIpvc8aEYtssdo1z%2b%2bq%2bUmqoDWI%3d&risl=&pid=ImgRaw&r=0'
</script>

<main>
  <section class="variables">
    <h1>Variables en el HTML</h1>
    <p>Hola {name}</p>
    <!-- Forma corta para definir un atributo {atributo} -->
    <img {src} alt='{name} photo'>
  </section>
  <section class="contador">
    <!-- 
      Este componente tiene CSS para el elemento <p> dentro de el, no afecta al elemento <p> del padre

      Pasando prop de valor inicial, las props de un object pueden ser enviadas 
      usando el spread operator <Component {...obj} /> 
    -->
    <Contador inicial={0} />
  </section>
  <section class="html-operator">
    <!--
      @html provoca que el HTML dentro del string cadenaHTML sea renderizado STRING NO Warning! Svelte doesn't perform any
      sanitization
    -->
    <h1>@HTML</h1>
    <p>{ @html cadenaHTML}</p>
  </section>
  <ObjArray />
  <Colores />
  <Pokemon />
  <Form />
</main>

<style>
  /* Los estilos en Svelte tienen un Scope de componente */
  main{
    padding: 2rem 1rem;
    background-color: black;
    color: white;
    overflow-x: hidden;
  }

  img{
    width: 200px;
    height: auto;
  }

  h1{
    margin-block: 0;
  }

  .variables, .contador, .html-operator{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>

<script>
  import { getFivePokemon } from '../utils/pokeapi';

  let pokemons = getFivePokemon(); // No requiere un 'await'
</script>

<h1>Promesas y Rederizado de sus Resultados</h1>
<section>
  <!-- #await muestra su contenido mientras la promesa se resuelve -->
  {#await pokemons} 
    <div class="custom-loader"></div>
  <!-- :then muestra su contenido si la promesa fue un 'resolve' -->
  {:then pokemonList}
    {#each pokemonList as pokemon (pokemon.name)}
      <div>
        <img src="{pokemon.url}" alt="{pokemon.name} image">
        <h3>{pokemon.name}</h3>
      </div>
    {/each}
  <!-- :catch muestra su contenido si la promesa fue un 'reject' -->
  {:catch error}
    <p>{error}</p>
  {/await}
</section>

<style>
  section{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 8px;
  }

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h1, h3{
    margin-block: 0;
    text-align: center;
  }

  img{
    width: 200px;
    height: auto;
  }

  .custom-loader {
    width: 50px;
    height: 50px;
    display: grid;
  }
  .custom-loader::before,
  .custom-loader::after {    
      content:"";
      grid-area: 1/1;
      --c: radial-gradient(farthest-side,#766DF4 92%,#0000);
      background: 
        var(--c) 50%  0, 
        var(--c) 50%  100%, 
        var(--c) 100% 50%, 
        var(--c) 0    50%;
      background-size: 12px 12px;
      background-repeat: no-repeat;
      animation: s2 1s infinite;
  }
  .custom-loader::before {
    margin:4px;
    filter:hue-rotate(45deg);
    background-size: 8px 8px;
    animation-timing-function: linear
  }

  @keyframes s2{ 
    100%{transform: rotate(.5turn)}
  }
</style>

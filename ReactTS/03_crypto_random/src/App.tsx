import { useRandomNumber } from './hooks/useRandomNumber';

import './App.css';

export function App() {
  const query = useRandomNumber();

  return (
    <>
      {
        (query.isFetching)
          ? <h2>Cargando...</h2>
          : (query.isError)
            ? <h2>Error: {`${query.error}`}</h2>
            : <h2>Numero Aleatorio: {query.data}</h2>
      }
      <button type='button' onClick={() => query.refetch()} disabled={query.isFetching}>Otro</button>
    </>
  );
};

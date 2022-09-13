import { useCallback, useEffect, useState } from 'react';

const PokemonCountCardCallback = () => {
  const [pokemonCount, setPokemonCount] = useState(0);

  const loadPokemonCount = useCallback(() => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then((response) => response.json())
      .then((data) => {
        if (data.count) {
          setPokemonCount(data.count);
        }
      });
  }, []);

  useEffect(() => {
    loadPokemonCount();
  }, [loadPokemonCount]);

  return <div style={{ width: '100px' }}>Count: {pokemonCount}</div>;
};

export default PokemonCountCardCallback;

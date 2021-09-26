import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
import { ReactComponent as Logo } from '../models/logo.svg';

  
const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);
  
  return (
    <div>
      <h1 className="center">
      <Logo width='50%' height='105px' />
      </h1>
      <div className="container"> 
        <div className="row"> 
        {pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
        </div>
      </div>
    </div> 
  );
}
  
export default PokemonList;
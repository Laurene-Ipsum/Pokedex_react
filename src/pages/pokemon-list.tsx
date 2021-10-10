import React, { FunctionComponent, useState, useEffect } from 'react';
import Pokemon from '../models/pokemon';
import POKEMONS from '../models/mock-pokemon';
import PokemonCard from '../components/pokemon-card';
import styled, { keyframes } from 'styled-components';
import ReactDOMServer from 'react-dom/server';
import PokemonDetail from './pokemon-detail'
const ButtonsRight = styled.div`
width: unset;
height: 200px;
border: 2px solid #3d0008;
margin-right: 15px;


`;
const ButtonRight = styled.div`
width: unset;
height: 30px;
background-color:#54c3ff;
margin: 5px;
box-shadow: 8px 8px 16px -9px rgba(0,0,0,0.85);
`;
const GridHome = styled.div`
  display: grid;
  grid-template-columns: 90% 10%;
`;


const PokemonList: FunctionComponent = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  
  useEffect(() => {
    setPokemons(POKEMONS);
  }, []);
  
  return (
    <div>
      <div style={{width: 'auto', margin: '5% 15%', padding:'10px', backgroundColor:'#d32f2f'}}> 
        <h1 className="center" style={{display:'flex', justifyContent:'space-between', margin: '3% 5%'}}>
          <div style={{display:'flex'}}>
              <div style={{ width: '80px', height:'80px', marginLeft:'50px', border:'1px solid #3d3d3d', borderRadius:'100%', backgroundColor:'#7dcff5', boxShadow:'inset 8px -10px 22px 6px rgba(0,0,0,0.68) , 5px 5px 41px 10px rgba(252,199,206,8)'}} />
                  <div style={{ width: '20px', height:'20px', margin:'5px 5px 0 35px', border:'1px solid #3b3b3b', borderRadius:'100%', backgroundColor:'#ff002b', boxShadow:'inset 2px 2px 3px 2px rgba(117,4,9,1), 5px 5px 41px 10px rgba(252,199,206,0.61)'}} />
                  <div style={{ width: '20px', height:'20px', margin:'5px', border:'1px solid #3b3b3b', borderRadius:'100%', backgroundColor:'#ffea00', boxShadow:'inset 2px 2px 3px 2px  rgba(147,158,0,1), 5px 5px 62px 10px rgba(38,74,255,0.32)'}} />
                  <div style={{ width: '20px', height:'20px', margin:'5px', border:'1px solid #3b3b3b', borderRadius:'100%', backgroundColor:'#4cff05', boxShadow:'inset 2px 2px 3px 2px rgba(4,130,4,1), 5px 5px 41px 10px rgba(217,255,217,1)'}} />
              </div>
        </h1>
        <GridHome>
       
        <div className="container" style={{ width:'80%', margin: '3% 30% 0 2%', boxShadow:'inset 5px 9px 46px -5px rgba(0,0,0,0.69)' }}> 
        
        
 
          <div className="row"style={{ margin: '3%'}}> 
            {pokemons.map(pokemon => (
              <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
          </div>
        </div>
        <ButtonsRight>
        <ButtonRight/>
        <ButtonRight/>
        <ButtonRight/>
        <ButtonRight/>
        </ButtonsRight>
      
        </GridHome>
      </div>
   
    </div> 
  );
}
  
export default PokemonList;

const myPage = < PokemonList />;
const staticMarkup  = ReactDOMServer.renderToStaticMarkup(myPage);

console.log(staticMarkup);


import React from 'react'
import { Link } from 'react-router-dom'
import Pokeball from '../models/Pokeball.png'
import styled, { keyframes } from 'styled-components';

const Title = styled.h1`
@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fafafa;
  font-family: 'Press Start 2P', cursive;
  margin:'50px auto ';
`;
const NavBarStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin:'auto ';
`;
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const PokeRotate = styled.div`
  display: inline-block;
  animation: ${rotate} 5s linear infinite;
  padding: 0.2rem;
`;


const NavBar = () => {
    return (
        <NavBarStyle>
            <div style={{width: '100%', height: '10%', backgroundColor:'#d32f2f'}} >
                 
                    <Link to="/" className="brand-logo">
                    <Title>pokédex 2 <PokeRotate>
                        <img src={Pokeball} alt="pokedex brand" style={{width: '35px'}}/>
                        </PokeRotate>21
                        </Title>
                    </Link>
        </div>
        </NavBarStyle>
    )
}

export default NavBar


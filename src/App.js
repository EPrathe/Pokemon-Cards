import React from 'react';
import './App.scss';
import Flippy, {FrontSide, BackSide} from 'react-flippy'

import {useQuery} from '@apollo/react-hooks';
import gql from "graphql-tag";

const GET_POKEMON_INFO = gql`
{
    pokemons(first: 150) {
      id,
      number,
      name,
      image,
      types,
      weight {
        maximum
      }
      resistant,
      weaknesses,
      height {
        maximum
      }
      evolutions {
        id,
        number,
        name,
        image
      }
      attacks {
        special{
          name,
          damage,
          type
        }
      }
    }
  }
`

function App() {
  const{data,loading,error}=useQuery(GET_POKEMON_INFO);
  if(loading) return <p>loading</p>
  if(error) return <p>error</p>
  data.pokemons.map((pokemon)=>{
    if(pokemon.types[0]==="Grass"){
      pokemon['color']="#78C850"
      return pokemon;
    }
    if(pokemon.types[0]==="Fire"){
      pokemon['color']="#F08030"
      return pokemon;
    }
    if(pokemon.types[0]==="Water"){
      pokemon['color']="#6890F0"
      return pokemon;
    }
    if(pokemon.types[0]==="Electric"){
      pokemon['color']="#F8D030"
      return pokemon;
    }
    if(pokemon.types[0]==="Bug"){
      pokemon['color']="#A8B820"
      return pokemon;
    }
    if(pokemon.types[0]==="Normal"){
      pokemon['color']="#A8A878"
      return pokemon;
    }
    if(pokemon.types[0]==="Poison"){
      pokemon['color']="#A040A0"
      return pokemon;
    }
    if(pokemon.types[0]==="Ground"){
      pokemon['color']="#E0C068"
      return pokemon;
    }
    if(pokemon.types[0]==="Fairy"){
      pokemon['color']="#EE99AC"
      return pokemon;
    }
    if(pokemon.types[0]==="Dragon"){
      pokemon['color']="#7038F8"
      return pokemon;
    }
    if(pokemon.types[0]==="Fighting"){
      pokemon['color']="#C03028"
      return pokemon;
    }
    if(pokemon.types[0]==="Psychic"){
      pokemon['color']="#F85888"
      return pokemon;
    }
    if(pokemon.types[0]==="Rock"){
      pokemon['color']="#B8A038"
      return pokemon;
    }
    if(pokemon.types[0]==="Ghost"){
      pokemon['color']="#705898"
      return pokemon;
    } 
    return pokemon;
  });
  return (
    // <React.Fragment>
    <>
    <h1>Pokémon</h1>
    <div className="container">
      {data &&
        data.pokemons &&
        data.pokemons.map((pokemon, index) => ( 
          <Flippy key={index}>
          <FrontSide className="card" style={{border: "5px solid " + pokemon.color}}>
            <div>
          <div className="pokemon-number">{pokemon.number}</div> 
          <div className="pokemon-type">{pokemon.types[0]}</div>
          </div>
            <div class="image-container"><img src={pokemon.image} alt=""/></div>
            <div class="card-body">
              <h2>{pokemon.name}</h2>
              <p>
                Height: {pokemon.height.maximum}
              </p>
                <p>  
                Weight: {pokemon.weight.maximum}
                </p>
            </div>
          </FrontSide>
          <BackSide className="card" style={{border: "5px solid " + pokemon.color}}>
              <div class="special-attacks-container">
              <p>
                <b>Special Attacks:</b>
                {pokemon.attacks.special.map((e, indx) => {
                  return <p key={indx}> {e.name}- {e.damage} damage </p>;
                })}
              </p>
              </div>
                <div className="strong-container">
                  <p>                    <b>Strong Against:</b>
                    {pokemon.resistant.map((e, indx) => {
                      return <div key={indx}> {e}</div>;
                    })}
                    </p>
              </div>
              <div className="weak-container">
                  <p>
                    <b>Weak Against:</b>
                    {pokemon.weaknesses.map((e, indx) => {
                      return <div key={indx}> {e}</div>;
                    })}
                  </p>
              </div>


          </BackSide>
        </Flippy>
        ))}
    </div>
    </>
  /* // </React.Fragment> */
  );
}

export default App;

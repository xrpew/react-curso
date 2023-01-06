import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { pokemonApi } from "./API/pokemonApi";
import { getPokemons } from "./store/slices/pokemon/thunks";

export const PokemonApp = () => {

  const distpach = useDispatch();
const { isLoading, pokemons = [] , page} = useSelector(state=> state.pokemons)

  useEffect(() => {
    distpach( getPokemons() );
    
  }, [])
  

  return (
    <>
    <h1>Pokemon APP</h1>
    <hr />
    <span> { isLoading && 'Cargando...'}</span>
    <ul>
      {pokemons.map(({name})=>(
        <li key={name}> {name} </li>
        ))
      }

    </ul>
    <button
        disabled={ isLoading }
        onClick={()=>distpach(getPokemons(page))}>
        
      Next
    </button>
    

    </>
    )
}

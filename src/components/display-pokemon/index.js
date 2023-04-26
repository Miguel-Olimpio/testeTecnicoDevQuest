import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Pokemon} from '../pokemon/index'
import { NavBar } from '../navBar/navBar';
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button';

async function toCallPokemon(id) {
    return await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => res.json())
}
  
async function toCallAbilities(abilitys) {
    const ability = abilitys.map(async (abilitys) => {
        return await fetch(`${abilitys.ability.url}`).then(res => res.json())
    })
    return await Promise.all(ability)
}

async function selectLanguage(description) {
    const arrayDescriptions = [];
    description.flavor_text_entries.map(async (languages) => {
      if (languages.language.name === 'en') {
        const result = await languages.flavor_text;
        arrayDescriptions.push(result);
      }
    });
    const resultado = await arrayDescriptions;
  
    if (resultado.length === 0) {
      return '';
    }
  
    return resultado[0];
  }
    
const InfosSelectedPokemon = () => {
    const [infos, setInfos] = useState({
        img: '',
        name: '',
        moves: [],
        abilities: [],
        descriptions: [],
        type: []
    })
    const { id } = useParams()
    useEffect(() => {
        const fetchData = async () => {
            const PokemonInfo = await toCallPokemon(id)
            const infosAbilities = await toCallAbilities(PokemonInfo.abilities)
            const description = await infosAbilities.map(async (description) => { return selectLanguage(description) })
            const resultDescription = await Promise.all(description)

            setInfos({
                name: PokemonInfo.name,
                img: PokemonInfo.sprites.front_default,
                moves: PokemonInfo.moves,
                abilities: infosAbilities,
                descriptions: resultDescription,
                type: PokemonInfo.types
            })
        }
        fetchData()
    }, [id])
    return (
        <>
            <NavBar main='false' />
            <ThemeTogglerButton/>
            <Pokemon pokemon={infos} />
        </>
    )
}

export { InfosSelectedPokemon, toCallPokemon, toCallAbilities, selectLanguage }
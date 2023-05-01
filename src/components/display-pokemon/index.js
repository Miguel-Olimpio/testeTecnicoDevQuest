import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {Pokemon} from '../pokemon/index'
import { NavBar } from '../navBar/navBar';
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button';
import {selectLanguage, toCallAbilities, toCallPokemon} from '../../requests/requests';
    
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

export { InfosSelectedPokemon }
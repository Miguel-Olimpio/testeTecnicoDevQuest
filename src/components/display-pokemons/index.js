import { useState, useEffect } from 'react'
import { ShowMore } from '../showMore/showMore'
import React from "react";
import { Pokemons } from '../pokemons'
import { NavBar } from '../navBar/navBar'
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button';
import {searchPokemon, toCallPokemons, rafflePokemons} from '../../requests/requests'

const DisplayPokemons = () => {
    const [pokemon, setPokemon] = useState({
        pokemons: [],
    })
    const [input, setInput] = useState({
        text: ''
    })
    const handleInputChange = async (event) => {
        const inputValue = event.target.value.toLowerCase();
    setInput({
        text: inputValue
    })
    }
    const handleSubmit = async (event) => {
        event.preventDefault()

        const dataSearch = await searchPokemon(input.text)
        setPokemon({
            pokemons: dataSearch
        })
    }

    useEffect(() => {
        const fetchData = async () => {
            const prizeDraw = await rafflePokemons()
            const data = await toCallPokemons(prizeDraw)
            setPokemon({
                pokemons: data
            })
        }
        fetchData()
    }, [])

    async function handleClick() {
        const prizeDraw1 = await rafflePokemons()
        const data1 = await toCallPokemons(prizeDraw1)
        setPokemon({
            pokemons: [...pokemon.pokemons, ...data1]
        })
    }
    return (
        <>
            <NavBar handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputText={input.text} main='true' />
            <ThemeTogglerButton/>
            <Pokemons pokemons={pokemon.pokemons} />
            <ShowMore handleClick={handleClick} />
        </>
    )
}

export { DisplayPokemons };
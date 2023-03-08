import { useState, useEffect } from 'react'
import { ShowMore } from '../showMore/showMore'
import React from "react";
import { Pokemons } from '../pokemons'
import { NavBar } from '../navBar/navBar'
import { ThemeTogglerButton } from '../theme-toggler-button/theme-toggler-button';



async function rafflePokemons() {
    let sorteio = await ''
    sorteio = await Math.floor((Math.random() * 1269) + 1)
    return sorteio
}

async function toCallPokemons(prizeDraw) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${prizeDraw}&limit=10`).then(res => res.json())
    const pokemonsList = await response.results.map(async (pokemon) => {
        const pokemonData = await fetch(pokemon.url).then(res => res.json())
        return pokemonData
    })
    const pokemons = await Promise.all(pokemonsList)
    return await pokemons
}

async function searchPokemon(name) {
    const url = []
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=1279`).then(res => res.json())
    await response.results.map(async (pokemon) => {
        if (pokemon.name.includes(name)) {
            url.push(pokemon.url)
        }
    })
    const resultSearch = url.map(async (url) => {
        const pokemonData = await fetch(url).then(res => res.json())
        return pokemonData
    })
    const pokemons = await Promise.all(resultSearch)
    console.log(pokemons)
    return await pokemons
}

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

export { DisplayPokemons, rafflePokemons, toCallPokemons, searchPokemon };
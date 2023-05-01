

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
    
    return pokemons   
}

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

export {searchPokemon, toCallPokemons, rafflePokemons, selectLanguage, toCallAbilities, toCallPokemon }
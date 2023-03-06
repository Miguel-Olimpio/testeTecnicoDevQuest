import { toCallPokemon, toCallAbilities, selectLanguage } from '../components/display-pokemon/index';

// Testes para a função toCallPokemon
describe('toCallPokemon', () => {
  it('should return a pokemon object for valid id', async () => {
    const pokemon = await toCallPokemon(1);
    expect(pokemon.name).toBe('bulbasaur');
  });

  it('should throw an error for invalid id', async () => {
    await expect(toCallPokemon('invalid-id')).rejects.toThrow();
  });
});

// Testes para a função toCallAbilities
describe('toCallAbilities', () => {
  it('should return an array of ability objects for valid input', async () => {
    const abilities = await toCallAbilities([{ ability: { url: 'https://pokeapi.co/api/v2/ability/1/' } }]);
    expect(abilities[0].name).toBe('stench');
  });

  it('should return an empty array for invalid input', async () => {
    const abilities = await toCallAbilities([]);
    expect(abilities).toHaveLength(0);
  });
});

// Testes para a função selectLanguage
describe('selectLanguage', () => {
  it('should return the first English description', async () => {
    const description = {
      flavor_text_entries: [
        { flavor_text: 'This is a description in English.', language: { name: 'en' } },
        { flavor_text: 'This is a description in Spanish.', language: { name: 'es' } },
      ],
    };

    const result = await selectLanguage(description);

    expect(result).toBe('This is a description in English.');
  });

  it('should return an empty string if no English description is found', async () => {
    const description = {
      flavor_text_entries: [
        { flavor_text: 'This is a description in Spanish.', language: { name: 'es' } },
      ],
    };

    const result = await selectLanguage(description);

    expect(result).toBe('');
  });
});

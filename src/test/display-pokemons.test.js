import { rafflePokemons, toCallPokemons, searchPokemon } from '../components/display-pokemons/index';

// Teste para a função rafflePokemons
test('rafflePokemons retorna um número entre 1 e 1260', async () => {
  const resultado = await rafflePokemons();
  expect(resultado).toBeGreaterThanOrEqual(1);
  expect(resultado).toBeLessThanOrEqual(1260);
});

// Testes para a função toCallPokemons
test('toCallPokemons retorna uma lista de 10 pokemons', async () => {
  const prizeDraw = 0;
  const pokemons = await toCallPokemons(prizeDraw);
  expect(pokemons).toHaveLength(10);
});

test('toCallPokemons retorna uma lista de pokemons com dados válidos', async () => {
  const prizeDraw = 0;
  const pokemons = await toCallPokemons(prizeDraw);
  pokemons.forEach(pokemon => {
    expect(pokemon).toHaveProperty('name');
    expect(pokemon).toHaveProperty('sprites');
    expect(pokemon).toHaveProperty('types');
  });
});

// Teste para a função searchPokemon
describe('searchPokemon', () => {
  test('deve retornar um array de pokemons quando for passado um nome de pokemon válido', async () => {
    const pokemons = await searchPokemon('charizard');
    expect(pokemons).toBeDefined();
    expect(Array.isArray(pokemons)).toBe(true);
    expect(pokemons.length).toBeGreaterThan(0);
  });
});

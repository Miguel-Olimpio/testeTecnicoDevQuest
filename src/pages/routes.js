import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pokemons } from './pokemons';
import { SelectedPokemon } from './pokemon'



const AppRoutes = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path='/testeTecnnpm' element={<Pokemons/>} />
            <Route exact path='/testeTecnnpm/:id' element={<SelectedPokemon/>} />
        </Routes>
    </BrowserRouter>
    )
}

export {AppRoutes}
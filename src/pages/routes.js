import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Pokemons } from './pokemons';
import { SelectedPokemon } from './pokemon'



const AppRoutes = () => {
    return(
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={<Pokemons/>} />
            <Route exact path='/:id' element={<SelectedPokemon/>} />
        </Routes>
    </BrowserRouter>
    )
}

export {AppRoutes}
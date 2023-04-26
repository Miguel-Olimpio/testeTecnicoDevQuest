import Photo from '../images/LogoPokeball.png'
import { StyledLink, Li, H3, Ul } from './styled'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context'

const Pokemons = (props) => {

    const { theme } = useContext(ThemeContext)


    function Verification(image) {
        if (image === null) {
            return Photo;
        } else {
            return image;
        }
    }
    return (
        <div>
            {Array.isArray(props.pokemons) && props.pokemons.length > 0 ? (
                <Ul>
                    {props.pokemons.map((pokemon, index) => (
                        <Li theme={theme} type={pokemon.types[0].type.name} key={index}>
                            <StyledLink to={`${pokemon.id}`}>
                                <img src={Verification(pokemon.sprites.front_default)} alt={pokemon.name} />
                                <H3><strong>Name: </strong>{pokemon.name}</H3>
                                <H3><strong>Type: </strong>{pokemon.types[0].type.name}</H3>
                            </StyledLink>
                        </Li>
                    ))}
                </Ul>
            ) : (
                <Ul>
                    <Li><H3>Non-existent pokemon</H3></Li>
                </Ul>
            )}
        </div>
    );

}

export { Pokemons }

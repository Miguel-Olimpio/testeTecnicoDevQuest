import React, {useContext} from 'react';
import Photo from '../images/LogoPokeball.png'
import { useState } from 'react';
import {P, Li, Ul, H3, Section, Img, Div} from './styled'
import { ThemeContext } from '../contexts/theme-context';

const Pokemon = (props) => {
    const [movesOpen, setMovesOpen] = useState(false);
    const [abilitiesOpen, setAbilitiesOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    const {theme} = useContext(ThemeContext)

    function Verification(image) {
        if (image === null) {
            return Photo;
        } else {
            return image;
        }
    }
    const jj = []
    props.pokemon.type.map((type, index) => {
        if (type.type.name != undefined) {
            jj.push(type.type.name)
        }
    })

    return (
        <Section>
            <Div theme={theme} pokemon='pokemon' container='container' type={jj[0]} >
                <Img pokeimage='pokeimage' src={Verification(props.pokemon.img)} />
                <H3>{props.pokemon.name}</H3>
            </Div>
            <Div theme={theme} container='container' type={jj[0]}>
                <Div title='title' onClick={()=>setMovesOpen(!movesOpen)}>
                    <H3>Moves: </H3>
                    <H3>{movesOpen?'-':'+'}</H3>
                </Div>
                <Div infos={movesOpen}>
                    {
                        <Ul>
                            {
                                props.pokemon.moves.map((moves, index) => {
                                    return (
                                        <Li key={index}>
                                            <P><strong>Move: </strong> {moves.move.name}</P>
                                        </Li>
                                    )
                                })
                            }
                        </Ul>
                    }
                </Div>
            </Div>
            <Div theme={theme} container='container' type={jj[0]} >
                <Div title='title' onClick={()=>setAbilitiesOpen(!abilitiesOpen)}>
                    <H3>Abilities:</H3>
                    <H3>{abilitiesOpen?'-':'+'}</H3>
                </Div>
                <Div infos={abilitiesOpen}>
                    {
                        <Ul>
                            {
                                props.pokemon.abilities.map((ability, index) => {
                                    return (
                                        <Li key={index}>
                                            <P><strong>Ability: </strong>{ability.name}</P>
                                            <P><strong>Description: </strong> {props.pokemon.descriptions[index]}</P>
                                        </Li>
                                    )
                                })
                            }
                        </Ul>
                    }
                </Div>
            </Div>
            <Div theme={theme} container='container' type={jj[0]}  >
                <Div title='title' onClick={()=>setTypeOpen(!typeOpen)}>
                    <H3>Types</H3>
                    <H3>{typeOpen?'-':'+'}</H3>
                </Div>
                <Div infos={typeOpen}>
                    {
                        props.pokemon.type.map((types, index) => {
                            return (
                                <P key={index}><strong>Type: </strong> {types.type.name}</P>
                            )
                        })
                    }
                </Div>
            </Div>
        </Section>
    )
}

export { Pokemon }
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Section = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
`
const Img = styled.img`
    ${props => props.header === 'header' && css`
    width: 120px;
    height: 100%;
    padding: 20px;
    `}

    ${props => props.pokeimage === 'pokeimage' && css`
        padding-top: 0px;
    `}
`
const StyledLink = styled(Link)`
    color: yellow;
    margin-right: 15px;
`
const Div = styled.div`
    ${props => props.container === 'container' && css`
        @media(max-width: 767px) {
            width: 80%;
        }
        width: 60%;
        border-radius: 10px;
        margin-top: 20px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 20px;
        border: 1px solid black;
        box-shadow: 3px 3px #000;
        ${props => props.type === 'electric' && css`
        background-image: linear-gradient(
            45deg,#FFD700,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'poison' && css`
        background-image: linear-gradient(
            45deg,#D8BFD8,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'fighting' && css`
        background-image: linear-gradient(
            45deg,#F0E68C,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'flying' && css`
        background-image: linear-gradient(
            45deg,#FFF9,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'grass' && css`
        background-image: linear-gradient(
            45deg,#32CD32,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'water' && css`
        background-image: linear-gradient(
            45deg,#B0E0E6,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'rock' && css`
        background-image: linear-gradient(
            45deg,#F4A460,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'fairy' && css`
        background-image: linear-gradient(
            45deg,#FFB6C1,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'dragon' && css`
        background-image: linear-gradient(
            45deg,#FF6347,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'fire' && css`
        background-image: linear-gradient(
            45deg,#FF4500,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'normal' && css`
        background-image: linear-gradient(
            45deg,#DCDCDC,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'ice' && css`
        background-image: linear-gradient(
            45deg,#FFFAFA,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'ground' && css`
        background-image: linear-gradient(
            45deg,#F5DEB3,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'psychic' && css`
        background-image: linear-gradient(
            45deg,#A020F0,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'bug' && css`
        background-image: linear-gradient(
            45deg,#ADFF2F,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'ghost' && css`
        background-image: linear-gradient(
            45deg,#DDA0DD,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'steel' && css`
        background-image: linear-gradient(
            45deg,#B0C4DE,${props.theme.secondaryColor}
            );
        `}
        ${props => props.type === 'dark' && css`
        background-image: linear-gradient(
            45deg,#4B0082,${props.theme.secondaryColor}
            );
        `}
    `}
    ${props => props.pokemon === 'pokemon' && css`
        flex-direction: column;
        border: 2px solid black;
        border-radius: 10px;
    `}
    ${props => props.title === 'title' && css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        cursor: pointer;
        border: 1px solid black;
        border-radius: 10px;
        &:hover{
            opacity: 0.8;
            transition: 0.3s;
        }
    `}
    ${props => props.infos === false && css`
        width: 100%;
        border: none;
        box-shadow: none;
        overflow: hidden;
        height: 0;      
        transition: all .5 ease;
    `}
    ${props => props.infos === true && css`
        width: 100%;
        border: none;
        box-shadow: none;
        overflow: hidden;
        transition: all .5 ease;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    `}
`
const H3 = styled.h3`
    padding: 20px;
`
const Ul = styled.ul`
    display: flex;
    flex-wrap: wrap;
`
const Li = styled.li`
    list-style: none;
`
const P = styled.p`
    padding: 20px;

`
export {P, Li, Ul, H3, Section, Img, StyledLink, Div}
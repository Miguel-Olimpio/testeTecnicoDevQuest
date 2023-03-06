import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Ul = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
`
const H3 = styled.h3`
    padding-bottom: 10px;
    color: #000;
    font-size: 16px;
`
const Li = styled.li`
    &:hover{
        opacity: 0.8;
        transition: 0.3s;
    }
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;    
    width: 250px;
    height: 200px;
    margin: 20px;
    padding: 10px;
    box-shadow: 3px 3px #000;
    border-radius: 10px;
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
    `
const StyledLink = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 200px;
`

export {StyledLink, Li, H3, Ul}
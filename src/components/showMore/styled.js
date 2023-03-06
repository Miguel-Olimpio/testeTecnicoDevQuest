import styled, { css } from 'styled-components'

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px
`


const Button = styled.button`
    ${ props => css`
    @media(max-width: 767px) {
        width: 80%;
    }
        width: 50%;
        height: 40px;
        border-radius: 40px;
        font-size: 20px;
        border: none;
        background-image: linear-gradient(
            45deg,#000,${props.theme.buttonColor}
            );
        color: yellow;
        cursor: pointer;
        &:hover{
            opacity: 0.8;
        }
    `}
`

export {Div, Button}
import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
    ${ props => css`
        padding: 10px;
        background-image: linear-gradient(
            45deg,#000,${props.theme.navColor}
            );
        backGround-color: ;
        display: flex;
        justify-content: space-between;
        height: 50px;
        align-items: center;
    `}
`
const Img = styled.img`
    width: 120px;
    height: 100%;
    padding: 20px;
`
const Div = styled.div`
${ props => css`
    display: flex;
    border-radius: 40px;
    background-color: ${props.theme.inputColor};
    justify-content: space-between;
    align-items: center;
    height: 90%;
    padding: 4px 20px;
    width: 30%;
    margin: 15px;
`}    
`
const Button = styled.button`
    background: none;
    border: none;
    border-radius: 50%;
    width: 20%;
`
const Input = styled.input`
${ props => css`
    width: 80%;
    background: none;
    border: none;
    outline: none;
    color: ${props.theme.color};
    font-size: 16px;
    margin-left: 15px;
`}    
`   
const StyledLink = styled(Link)`
    background: none;
    color: yellow;
    margin-right: 20px;
`

export {Input, Button, Header, Img, Div, StyledLink}
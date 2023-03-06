import {Div, Button} from './styled'
import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/theme-context'

const ShowMore = (props) => {
    
    const {theme} = useContext(ThemeContext)

    return (
        <Div>
            <Button theme={theme} onClick={props.handleClick}>show more...</Button>
        </Div>
    )
}

export { ShowMore };
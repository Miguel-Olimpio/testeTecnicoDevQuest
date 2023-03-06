import React, {useContext} from 'react';
import { ThemeContext } from '../contexts/theme-context';
import {Div, Button} from './styled'

export const ThemeButton = (props) => {
    
    const { themes } = useContext(ThemeContext);

    return(
        <Div>
            <Button {...props} />
        </Div>
    )
}
import { ThemeContext, themes } from "../contexts/theme-context";
import React, { useContext } from "react";
import { ThemeButton } from "../button/button";

export const ThemeTogglerButton = () => {

    const {theme, setTheme} = useContext(ThemeContext);
    const {store, setStore} = useContext(ThemeContext);
    
    function armazenar (key, value) {
        localStorage.setItem(key, value)
    }
    
    // const handleClick = () => {
    //     setTheme( theme === themes.dark ? themes.light : themes.dark )
    //     setStore(theme)
    //     armazenar('theme',store)
    // }

    return(
            <ThemeButton theme={theme} onClick={()=>setTheme( theme === themes.dark ? themes.light : themes.dark )}> Change page theme </ThemeButton>
    )
}

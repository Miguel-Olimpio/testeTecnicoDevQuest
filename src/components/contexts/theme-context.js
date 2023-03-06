import React, { createContext, useState, useEffect } from "react";

export const themes = {
    light: {
        navColor: '#0000CD',        
        secondaryColor: '#00008B',
        inputColor: '#FFD700',
        buttonColor: ' #0000CD',
        color: '#000',
    },
    dark: {
        navColor: '#000',
        secondaryColor: '#363636',
        inputColor: '#0a1b2d',
        buttonColor: ' #0a1b2d',
        color: '#FFFF00',
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = ( props ) => {
    const [theme, setTheme] = useState(() => {
      const storedTheme = localStorage.getItem('theme');
      return storedTheme && storedTheme !== 'undefined' ? JSON.parse(storedTheme) : themes.dark;
    });
  
    useEffect(() => {
      localStorage.setItem('theme', JSON.stringify(theme));
    }, [theme]);
  
    return(
      <ThemeContext.Provider value={{theme, setTheme}}>
        {props.children}
      </ThemeContext.Provider>
    )
  }
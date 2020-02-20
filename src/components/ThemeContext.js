import React, { useState, createContext } from 'react'
import App from '../index'

export const ThemeContext = createContext()

export const ThemeProvider = props => {
    const [theme, setTheme] = useState('Light')

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>

            {props.children}
        </ThemeContext.Provider>)
}
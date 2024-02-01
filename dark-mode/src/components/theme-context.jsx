import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = ({children}) =>{
    const [isDarkMode,setIsDarkMode] = useState(false);

    const toggleTheme = () =>{
        setIsDarkMode((prevState) => !prevState)
    }

    const theme = isDarkMode? "dark" : "light";

    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
    },[isDarkMode])


    return <ThemeContext.Provider value={{toggleTheme,theme}}>
     {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;
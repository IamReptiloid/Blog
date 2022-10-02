import { useMemo, useState, FC } from "react";
import { LOCAL_STORAGE_THEME, ThemeContext, ThemeContextProps, Themes } from "./ThemeContext";

const prevTheme = localStorage.getItem(LOCAL_STORAGE_THEME) as Themes || Themes.LIGHT;

const ThemeProvider: FC = ({children}) => {

    const [theme, setTheme] = useState<Themes>(prevTheme);

    
    const value = useMemo<ThemeContextProps>(() => ({
        theme,
        setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
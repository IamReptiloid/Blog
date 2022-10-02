import { useContext } from "react";
import { LOCAL_STORAGE_THEME, ThemeContext, Themes } from "./ThemeContext";

export interface UseThemeResult{
    theme: Themes,
    changeTheme: () => void
}

export function useTheme(): UseThemeResult{
	const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === Themes.LIGHT? Themes.DARK : Themes.LIGHT;
        localStorage.setItem(LOCAL_STORAGE_THEME, newTheme);
        setTheme(newTheme);
    }

    return {theme, changeTheme}
}
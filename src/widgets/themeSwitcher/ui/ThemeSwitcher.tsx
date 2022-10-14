import { useTheme, Themes } from "app/providers/ThemeProvider";
import { FC } from "react";
import { className } from "shared/lib/className";
import style from "./ThemeSwitcher.module.scss";
import LightIcon from "shared/assets/icons/theme-light.svg";
import DarkIcon from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/button/ui/Button";

export interface ThemeSwitcherProps {
	styles?: string[],
}

export const ThemeSwitcher: FC<ThemeSwitcherProps>  = ({ styles }) => {
	const { theme, changeTheme } = useTheme();

	return (
		<Button theme={ThemeButton.CLEAR} onClick={changeTheme} styles={[className(style.ThemeSwitcher, {}, [...styles || []])]}>
			{theme === Themes.DARK ? <DarkIcon/> : <LightIcon/>}
		</Button>
	);
};
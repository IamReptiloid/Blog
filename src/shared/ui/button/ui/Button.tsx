import { ButtonHTMLAttributes, FC } from "react";
import { className } from "shared/lib/className";
import style from "./Button.module.scss";

export enum ThemeButton {
	CLEAR = "clear",
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	styles?: string[],
	theme?: ThemeButton
}

export const Button: FC<ButtonProps> = ({ styles, children, theme, ...props }) => {
	return (
		<button {...props} className={className(style.Button, {}, [...styles || [], style[theme]])}>
			{children}
		</button>
	);
};
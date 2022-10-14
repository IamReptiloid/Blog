import { FC } from "react";
import { Link, LinkProps } from "react-router-dom";
import { className } from "shared/lib/className";
import style from "./AppLink.module.scss";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary",
}

export interface AppLinkProps extends LinkProps {
	styles?: string[],
	theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {
		to, 
		children, 
		styles = [], 
		theme = AppLinkTheme.PRIMARY 
		, ...otherProps
	} = props;

	return (
		<Link 
			className={className(style.AppLink, {}, [...styles, style[theme]])} 
			to={to} 
			{...otherProps}
		>
			{children}
		</Link>
	);
}; 
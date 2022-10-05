import { Link, LinkProps } from 'react-router-dom';
import { className } from 'shared/lib/className';
import style from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}

export interface AppLinkProps extends LinkProps{
    styles?: string[],
    children?: JSX.Element | string
    theme?: AppLinkTheme
}

export function AppLink (props: AppLinkProps) {
    const {
        to, 
        children, 
        styles = [], 
        theme = AppLinkTheme.PRIMARY 
        ,...otherProps
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
} 
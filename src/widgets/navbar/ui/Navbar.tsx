import { FC } from 'react';
import { Link } from 'react-router-dom';
import { className } from 'shared/lib/className';
import { AppLink } from 'shared/ui/appLink/ui/AppLink';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher/ui/ThemeSwitcher';
import style from './Navbar.module.scss';

export interface INavbarProps {
    styles?: string[]
}

export const Navbar: FC<INavbarProps> = (props) => {
    return (
        <div className={className(style.Navbar, {}, props.styles)}>
            <ThemeSwitcher/>
            <div className={style.links}>
                <AppLink to="/" styles={[style.mainLink]}>Main</AppLink>
                <AppLink to="/about">about</AppLink>
            </div>
        </div>
    );
}

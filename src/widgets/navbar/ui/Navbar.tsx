import { Link } from 'react-router-dom';
import { className } from 'shared/lib/className';
import { AppLink } from 'shared/ui/AppLink';
import style from './Navbar.module.scss';

export interface INavbarProps {
    styles?: string[]
}

export function Navbar (props: INavbarProps) {
    return (
        <div className={className(style.Navbar, {}, props.styles)}>
            <div className={style.links}>
                <AppLink to="/" styles={[style.mainLink]}>Main</AppLink>
                <AppLink to="/about">about</AppLink>
            </div>
        </div>
    );
}

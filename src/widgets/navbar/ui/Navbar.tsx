import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { className } from 'shared/lib/className';
import { AppLink } from 'shared/ui/appLink/ui/AppLink';
import { ThemeSwitcher } from 'widgets/themeSwitcher/ui/ThemeSwitcher';
import style from './Navbar.module.scss';

export interface INavbarProps {
    styles?: string[]
}

export const Navbar: FC<INavbarProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div className={className(style.Navbar, {}, props.styles)}>
            <div className={style.links}>
                <AppLink to="/" styles={[style.mainLink]}>{t('главная')}</AppLink>
                <AppLink to="/about">{t('о нас')}</AppLink>
            </div>
        </div>
    );
}

import * as React from 'react';
import { useTranslation } from 'react-i18next';

export interface IAboutPageProps {
}

export default function AboutPage (props: IAboutPageProps) {
    const { t } = useTranslation('about');
    return (
        <div>
            {t('текст')}
        </div>
    );
}

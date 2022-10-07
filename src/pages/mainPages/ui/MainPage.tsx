import { useTranslation } from "react-i18next";

export interface IMainPageProps {
}

export default function MainPage (props: IMainPageProps) {
    const { t } = useTranslation('main');
    
    return (
        <div>
            {t('текст')}
        </div>
    );
}

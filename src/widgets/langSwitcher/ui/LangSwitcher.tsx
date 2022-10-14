import { FC } from "react";
import { useTranslation } from "react-i18next";
import { className } from "shared/lib/className";
import { Button } from "shared/ui/button/ui/Button";
import style from "./LangSwitcher.module.scss";

export interface LangSwitcherProps {
	styles?: string[]
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ styles }) => {
	const { t, i18n } = useTranslation();
    
	const changeLang = () => {
		i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
	};

	return (
		<Button onClick={changeLang} className={className(style.LangSwitcher, {}, [...styles || []])}>
			{t("язык")}
		</Button>
	);
};
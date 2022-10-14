import { FC, useState } from "react";
import { className } from "shared/lib/className";
import { LangSwitcher } from "widgets/langSwitcher/ui/LangSwitcher";
import { ThemeSwitcher } from "widgets/themeSwitcher";
import style from "./Sidebar.module.scss";

export interface SidebarProps {
	styles?: string[]
}

export const Sidebar: FC<SidebarProps> = ({ styles }) => {
	const [collapsed, setCollapsed] = useState(false);

	return (
		<div className={className(style.Sidebar, { [style.collapsed]: collapsed }, [...styles || []])}>
			<button onClick={() => setCollapsed(prev => !prev)}>Toggle</button>
			<div className={style.switcher}>
				<ThemeSwitcher/>
				<LangSwitcher/>
			</div>
		</div>
	);
};
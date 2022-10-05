import style from "./App.module.scss";
import { useTheme } from "./providers/ThemeProvider";
import { className } from "shared/lib/className";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/navbar";



export default function App () {
	const {theme, changeTheme} = useTheme();
	return (
		<div className={className('app', {}, [theme])}>
			<Navbar/>
			<AppRouter/>
			<button onClick={changeTheme}>changeTheme</button>
		</div>
	);
}

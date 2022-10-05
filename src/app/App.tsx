import style from "./App.module.scss";
import {Link} from 'react-router-dom';
import { useTheme } from "./providers/ThemeProvider";
import { className } from "shared/lib/className";
import { AppRouter } from "./providers/router";



export default function App () {
	const {theme, changeTheme} = useTheme();
	return (
		<div className={className('app', {}, [theme])}>
			<button onClick={changeTheme}>changeTheme</button>
			<Link to="/about">about</Link>
			<Link to="/">Main</Link>
			<AppRouter/>
		</div>
	);
}

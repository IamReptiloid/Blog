import style from "./App.module.scss";
import {Routes, Route, Link} from 'react-router-dom';
import { Suspense } from "react";
import { useTheme } from "./providers/ThemeProvider";
import { className } from "shared/lib/className";
import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPages";


export default function App () {
	const {theme, changeTheme} = useTheme();
	return (
		<div className={className('app', {}, [theme])}>
			<button onClick={changeTheme}>changeTheme</button>
			<Link to="/about">about</Link>
			<Link to="/">Main</Link>
			<Suspense fallback={<div>Loading</div>}>
				<Routes>
						<Route path={"/about"} element={<AboutPage/>}/>
						<Route path={"/"} element={<MainPage/>}/>
				</Routes>
			</Suspense>
		</div>
	);
}

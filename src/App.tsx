import style from "./App.module.scss";
import {Routes, Route, Link} from 'react-router-dom';
import { MainPageLazy } from "./pages/mainPages/MainPage.Lazy";
import { AboutPageLazy } from "./pages/aboutPage/AboutPage.Lazy";
import { Suspense } from "react";
import { useTheme } from "./context/theme/UseTheme";
import { className } from "./helpers/className";


export default function App () {
	const {theme, changeTheme} = useTheme();
	return (
		<div className={className('app', {}, [theme])}>
			<button onClick={changeTheme}>changeTheme</button>
			<Link to="/about">about</Link>
			<Link to="/">Main</Link>
			<Suspense fallback={<div>Loading</div>}>
				<Routes>
						<Route path={"/about"} element={<AboutPageLazy/>}/>
						<Route path={"/"} element={<MainPageLazy/>}/>
				</Routes>
			</Suspense>

		</div>
	);
}

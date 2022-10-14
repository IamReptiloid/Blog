import "./shared/config/i18n";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "app/providers/ThemeProvider";
import "app/styles/index.scss";
import App from "app/App";
import { Suspense } from "react";

render(
	<BrowserRouter>
		<ThemeProvider>
			<Suspense fallback={<div>Loading</div>}>
				<App/>
			</Suspense>
		</ThemeProvider>
	</BrowserRouter>,
	document.getElementById("root"),
);
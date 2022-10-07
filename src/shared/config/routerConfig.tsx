import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPages";
import { RouteProps } from "react-router-dom";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutPath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about'
};

export const RoutConfig: RouteProps[] = [
    {
        path: RoutPath.main,
        element: <MainPage/>
    },
    {
        path: RoutPath.about,
        element: <AboutPage/>
    }
]

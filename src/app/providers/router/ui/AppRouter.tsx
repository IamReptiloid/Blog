import {Routes, Route} from 'react-router-dom';
import { Suspense } from "react";
import { AboutPage } from "pages/aboutPage";
import { MainPage } from "pages/mainPages";
import { RoutConfig } from 'shared/config/routerConfig';


export default function AppRouter () {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                    {RoutConfig.map(el => <Route path={el.path} element={el.element} key={el.path}/>)}
            </Routes>
        </Suspense>
    );
}

import {Routes, Route} from 'react-router-dom';
import { Suspense } from "react";
import { RoutConfig } from 'shared/config/routerConfig';


export default function AppRouter () {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                    {RoutConfig.map(el => <Route {...el} key={el.path}/>)}
            </Routes>
        </Suspense>
    );
}

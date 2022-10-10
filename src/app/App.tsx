import style from './App.module.scss';
import { useTheme } from './providers/ThemeProvider';
import { className } from 'shared/lib/className';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';

export default function App() {
    const { theme } = useTheme();
    return (
        <div className={className('app', {}, [theme])}>
            <Navbar/>
            <div className="page">
                <Sidebar/>
                <AppRouter/>
            </div>
        </div>
    );
}

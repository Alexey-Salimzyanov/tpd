import './styles/index.css';
import { Suspense} from 'react';
import { classNames } from '6_shared/lib/classNames/ClassNames';
import { AppRouter } from '1_app/routers';
import { Navbar } from '3_widgets/Navbar/ui/Navbar';

function App() {

    return (
        <div className={classNames('app')}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    );
}

export default App;

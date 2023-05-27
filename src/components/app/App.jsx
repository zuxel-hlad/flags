import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom';
import { Home, Details, NotFound } from '../../pages';

import Header from '../header/Header';
import Main from '../main/Main';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Header />
                <Main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/country/:name" element={<Details />} />
                        {/* <Route path="*" element={<NotFound />} /> */}
                        <Route path="/404" element={<NotFound />} />
                        <Route path="*" element={<Navigate replace to="/404" />} />
                    </Routes>
                </Main>
            </div>
        </Router>
    );
};
export default App;

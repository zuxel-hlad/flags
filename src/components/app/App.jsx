import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Details, ErrorPage } from '../../pages';

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
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Main>
            </div>
        </Router>
    );
};
export default App;

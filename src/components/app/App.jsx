import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { Home, Details, ErrorPage } from '../../pages';

import Header from '../header/Header';
import Main from '../main/Main';

const App = () => {
    const [countries, setCountries] = useState([]);
    
    return (
        <Router>
            <div className="App">
                <Header />
                <Main>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <Home
                                    countries={countries}
                                    setCountries={setCountries}
                                />
                            }
                        />
                        <Route path="/country/:name" element={<Details />} />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </Main>
            </div>
        </Router>
    );
};
export default App;

import { Routes, Route, Navigate } from 'react-router-dom';
import { FC } from 'react';
import { Home, Details, NotFound } from '../../pages';

import Header from '../header/Header';
import Main from '../main/Main';

const App: FC = () => {
    return (
        <div className="App">
            <Header />
            <Main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/country/:name" element={<Details />} />
                    <Route path="/404" element={<NotFound />} />
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
            </Main>
        </div>
    );
};
export default App;

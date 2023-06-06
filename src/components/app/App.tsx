import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { FC } from 'react';
import { router } from '../../router/intex';

import AOS from 'aos';
import 'aos/dist/aos.css';
import Header from '../header/Header';
import Main from '../main/Main';

const App: FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 500,
            easing: 'ease',
            once: false,
        });
        AOS.refresh();
    }, []);

    return (
        <div className="app">
            <Header />
            <Main>
                <Routes>
                    {router.map(({ element, path }, idx) => (
                        <Route path={path} Component={element} key={idx} />
                    ))}
                    <Route path="*" element={<Navigate replace to="/404" />} />
                </Routes>
            </Main>
        </div>
    );
};
export default App;

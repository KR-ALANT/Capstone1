import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';

import './Main.css';

const Main = () => {
    return (
        <div className="back-img">
            <Header />
            <main>
                {/* 메인 콘텐츠 */}
            </main>
            <Footer />
        </div>
    );
};

export default Main;

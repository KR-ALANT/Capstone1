import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Ask from './ask/Ask'; // Ask 페이지 컴포넌트를 가져온다
import Mypage from './mypage/MyPage'
import Point from './mypage/point/Point'
import Faq from './faq/Faq'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="point" element={<Point />} />
            <Route path="/faq" element={<Faq />} />
        </Routes>
    );
};


export default App;
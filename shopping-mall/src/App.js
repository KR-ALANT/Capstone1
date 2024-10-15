import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './Main'; // Main 컴포넌트를 가져온다
import Ask from './Ask'; // Ask 페이지 컴포넌트를 가져온다
import Mypage from './mypage/MyPage'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/mypage" element={<Mypage />} />
        </Routes>
    );
};


export default App;
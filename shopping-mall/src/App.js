import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './main/Main'; // Main 컴포넌트를 가져온다
import Ask from './ask/Ask'; // Ask 페이지 컴포넌트를 가져온다
import Mypage from './mypage/MyPage';
import Point from './mypage/point/Point';
import Coupon from './mypage/coupon/MyCoupon';
import Login from './login/Login';
import Faq from './faq/Faq';
import Cart from './cart/Cart';
import Rating from './mypage/rating/Rating'
import ForgotID from './forgotid/ForgotID'
import ForgotPW from './forgotpw/ForgotPW'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/point" element={<Point />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgotid" element={<ForgotID />} />
            <Route path="/forgotpw" element={<ForgotPW />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/rating" element={<Rating />} />
        </Routes>
    );
};


export default App;
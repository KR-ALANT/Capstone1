import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Main from './main/Main'; // Main 컴포넌트를 가져온다
import Ask from './ask/Ask'; // Ask 페이지 컴포넌트를 가져온다
import Mypage from './mypage/MyPage';
import Point from './mypage/point/Point';
import Coupon from './mypage/coupon/MyCoupon';
import Login from './login/Login';
import Join from './join/Join';
import Faq from './faq/Faq';
import Cart from './cart/Cart';
import Footer from './footer/Footer';
import Rating from './mypage/rating/Rating'
import Profile from './mypage/profile/Profile'
import ForgotID from './login/forgotid/ForgotID'
import ForgotPW from './login/forgotpw/ForgotPW'
import FoundID from './login/foundid/FoundID'
import FoundPW from './login/foundpw/FoundPW'
import Order from './mypage/order/MyOrder'
import Detail from './detail/Alldetail'
import All from './preview/All'

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/ask" element={<Ask />} />
            <Route path="/mypage" element={<Mypage />} />
            <Route path="/point" element={<Point />} />
            <Route path="/coupon" element={<Coupon />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/forgotid" element={<ForgotID />} />
            <Route path="/foundid" element={<FoundID />} />
            <Route path="/forgotpw" element={<ForgotPW />} />
            <Route path="/foundpw" element={<FoundPW />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/rating" element={<Rating />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/order" element={<Order />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/all" element={<All />} />
        </Routes>
    );
};


export default App;
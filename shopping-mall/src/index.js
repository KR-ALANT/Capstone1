import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // BrowserRouter를 임포트
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* App을 BrowserRouter로 감싸기 */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// 성능 측정을 시작하려면, 결과를 기록할 함수를 전달하거나
// 분석 엔드포인트로 전송할 수 있다. 자세한 내용은 https://bit.ly/CRA-vitals를 참조하라.
reportWebVitals();

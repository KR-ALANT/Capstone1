// footer.js
import style from './Footer.module.css';

function Footer() {
    return (
        <div className={style['Footer']}>
            <p>COMPANY : F.M.  CEO : 이채원</p>
            <p>COMPANY_REGNO : [033-760-8114]</p>
            <p>ADD : 강원도 원주시 흥업면 남원로 150 여운 CPO : 이채원(jennyq02@naver.com)</p>
            <p>신한 / 000-000000 : 이채원(F.M.)</p><br></br>
            <p>CS Center : AM11:00 ~ PM17:00</p>
            <p>Lunch time PM12:00~13:00</p>
            <p>WEEKEND / HOLIDAY OFF</p>
            <div className={style['Footer-links']}>
                <a href="/">HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="#instagram">INSTAGRAM</a>
            </div>
        </div>
    );
}

export default Footer;

// React 및 필요한 라이브러리 임포트
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Alldetail.module.css';
import Header from '../header/Header.js';

// 메인 컴포넌트 정의
const All = () => {
    const [wishlist, setWishlist] = useState([]); // 찜 목록 상태
    const [currentPage] = useState(1); // 현재 페이지 상태
    const itemsPerPage = 6; // 페이지 당 아이템 수
    const [products] = useState([ // 제품 데이터 (예시)
        { id: 1, path: '/detail', name: 'fleece high neck padded jacket', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/1.jpg`, date: new Date(2023, 10, 1), popularity: 5 },
    ]);

    // 현재 페이지의 제품 인덱스 계산
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct); // 현재 페이지의 제품 목록

    // 찜하기 토글 함수
    const toggleWishlist = (id) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id)); // 찜 목록에서 제거
        } else {
            setWishlist([...wishlist, id]); // 찜 목록에 추가
        }
    };


    return (
        <div className={styles["back-img"]}>
            <Header />
            <main>
                <div className={styles.all}>
                    {currentProducts.map(product => (
                        <div key={product.id} className={styles.product}>
                            {/* 상품 정보 */}
                            <div className={styles.productInfo}> 
                                <p className={styles.productName}>{product.name}</p>
                                <p className={styles.productPrice}>{product.price.toLocaleString()}원</p>
                            </div>
                            <Link to={product.path} className={styles.productImage}>
                                <img src={product.image} alt={product.name} className={styles.productImage} />
                            </Link>
                           
                            {/* 제품 옵션과 액션 버튼 */}
                            <div className={styles.productOptions}>
                                {/* 사이즈, 색상, 개수 선택 */}
                                <div className={styles.productButton}>
                                    <label>
                                        사이즈:
                                        <select className={styles.optionSelect}>
                                            <option value="S">S</option>
                                            <option value="M">M</option>
                                            <option value="L">L</option>
                                        </select>
                                    </label>
                                    <label>
                                        색상:
                                        <select className={styles.optionSelect}>
                                            <option value="pink">핑크</option>
                                            <option value="blue">블루</option>
                                            <option value="black">블랙</option>
                                        </select>
                                    </label>
                                    <label>
                                        개수:
                                        <input type="number" className={styles.optionInput} defaultValue={1} min={1} />
                                    </label>
                                </div>
                                <div className={styles.productActions}>
                                    <button className={styles.actionButton}>구매하기</button>
                                    <button className={styles.actionButton}>장바구니</button>
                                    <button 
                                        className={`${styles.actionButton} ${wishlist.includes(product.id) ? styles.active : ''}`} 
                                        onClick={() => toggleWishlist(product.id)}>
                                        찜하기
                                    </button>
                                </div>
                            </div>
    
                            {/* 상세정보 영역 */}
                            <div className={styles.detailContent}>
                                <img src={`${process.env.PUBLIC_URL}/image/cloth/1_1.jpg`} alt="추가 이미지" className={styles.detailImage} />
                                <p className={styles.detailText}>이것은 추가적인 텍스트입니다.</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* 리뷰 및 전체 목록 버튼 */}
                <div className={styles.reviewSection}>
                    <span className={styles.reviewText}>리뷰</span>
                    <button className={styles.allListButton}>전체 목록</button>
                </div>
                {/* 가로 선을 그리드 외부에 배치 */}
                <hr className={styles.horizontalLine} />

                {/* 큐앤에이 */}
                <div className={styles.qaSection}>
                    <span className={styles.qatext}>Q&A</span>
                    <div className={styles.buttonContainer}>
                        <button className={styles.listButton}>전체목록</button>
                        <button className={styles.writeButton}>작성하기</button>
                    </div>
                </div>
                {/* 가로 선을 그리드 외부에 배치 */}
                <hr className={styles.horizontalLine} />

                <table className={styles.inquiryTable}>
                        <thead>
                            <tr>
                                <th>No</th>
                                <th>Subject</th>
                                <th>Writer</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* 여기서 데이터를 동적으로 생성할 수 있습니다 */}
                            <tr>
                                <td>1</td>
                                <td>문의 사항 1</td>
                                <td>홍길동</td>
                                <td>2024-11-06</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>문의 사항 2</td>
                                <td>김철수</td>
                                <td>2024-11-05</td>
                            </tr>
                            {/* 추가적인 문의 사항이 있으면 여기에 추가 */}
                        </tbody>
                    </table>
            </main>
        </div>
    );
    
};

export default All;

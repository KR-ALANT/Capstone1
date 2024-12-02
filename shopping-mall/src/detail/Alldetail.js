// React 및 필요한 라이브러리 임포트
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './Alldetail.module.css';
import Header from '../header/Header.js';

// 메인 컴포넌트 정의
const Alldetail = () => {
    const [wishlist, setWishlist] = useState([]); // 찜 목록 상태
    const [currentPage] = useState(1); // 현재 페이지 상태
    const itemsPerPage = 6; // 페이지 당 아이템 수
    const location = useLocation(); // 현재 경로 확인
    const [products] = useState([
        { id: 1, path: '/detail/1', name: 'fleece high neck padded jacket', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/1.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/1_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category: ["all", "best", "new"] },
        { id: 2, path: '/detail/2', name: 'elegant wide baggy jeans', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/2.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/1_2.jpg`, date: new Date(2023, 9, 15), popularity: 3, category: ["all", "top"] },
        { id: 1, path: '/outer/1', name: 'hood type flight jumper', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/outer_1.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/outer_1_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category: ["all", "best", "new"] },
        { id: 2, path: '/outer/2', name: 'plaid over quilting shirts', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/outer_2.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/outer_2_1.jpg`, date: new Date(2023, 9, 15), popularity: 3, category: ["all", "top"] },
        { id: 1, path: '/top/1', name: 'rugby stripe knit', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/top_1.jpg`,  detailImage: `${process.env.PUBLIC_URL}/image/cloth/top_1_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category: ["all", "best", "new", "knit"] },
        { id: 2, path: '/top/2', name: 'maxi over long sleeve', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/top_2.jpg`,  detailImage: `${process.env.PUBLIC_URL}/image/cloth/top_2_1.jpg`, date: new Date(2023, 9, 15), popularity: 3, category: ["all", "best", "new", "tee"] },
        { id: 1, path: '/bottom/1', name: 'curvedness balloon denim', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/bottom_1.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/bottom_1_1.jpg`,date: new Date(2023, 10, 1), popularity: 5, category: ["all", "best", "new", "denim"] },
        { id: 2, path: '/bottom/2', name: 'double knee balloon pants', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/bottom_2.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/bottom_2_1.jpg`,date: new Date(2023, 9, 15), popularity: 3, category: ["all", "best", "new", "pants"] },
        { id: 1, path: '/etc/1', name: 'camptention corduroy cap', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/etc_1.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/etc_1_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category: ["all"] },
        { id: 2, path: '/etc/2', name: 'silver ball necklace (suede)', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/etc_2.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/etc_2_1.jpg`,  date: new Date(2023, 9, 15), popularity: 3, category: ["acc"] },
        { id: 3, path: '/etc/3',name: 'vintage leather biker bag', price: 150000, image: `${process.env.PUBLIC_URL}/image/cloth/etc_3.jpg`,detailImage: `${process.env.PUBLIC_URL}/image/cloth/etc_3_1.jpg`,  date: new Date(2023, 8, 20), popularity: 4, category: ["all"] },



    ]);

    // 현재 경로에 해당하는 제품 찾기
    const currentProduct = products.find(product => product.path === location.pathname);

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
                {/* 해당 경로에 맞는 제품만 렌더링 */}
                {currentProduct ? (
                    <div className={styles.product}>
                        {/* 상품 정보 */}
                        <div className={styles.productInfo}>
                            <p className={styles.productName}>{currentProduct.name}</p>
                            <p className={styles.productPrice}>{currentProduct.price.toLocaleString()}원</p>
                            <p className={styles.productCategory}>
                                {/* 카테고리 표시 */}
                                {currentProduct.category.join(', ')}
                            </p>
                        </div>
                        <Link to={currentProduct.path} className={styles.productImage}>
                            <img src={currentProduct.image} alt={currentProduct.name} className={styles.productImage} />
                        </Link>

                        {/* 제품 옵션과 액션 버튼 */}
                        <div className={styles.productOptions}>
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
                                    className={`${styles.actionButton} ${wishlist.includes(currentProduct.id) ? styles.active : ''}`}
                                    onClick={() => toggleWishlist(currentProduct.id)}
                                >
                                    찜하기
                                </button>
                            </div>
                        </div>

                        {/* 상세정보 영역 */}
                        <div className={styles.detailContent}>
                            <img src={currentProduct.detailImage} alt="추가 이미지" className={styles.detailImage} />
                            <p className={styles.detailText}>이것은 추가적인 텍스트입니다.</p>
                        </div>
                    </div>
                ) : (
                    <p className={styles.notFound}>해당 제품을 찾을 수 없습니다.</p>
                )}

                {/* 리뷰 및 전체 목록 버튼 */}
                <div className={styles.reviewSection}>
                    <span className={styles.reviewText}>리뷰</span>
                    <button className={styles.allListButton}>전체 목록</button>
                </div>
                <hr className={styles.horizontalLine} />

                {/* 큐앤에이 */}
                <div className={styles.qaSection}>
                    <span className={styles.qatext}>Q&A</span>
                    <div className={styles.buttonContainer}>
                        <button className={styles.listButton}>전체목록</button>
                        <button className={styles.writeButton}>작성하기</button>
                    </div>
                </div>
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
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Alldetail;

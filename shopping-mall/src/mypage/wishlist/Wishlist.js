import React, { useState } from 'react';
import styles from './Wishlist.module.css';
import Header from '../../header/Header.js';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([
        { id: 1, name: "상품이름", price: "0000원", image: `${process.env.PUBLIC_URL}/image/blue.jpeg` },
        { id: 2, name: "상품이름", price: "0000원", image: `${process.env.PUBLIC_URL}/image/blue.jpeg` },
        // 추가적인 관심상품을 여기 넣을 수 있습니다.
    ]);

    const [selectedItems, setSelectedItems] = useState([]);

    // 전체 선택/해제
    const handleSelectAll = (event) => {
        if (event.target.checked) {
            setSelectedItems(wishlist.map(product => product.id));
        } else {
            setSelectedItems([]);
        }
    };

    // 개별 체크박스 선택/해제
    const handleSelectItem = (productId) => {
        if (selectedItems.includes(productId)) {
            setSelectedItems(selectedItems.filter(id => id !== productId));
        } else {
            setSelectedItems([...selectedItems, productId]);
        }
    };

    // 개별 상품 삭제
    const handleDelete = (productId) => {
        const updatedWishlist = wishlist.filter(product => product.id !== productId);
        setWishlist(updatedWishlist);
        setSelectedItems(selectedItems.filter(id => id !== productId)); // 선택 상태도 업데이트
    };

    // 선택된 상품 삭제
    const handleDeleteSelected = () => {
        const updatedWishlist = wishlist.filter(product => !selectedItems.includes(product.id));
        setWishlist(updatedWishlist);
        setSelectedItems([]);
    };

    return (
        <div className={styles["back-img"]}>
            <Header />
            <main className={styles.mainContent}>
                <h1 className={styles.title}>관심상품</h1>
                <div className={styles.productContainer}>
                    {wishlist.length === 0 ? (
                        <p className={styles.emptyMessage}>관심상품 내용이 없습니다.</p>
                    ) : (
                        <table className={styles.productTable}>
                            <thead>
                                <tr>
                                    <th>
                                        <input
                                            type="checkbox"
                                            checked={selectedItems.length === wishlist.length && wishlist.length > 0}
                                            onChange={handleSelectAll}
                                        />
                                    </th>
                                    <th>이미지</th>
                                    <th>상품정보</th>
                                    <th>판매가</th>
                                    <th>선택</th>
                                </tr>
                            </thead>
                            <tbody>
                                {wishlist.map((product) => (
                                    <tr key={product.id} className={styles.product}>
                                        <td>
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(product.id)}
                                                onChange={() => handleSelectItem(product.id)}
                                            />
                                        </td>
                                        <td>
                                            <img src={product.image} alt={product.name} className={styles.productImage} />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.price}</td>
                                        <td>
                                            {/* 삭제 버튼 클릭 시 해당 상품 삭제 */}
                                            <button
                                                className={styles.deleteButton}
                                                onClick={() => handleDelete(product.id)}
                                            >
                                                삭제
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
                {/* 선택상품 삭제 버튼 */}
                {wishlist.length > 0 && (
                    <button
                        className={styles.deleteSelectedButton}
                        onClick={handleDeleteSelected}
                        disabled={selectedItems.length === 0}
                    >
                        선택상품을 삭제하기
                    </button>
                )}
            </main>
        </div>
    );
};

export default Wishlist;

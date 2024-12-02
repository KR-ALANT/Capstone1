import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './All.module.css';
import Header from '../header/Header.js';

const Top = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [wishlist, setWishlist] = useState([]);
    const [sortOption, setSortOption] = useState('name');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const [products, setProducts] = useState([
        { id: 1, path: '/top/1', name: 'rugby stripe knit', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/top_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category: ["best", "new", "knit"] },
        { id: 2, path: '/top/2', name: 'maxi over long sleeve', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/top_2.jpg`, date: new Date(2023, 9, 15), popularity: 3, category: ["best", "new", "tee"] },
        { id: 3, name: '상품명 3', price: 150000, image: `${process.env.PUBLIC_URL}/image/pink.jpeg`, date: new Date(2023, 8, 20), popularity: 4, category: ["best", "new"] },
        { id: 4, name: '상품명 4', price: 120000, image: `${process.env.PUBLIC_URL}/image/pink.jpeg`, date: new Date(2023, 9, 10), popularity: 2, category: "best" },
        { id: 5, name: '상품명 5', price: 80000, image: `${process.env.PUBLIC_URL}/image/blue.jpeg`, date: new Date(2023, 10, 5), popularity: 1, category: "best" },
        { id: 6, name: '상품명 6', price: 250000, image: `${process.env.PUBLIC_URL}/image/black.jpeg`, date: new Date(2023, 7, 30), popularity: 4, category: "best" },
        { id: 7, name: '상품명 7', price: 120000, image: `${process.env.PUBLIC_URL}/image/pink.jpeg`, date: new Date(2023, 9, 10), popularity: 7, category: "best" },
        { id: 8, name: '상품명 8', price: 80000, image: `${process.env.PUBLIC_URL}/image/blue.jpeg`, date: new Date(2023, 10, 5), popularity: 8, category: "best" },
        { id: 9, name: '상품명 9', price: 250000, image: `${process.env.PUBLIC_URL}/image/black.jpeg`, date: new Date(2023, 7, 30), popularity: 9, category: "best" },
        { id: 10, name: '상품명 10', price: 80000, image: `${process.env.PUBLIC_URL}/image/blue.jpeg`, date: new Date(2023, 10, 5), popularity: 8, category: "best" },
        { id: 11, name: '상품명 11', price: 250000, image: `${process.env.PUBLIC_URL}/image/black.jpeg`, date: new Date(2023, 7, 30), popularity: 9, category: "best" },
    ]);

    const filteredProducts = products.filter(product => 
        activeCategory === "all" || product.category.includes(activeCategory)
    );
    
    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const sortProducts = (option) => {
        setSortOption(option);
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            switch (option) {
                case 'name':
                    return a.name.localeCompare(b.name);
                case 'high':
                    return b.price - a.price;
                case 'low':
                    return a.price - b.price;
                case 'new':
                    return b.date - a.date;
                case 'best':
                    return b.popularity - a.popularity;
                default:
                    return 0;
            }
        });
        // 필터된 제품만 정렬하고, 그 결과를 업데이트
        setProducts(sortedProducts);
    };

    const toggleWishlist = (id) => {
        if (wishlist.includes(id)) {
            setWishlist(wishlist.filter(item => item !== id));
        } else {
            setWishlist([...wishlist, id]);
        }
    };

    return (
        <div className={styles["back-img"]}>
            <Header />
            <main>
                <div className={styles.all}>
                    <div className={styles.container}>
                        <div className={styles.title}>
                            top
                        </div>

                        <div className={styles.listcategory}>
                            <div className={styles.tabContainer}>
                                {["mtm", "hoddie", "knit","shirt","tee", "etc"].map(category => (
                                    <button
                                        key={category}
                                        className={`${styles.tabButton} ${activeCategory === category ? styles.active : ""}`}
                                        onClick={() => setActiveCategory(category)}
                                    >
                                        {category.toUpperCase()}
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.sortOptions}>
                            {["name", "high", "low", "new", "best"].map(option => (
                                <React.Fragment key={option}>
                                    <span
                                        className={`${styles.sortButton} ${sortOption === option ? styles.active : ''}`}
                                        onClick={() => sortProducts(option)}
                                    >
                                        {option.toUpperCase()}
                                    </span>
                                    {option !== "best" && <span className={styles.separator}>〡</span>}
                                </React.Fragment>
                            ))}
                        </div>

                        <div className={styles.productlist}>
                            <div className={styles.productGrid}>
                                {currentProducts.map(product => (
                                    <div key={product.id} className={styles.product}>
                                        <Link to={product.path}>
                                            <img src={product.image} alt={product.name} className={styles.productImage} />
                                        </Link>
                                        <div className={styles.productHeader}>
                                            <p className={styles.productName}>{product.name}</p>
                                            <button
                                                className={`${styles.wishlistButton} ${wishlist.includes(product.id) ? styles.active : ''}`}
                                                onClick={() => toggleWishlist(product.id)}
                                            >
                                                찜하기
                                            </button>
                                        </div>
                                        <div className={styles.productInfo}>
                                            <p className={styles.productPrice}>{product.price.toLocaleString()}원</p>
                                            <p className={styles.cart}>장바구니 담기</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={styles.pagination}>
                            {Array.from({ length: totalPages }, (_, index) => (
                                <button
                                    key={index + 1}
                                    className={`${styles.pageButton} ${currentPage === index + 1 ? styles.active : ''}`}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Top;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styles from './All.module.css';
import Header from '../header/Header.js';

const All = () => {
    const [wishlist, setWishlist] = useState([]);
    const [sortOption, setSortOption] = useState('name');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;
    const location = useLocation();
    const [products, setProducts] = useState([
        { id: 1, path: '/all/1', name: '상품명 1', price: 100000, image: `${process.env.PUBLIC_URL}/image/pink.jpeg`, date: new Date(2023, 10, 1), popularity: 5 },
        { id: 2, name: '상품명 2', price: 200000, image: `${process.env.PUBLIC_URL}/image/blue.jpeg`, date: new Date(2023, 9, 15), popularity: 3 },
        { id: 3, name: '상품명 3', price: 150000, image: `${process.env.PUBLIC_URL}/image/black.jpeg`, date: new Date(2023, 8, 20), popularity: 4 },
        { id: 4, name: '상품명 4', price: 120000, image: `${process.env.PUBLIC_URL}/image/pink.jpeg`, date: new Date(2023, 9, 10), popularity: 2 },
        { id: 5, name: '상품명 5', price: 80000, image: `${process.env.PUBLIC_URL}/image/blue.jpeg`, date: new Date(2023, 10, 5), popularity: 1 },
        { id: 6, name: '상품명 6', price: 250000, image: `${process.env.PUBLIC_URL}/image/black.jpeg`, date: new Date(2023, 7, 30), popularity: 4 },
        { id: 7, name: '상품명 7', price: 120000, image: `${process.env.PUBLIC_URL}/image/pink.jpeg`, date: new Date(2023, 9, 10), popularity: 7 },
        { id: 8, name: '상품명 8', price: 80000, image: `${process.env.PUBLIC_URL}/image/blue.jpeg`, date: new Date(2023, 10, 5), popularity: 8 },
        { id: 9, name: '상품명 9', price: 250000, image: `${process.env.PUBLIC_URL}/image/black.jpeg`, date: new Date(2023, 7, 30), popularity: 9 },
    ]);

    const indexOfLastProduct = currentPage * itemsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(products.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const sortProducts = (option) => {
        setSortOption(option);
        const sortedProducts = [...products].sort((a, b) => {
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
                    <div className={styles.listcategory}>
                        <Link to="/all" className={`${styles.listword} ${location.pathname === '/all' ? styles.active : ''}`}>All</Link>
                        <Link to="/best" className={`${styles.listword} ${location.pathname === '/best' ? styles.active : ''}`}>BEST</Link>
                        <Link to="/new" className={`${styles.listword} ${location.pathname === '/new' ? styles.active : ''}`}>NEW</Link>
                        <Link to="/outer" className={`${styles.listword} ${location.pathname === '/outer' ? styles.active : ''}`}>OUTER</Link>
                        <Link to="/top" className={`${styles.listword} ${location.pathname === '/top' ? styles.active : ''}`}>TOP</Link>
                        <Link to="/bottom" className={`${styles.listword} ${location.pathname === '/bottom' ? styles.active : ''}`}>BOTTOM</Link>
                        <Link to="/etc" className={`${styles.listword} ${location.pathname === '/etc' ? styles.active : ''}`}>ETC</Link>
                    </div>

                    <div className={styles.sortOptions}>
                        <span className={`${styles.sortButton} ${sortOption === 'name' ? styles.active : ''}`} onClick={() => sortProducts('name')}>NAME</span>
                        <span className={styles.separator}>〡</span>
                        <span className={`${styles.sortButton} ${sortOption === 'high' ? styles.active : ''}`} onClick={() => sortProducts('high')}>HIGH</span>
                        <span className={styles.separator}>〡</span>
                        <span className={`${styles.sortButton} ${sortOption === 'low' ? styles.active : ''}`} onClick={() => sortProducts('low')}>LOW</span>
                        <span className={styles.separator}>〡</span>
                        <span className={`${styles.sortButton} ${sortOption === 'new' ? styles.active : ''}`} onClick={() => sortProducts('new')}>NEW</span>
                        <span className={styles.separator}>〡</span>
                        <span className={`${styles.sortButton} ${sortOption === 'best' ? styles.active : ''}`} onClick={() => sortProducts('best')}>BEST</span>
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
            </main>
        </div>
    );
};

export default All;

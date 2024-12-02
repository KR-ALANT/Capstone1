import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './All.module.css';
import Header from '../header/Header.js';

const All = () => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [wishlist, setWishlist] = useState([]);
    const [sortOption, setSortOption] = useState('name');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const [products, setProducts] = useState([
        { id: 1, path: '/detail/1', name: 'fleece high neck padded jacket', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/1.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/1_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category: ["all", "best"] },
        { id: 2, path: '/detail/2', name: 'elegant wide baggy jeans', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/2.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/1_2.jpg`, date: new Date(2023, 9, 15), popularity: 3, category: ["all", "best"] },
        { id: 3, path: '/outer/1', name: 'hood type flight jumper', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/outer_1.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/outer_1_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category: ["all", "best"]  },
        { id: 4, path: '/outer/2', name: 'plaid over quilting shirts', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/outer_2.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/outer_2_1.jpg`, date: new Date(2023, 9, 15), popularity: 3, category: ["all", "best"]  },
        { id: 5, path: '/top/1', name: 'rugby stripe knit', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/top_1.jpg`,  detailImage: `${process.env.PUBLIC_URL}/image/cloth/top_1_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category:["all", "new"]  },
        { id: 6, path: '/top/2', name: 'maxi over long sleeve', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/top_2.jpg`,  detailImage: `${process.env.PUBLIC_URL}/image/cloth/top_2_1.jpg`, date: new Date(2023, 9, 15), popularity: 3, category: ["all", "new"] },
        { id: 7, path: '/bottom/1', name: 'curvedness balloon denim', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/bottom_1.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/bottom_1_1.jpg`,date: new Date(2023, 10, 1), popularity: 5, category: ["all", "new"] },
        { id: 8, path: '/bottom/2', name: 'double knee balloon pants', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/bottom_2.jpg`, detailImage: `${process.env.PUBLIC_URL}/image/cloth/bottom_2_1.jpg`,date: new Date(2023, 9, 15), popularity: 3, category: ["all", "new"] },
        { id: 9, path: '/etc/1', name: 'camptention corduroy cap', price: 100000, image: `${process.env.PUBLIC_URL}/image/cloth/etc_1.jpg`, date: new Date(2023, 10, 1), popularity: 5, category: ["all", "new"] },
        { id: 10, path: '/etc/2', name: 'silver ball necklace (suede)', price: 200000, image: `${process.env.PUBLIC_URL}/image/cloth/etc_2.jpg`, date: new Date(2023, 9, 15), popularity: 3, category: ["all", "new"] },
        { id: 11, path: '/etc/3', name: 'vintage leather biker bag', price: 150000, image: `${process.env.PUBLIC_URL}/image/cloth/etc_3.jpg`, date: new Date(2023, 8, 20), popularity: 4, category: ["all", "new"] },
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
                            {activeCategory.toUpperCase()}
                        </div>

                        <div className={styles.listcategory}>
                            <div className={styles.tabContainer}>
                                {["all", "best", "new"].map(category => (
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

export default All;

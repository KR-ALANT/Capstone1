import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Faq.module.css';

const FaqComponent = () => {
  const [searchActive, setSearchActive] = useState(false);
  const [searchInput, setSearchInput] = useState('');

  const toggleSearch = () => {
    setSearchActive(!searchActive);
    if (!searchActive) {
      setSearchInput('');
    }
  };

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearch = () => {
    console.log('Searching for:', searchInput);
    setSearchInput('');
  };

  const categories = [
    { name: '자주 묻는 질문', value: 'all' },
    { name: '카테고리 1', value: 'category1' },
    { name: '카테고리 2', value: 'category2' },
  ];

  const qnaList = [
    { category: 'category1', question: 'What is that? 1', answer: 'This is 1' },
    { category: 'category2', question: 'What is that? 2', answer: 'This is 2' },
    { category: 'category3', question: 'What is that? 3', answer: 'This is React. 3' },
    { category: 'category1', question: 'What is that? 4', answer: 'This is React. 4' },
    { category: 'category2', question: 'What is that? 5', answer: 'This is React. 5' },
    { category: 'category3', question: 'What is that? 6', answer: 'This is React. 6' },
  ];

  const [category, setCategory] = useState('all');
  const [cardOnOff, setCardOnOff] = useState(qnaList);

  const getQnACard = (item, index) => {
    return (
      <div className={styles.faqCard} key={index}>
        <div
          className={styles.faqCardTitle}
          onClick={() => {
            let tempCard = [...cardOnOff];
            tempCard[index].show = !tempCard[index].show;
            setCardOnOff(tempCard);
          }}
        >
          <span className={styles.questionMark}>Q.</span>
          <span>{item.question}</span>
        </div>
        <div className={item.show ? styles.faqCardAnswer : `${styles.faqCardAnswer} ${styles.faqCardNone}`}>
          <span className={styles.answerMark}>A.</span>
          <span>{item.answer}</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setCardOnOff(
      qnaList.map((item) => ({ ...item, show: false }))
    );
  }, []);

  const filteredQnA = cardOnOff.filter((item) => category === 'all' || category === item.category);

  return (
    <div className={styles.backImg}>
      <header>
        <div className="menu-bar">
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <nav className="menu">
            <label htmlFor="menu-toggle" className="close-icon">X</label>
            <div className="menu-bottom">
              <div className="shop">
                <span className="main-category">SHOP</span>
                <a href="#" className="sub-category">All</a>
                <a href="#" className="sub-category">Best</a>
                <a href="#" className="sub-category">New</a>
                <a href="#" className="sub-category">Outer</a>
                <a href="#" className="sub-category">Top</a>
                <a href="#" className="sub-category">Bottom</a>
                <a href="#" className="sub-category">Etc</a>
              </div>
              <div className="company">
                <span className="main-category">Q&A</span>
                <Link to="/Ask" className="sub-category">Ask</Link>
                <Link to="/Faq" className="sub-category">FAQ</Link>
              </div>
            </div>
          </nav>
        </div>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/image/logo.png`} alt="Logo" className="logo" />
        </Link>
        <div className="header-icons">
          <a href="#" className="icon">join</a>
          <a href="#" className="icon">login</a>
          <Link to="/MyPage" className="icon">mypage</Link>
          <a href="#" className="icon" onClick={toggleSearch}>search</a>
          <a href="#" className="icon">cart</a>
        </div>
      </header>
      <div className={`search-bar ${searchActive ? 'active' : ''}`}>
        <input
          type="text"
          placeholder="Search..."
          className="search-input"
          value={searchInput}
          onChange={handleInputChange}
        />
        <button className="search-btn" onClick={handleSearch}>Search</button>
        <button className="back-btn" onClick={toggleSearch}>Back</button>
      </div>
      <main>
        <div className={styles.faqWrapper}>
          <div className={styles.categoryFilter}>
            {categories.map((cat) => (
              <button
                key={cat.value}
                className={category === cat.value ? styles.active : ''}
                onClick={() => setCategory(cat.value)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <div className={styles.faqList}>
            {filteredQnA.map((item, index) => getQnACard(item, index))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default FaqComponent;

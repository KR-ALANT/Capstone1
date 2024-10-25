import React from 'react';
import styles from './Rating.module.css';
import Header from '../../header/Header.js'

const Rating = () =>{

  return(
    <div>
      <Header />
      <main>
        <div>
          <div className={styles.mr}>
            <p>Rating</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Rating;
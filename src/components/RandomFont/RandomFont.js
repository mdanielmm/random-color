import React from 'react';
import styles from './RandomFont.module.css';

const randomFont = (props) => {    
    return(
        <div className={styles.div} onClick={props.clicked} >
            <h1>RANDOM FONT</h1>
        </div>
    )
};

export default randomFont;

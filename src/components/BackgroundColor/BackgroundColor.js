import React from 'react';
import styles from './BackgroundColor.module.css';

const backgoundColor = (props) => {    

    return(
        <div className={styles.div} onClick={props.clicked}>
            <h1>Random background color</h1>
        </div>
    )
};

export default backgoundColor;


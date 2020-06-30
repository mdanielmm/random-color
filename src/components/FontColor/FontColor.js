import React from 'react';
import styles from './FontColor.module.css';

const fontColor = (props) => {    

    return(
        <div className={styles.div} onClick={props.clicked}>
            <h1>Random font color</h1>
        </div>
    )
};

export default fontColor;

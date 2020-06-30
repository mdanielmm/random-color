import React, { Component } from 'react';
import { connect } from 'react-redux';

import BackgoundColor from '../../components/BackgroundColor/BackgroundColor';
import styles from './Box.module.css';
import FontColor from '../../components/FontColor/FontColor';
import RFont from '../../components/RandomFont/RandomFont';

class Box extends Component {
    render () {
        const { bclr, fclr, font, changeBackgroundColor, changeFontColor, changeFont } = this.props;

        return (
            <div className={styles.box} style={{backgroundColor: bclr, color: fclr, fontFamily: font}}>
                <BackgoundColor clicked={changeBackgroundColor}/> 
                <h1 className={styles.info} style={{backgroundColor: fclr, color: bclr}}>
                    {bclr}
                </h1>

                <FontColor clicked={changeFontColor}/>
                <h1 className={styles.info} style={{backgroundColor: fclr, color: bclr}}>
                    {fclr}
                </h1>

                <RFont clicked={changeFont}/>
                <h1 className={styles.info} style={{backgroundColor: fclr, color: bclr}}>
                    {font}
                </h1>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        bclr: state.backgroundColor,
        fclr: state.fontColor,
        font: state.font
    }
}

const mapDispatchToProps = dispatch => {
    return {
        changeBackgroundColor: () => dispatch({type: 'BACKGROUND_COLOR'}),
        changeFontColor: () => dispatch({type: 'FONT_COLOR'}),
        changeFont: () => dispatch({type: 'FONT'})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Box);
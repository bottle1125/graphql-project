import React, { Component } from "react";
import { render } from "react-dom";
import Carousel from './carousel';
import styles from '../css/home-container.css';

class HomeContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            images: [
                "https://st0.dancf.com/xsb/4/banners/0/20180003-165943-2.png",
                "https://st0.dancf.com/xsb/1/banners/32/20180022-174356-1.png",
                "https://st0.dancf.com/xsb/4/banners/31/20171029-164034-1.png"
            ]
        }
    }

    render() {
        return (
            <div className={ styles.wrap }>
                <div className={ styles.container }>
                    <div className={ styles.leftContainer }>
                        <div className={ styles.date }></div>
                        <div className={ styles.introduction }></div>
                        <div className={ styles.hobby }></div>
                    </div>
                    <div className={ styles.rightContainer }>
                        <div className={ styles.imageWrap }>
                            <Carousel images={this.state.images} />
                        </div>
                        <div className={ styles.stats }>
                            <div className={ styles.topTitle }></div>
                            <div className={ styles.bottomCount }>
                                <div className={ styles.pointCount }></div>
                                <div className={ styles.dayCount }></div>
                            </div>
                        </div>
                        <div className={ styles.contact }></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HomeContainer;

import React, { Component } from 'react';
import { render } from 'react-dom';
import classNames from 'classnames/bind';
import styles from '../css/carousel.css';

const cx = classNames.bind(styles);

class Carousel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            key: 0
        }

        this.toggleImage = this.toggleImage.bind(this);
    }

    toggleImage(key) {
        this.setState({
            key: key
        });
    }

    render() {
        const { images } = this.props;

        const ImageItems = images.map((item, key) => 
            <img src={item} key={key} className={ cx({
                image: true,
                imgActive: this.state.key === key,
                imgPrev: this.state.key === key+1
            }) } />
        );

        const PointItems = images.map((item, key) => 
            <a className={ styles.point } key={key} onClick={() => { this.toggleImage(key) }}>
                <span className={ cx({
                    pointItem: true,
                    pointItemActive: this.state.key === key
                }) }></span>
            </a>
        );

        return (
            <div className={ styles.carouselWrap }>
                <div className={ styles.pointWrap }>
                    { PointItems }
                </div>
                <div className={ styles.imageWrap }>
                    { ImageItems }
                </div>
            </div>
        )
    }

    componentDidMount() {
        const { images } = this.props;
        const len = images.length;
        const timer = setInterval(() => {
            let { key } = this.state;
            if(key === len - 1) {
                this.setState({
                    key: 0
                })
            }
            else {
                this.setState({
                    key: ++key
                });
            }
        }, 5000);
    }
};

export default Carousel;
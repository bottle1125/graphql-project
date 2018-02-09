import React, { Component } from "react";
import { render } from "react-dom";
import classNames from 'classnames/bind';
import styles from '../css/card.css';

const cx = classNames.bind(styles);

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            reveal: false
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            const innerHeight = window.innerHeight;
            if(this.cardItem.getBoundingClientRect().top <= innerHeight) {
                if(!this.state.reveal) {
                    this.setState({
                        reveal: true
                    });
                }
            }
        })
    }

    render() {
        const { direction } = this.props;
        const { reveal } = this.state;
        return (
           <li className={ cx({
               timeElementLeft: direction === 'left' && !reveal,
               timeElementRight: direction === 'right' && !reveal,
               timeElementLeftActive: direction === 'left' && reveal,
               timeElementRightActive: direction === 'right' && reveal,
           }) }
           ref={ cardItem => { this.cardItem = cardItem } }
           ></li>
        )
    }
}

export default Card;

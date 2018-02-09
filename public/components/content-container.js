import React, { Component } from "react";
import { render } from "react-dom";
import Card from './card';

import styles from '../css/content-container.css';

class ContentContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardDatas: [{
                data: 1,
                reveal: false
            }, {
                data: 2,
                reveal: false
            }, {
                data: 3,
                reveal: false
            }]
        };

    }

    render() {
        const cardDatas = this.state.cardDatas;
        const cardItems = cardDatas.map((item, key) => 
            <Card
                key={ key }
                direction={ key%2 > 0 ? 'left' : 'right' }
            />
        );

        return (
           <div>
                <div className={ styles.timeLine }>
                    <span className={ styles.arrow }></span>
                </div>
                <ul className={ styles.timeLineWrap }>
                    <li className={ styles.pageLine }></li>

                    { cardItems }
                </ul>
           </div>
        )
    }
}

export default ContentContainer;

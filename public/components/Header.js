import React, { Component } from 'react';
import { render } from 'react-dom';

import BackgroundImage from '../../assets/images/background.png';
import style from '../common/common.css'

const Header = (props) => {
    // const headerStyle = {
    //     width: "100%",
    //     height: "800px",
    //     backgroundImage: `url(${BackgroundImage})`,
    //     backgroundSize: "contain"
    // }
    return (
        <div>
            <h1 className="title">hello world!</h1>
        </div>
    );
};

export default Header;
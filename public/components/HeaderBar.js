import React, { Component } from 'react';
import { render } from 'react-dom';

import styles from '../css/header.css';

const Header = (props) => {
    return (
        <header>
           <div className={styles.title}>xxx</div>
           <div className={styles.blank}></div>
           <div className="span4"></div>
        </header>
    );
};

export default Header;
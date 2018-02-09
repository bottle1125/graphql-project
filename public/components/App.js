import React, { Component } from "react";
import { render } from "react-dom";

import HeaderBar from './header-bar';
import HomeContainer from "./home-container";
import ContentContainer from './content-container';
import styles from "../common/common.css"; 

const App = (props) => {
    return (
        <div className={ styles.container }>
            <HeaderBar />
            <HomeContainer />
            <ContentContainer />
        </div>
    )
}

export default App;

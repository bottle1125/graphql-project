import React, { Component } from "react";
import { render } from "react-dom";

import HeaderBar from './HeaderBar';
import Container from "./Container";
import styles from "../common/common.css"; 

const App = (props) => {
    return (
        <div className={ styles.container }>
            <HeaderBar />
            <Container />
        </div>
    )
}

export default App;

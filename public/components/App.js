import React, { Component } from "react";
import { render } from "react-dom";

import HeaderBar from './HeaderBar';
import AlreadyReaded from "./AlreadyReaded";
import styles from "../common/common.css"; 

const App = (props) => {
    return (
        <div className={ styles.container }>
            <HeaderBar />
            {/* <AlreadyReaded /> */}
        </div>
    )
}

export default App;

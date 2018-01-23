import React, { Component } from "react";
import { render } from "react-dom";

import Header from './Header';
import AlreadyReaded from "./AlreadyReaded";

const App = (props) => {
    return (
        <div>
            <Header />
            <AlreadyReaded />
        </div>
    )
}

export default App;

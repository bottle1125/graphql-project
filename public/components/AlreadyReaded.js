import React, { Component } from "react";
import { render } from "react-dom";

const AlreadyReaded = (props) => {
    const listStyle = {
        color: "#f00"
    }
    return (
        <div>
            <ul style={ listStyle }>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default AlreadyReaded;

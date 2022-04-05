import React from 'react';
import Head from "./Head.js";
import SliderDriver from "./SliderDriver.js";
import "./css/style.css"

function Main(){
    return(
        <div className="mainFrame">
            <Head />
            <SliderDriver />
        </div>
    );
}

export default Main;
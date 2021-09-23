import React from "react";
import '../css/Quora.css';
import Feed from "./Feed.js";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Widget from "./Widget.js";

function Quora() {
    return(
        <div className = "quora">
            <Navbar />
            <div className = "quora__content">
                <Sidebar />
                <Feed />
                <Widget />
            </div>
        </div>
    );
}

export default Quora;
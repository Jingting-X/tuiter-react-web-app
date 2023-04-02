import React from "react";
import "./index.css";
import TuitsList from "../tuits/tuit-list";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <h4>Home</h4>
            <div className="list-group">
                <WhatsHappening/>
                <TuitsList/>
            </div>
        </div>
    );
};

export default HomeComponent;
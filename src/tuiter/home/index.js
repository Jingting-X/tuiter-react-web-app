import React from "react";
import "./index.css";
import posts from './posts-home.json'
import PostHomeItem from "./post-home-item";
import TuitList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
    return (
        <div>
            <h4>Home</h4>
            <div className="list-group">
                <WhatsHappening/>
                <TuitList/>
            </div>
        </div>
        // <ul className='list-group'>
        //     {
        //         posts.map(post => <PostHomeItem post={post}/>)
        //     }
        // </ul>
    );
};

export default HomeComponent;
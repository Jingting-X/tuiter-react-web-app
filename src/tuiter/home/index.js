import React from "react";
import "./index.css";
import posts from './posts-home.json'
import PostHomeItem from "./post-home-item";

const HomeComponent = () => {
    return (
        <ul className='list-group'>
            {
                posts.map(post => <PostHomeItem post={post}/>)
            }
        </ul>
    );
};

export default HomeComponent;
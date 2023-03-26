import React from "react";
import {useDispatch} from "react-redux";
import {likeToggle} from "./tuits-reducer";

const TuitStats = ({
                       tuit =
                           {
                               "_id": 345,
                               "topic": "Space",
                               "userName": "SpaceX",
                               "time": "2h",
                               "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
                               "image": "spacex.png",
                               "liked": true,
                               "replies": 345,
                               "retuits": 321,
                               "likes": 1234,
                               "handle": "@spacex",
                               "tuit":
                                   "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed. Cybertruck is built with an exterior shell made for ultimate durability and passenger protection, Starting with a nearly impenetrable exoskeleton, every component is designed for superior strength and endurance, from Ultra-Hard 30X Cold-Rolled stainless-steel structural skill to Tesla armor glass."
                           }
                   }
) => {
    const dispatch = useDispatch();
    const likeToggleHandler = (tuit) => {
        dispatch(likeToggle(tuit))
    }
    return (
        <div className="row pt-2">
            <div className="col-3">
                <i className="bi bi-chat text-secondary"></i>
                <span className="text-secondary ps-2">{tuit.replies}</span></div>
            <div className="col-3 d-flex">
                <i className="bi bi-arrow-repeat text-secondary"></i><span
                className="text-secondary ps-2">{tuit.retuits}</span></div>
            <div className="col-3 text-secondary">
                <button onClick={() => likeToggleHandler(tuit)}
                        className={`${tuit.liked ? `bi bi-heart-fill wd-liked-color wd-stats-button` : `bi bi-heart wd-stats-button`}`}></button>
                <span
                    className="ps-2">{tuit.likes}</span>
            </div>
            <div className="col-3"><i className="bi bi-share text-secondary"></i>
            </div>
        </div>
    )
        ;
}
export default TuitStats;
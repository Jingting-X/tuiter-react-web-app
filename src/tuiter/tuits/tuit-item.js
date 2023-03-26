import React from "react";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
import TuitStats from "./tuit-stats";

const TuitItem = ({
                      tuit =
                          {
                              "_id": 123,
                              "topic": "Space",
                              "userName": "SpaceX",
                              "time": "2h",
                              "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
                              "image": "spacex.jpeg",
                              "liked": true,
                              "replies": 123,
                              "retuits": 432,
                              "likes": 2345,
                              "handle": "@spacex",
                              "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars."
                          }
                  }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuit(id));
    }
    return (
        <div className="border p-2 flex-container-flex">
            <div className="d-flex pb-2">
                <img className="rounded-circle wd-profile-avatar" alt=""
                     src={`/images/${tuit.image}`}/>
                <div className="flex-container-flex ps-2 wd-tuit-width">
                    <div className="row">
                        <div className="col-10 d-flex">
                            <div className="fw-bold pe-1">{tuit.userName}</div>
                            <i className="bi bi-check-circle-fill table-primary pe-1"
                               style={{color: "#0096FF"}}></i>
                            <div className="text-secondary"> {tuit.handle} · {tuit.time}</div>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-x-lg float-end" onClick={() => deleteTuitHandler(tuit._id)}></i>
                        </div>
                    </div>
                    <div className="mb-2 text-secondary">
                        {tuit.tuit}
                    </div>
                    <TuitStats key={tuit._id} tuit={tuit}/>

                </div>
            </div>
        </div>

    );
}
export default TuitItem;
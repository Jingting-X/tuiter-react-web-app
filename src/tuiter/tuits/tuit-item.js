import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({
                      tuit =
                          {}
                  }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-1">
                    <img className="rounded-pill" width="48px" height="48px" alt=""
                         src={`/images/${tuit.image}`}/>
                </div>
                <div className="col-10">
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
        </li>

    );
}
export default TuitItem;
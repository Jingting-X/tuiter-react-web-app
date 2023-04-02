import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({
                       tuit =
                           {}
                   }
) => {
    const dispatch = useDispatch();

    return (
        <div className="row pt-2">
            <div className="col-2">
                <i className="bi bi-chat text-secondary"></i>
                <span className="text-secondary ps-2">{tuit.replies}</span></div>
            <div className="col-2 d-flex">
                <i className="bi bi-arrow-repeat text-secondary"></i>
                <span className="text-secondary ps-2">{tuit.retuits}</span></div>
            <div className="col-3 text-secondary">
                {tuit.liked ? <i className="bi bi-heart-fill text-danger" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes - 1,
                    }))}
                    ></i>
                    : <i className="bi bi-heart" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        liked: !tuit.liked,
                        likes: tuit.likes + 1,
                    }))}
                    ></i>
                }
                <span className="ps-2">{tuit.likes}</span>
            </div>
            <div className="col-3 text-secondary">
                {tuit.disliked ?
                    <i className="bi bi-hand-thumbs-down-fill" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        disliked: !tuit.disliked,
                        dislikes: tuit.dislikes - 1
                    }))}
                    ></i>
                    : <i className="bi bi-hand-thumbs-down" onClick={() => dispatch(updateTuitThunk({
                        ...tuit,
                        disliked: !tuit.disliked,
                        dislikes: tuit.dislikes + 1
                    }))}
                    ></i>}

                <span className="ps-2">{tuit.dislikes}</span>
            </div>
            <div className="col-2"><i className="bi bi-share text-secondary"></i>
            </div>
        </div>
    );
}
export default TuitStats;
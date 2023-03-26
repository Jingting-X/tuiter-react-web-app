import TuitItem from "./tuit-item";
import React from "react";
import "./index.css";
import {useSelector} from "react-redux";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    return (
        <div>
            {
                tuits.map(tuit => {
                        return <TuitItem key={tuit._id} tuit={tuit}/>;
                    }
                )
            }
        </div>

    );

};
export default TuitList;

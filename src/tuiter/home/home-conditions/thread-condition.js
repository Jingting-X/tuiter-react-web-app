import React from "react";

const ThreadCondition = ({
                             thread = {
                                 "hasThread": true,
                             },
                         }) => {
    if (thread.hasThread) {
        return (
            <div>
                <a href="#thread" className="wd-link">Show this thread</a>
            </div>
        );
    } else {
        return (``);
    }
};

export default ThreadCondition;
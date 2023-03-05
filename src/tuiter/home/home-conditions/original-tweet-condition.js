import React from "react";

const OriginalTweetCondition = ({
                                    originalTweet = {
                                        "hasOriginalTweet": false,
                                        "avatar": "spacex.jpeg",
                                        "userName": "SpaceX",
                                        "handle": "SpaceX",
                                        "time": "16h",
                                        "content": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage -> starlink.com/rv",
                                    },
                                }
    ) => {
        if (originalTweet.hasOriginalTweet) {
            return (
                <div className="rounded-4 border border-secondary p-2">
                    <div className="d-flex align-items-center">
                        <img className="rounded-circle wd-avatar-small me-1" alt=""
                             src={`${originalTweet.avatar}`}/>
                        <div className="fw-bold pe-1">{originalTweet.userName}</div>
                        <i className="bi bi-check-circle-fill table-primary pe-1" style={{color: "#009dff"}}></i>
                        <div
                            className="text-secondary"> @{originalTweet.handle} · {originalTweet.time}</div>
                    </div>
                    <div className="text">{originalTweet.content}</div>
                </div>
            );
        } else {
            return (``);
        }
    };

export default OriginalTweetCondition;
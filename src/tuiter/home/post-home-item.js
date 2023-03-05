import React from "react";
import RetweetCondition from "./home-conditions/retweet-condition";
import ImageCondition from "./home-conditions/image-condition";
import OriginalTweetCondition from "./home-conditions/original-tweet-condition";
import ThreadCondition from "./home-conditions/thread-condition";

const PostHomeItem = ({
                      post =
                          {
                              "retweet": true,
                              "retweetUser": "Elon Musk",
                              "avatar": "spacex.jpeg",
                              "userName": "SpaceX",
                              "handle": "SpaceX",
                              "time": "23h",
                              "content": "Dennis and Akiko Tito are the first two crew members on Starship's second commercial spaceflight around the Moon",
                              "hasImage": true,
                              "image": "post_img_3.jpeg",
                              "hasOriginalTweet": false,
                              "originalTweet": {},
                              "comments": "595",
                              "forwards": "1,168",
                              "likes": "11.1K",
                              "hasThread": true
                          },
                  }
) => {
    return (
        <div className="border p-2 flex-container-flex">
            <RetweetCondition retweet={{"retweet": post.retweet, "retweetUser": `${post.retweetUser}`}}/>
            <div className="d-flex pb-2">
                <img className="rounded-circle wd-avatar" alt=""
                     src={`/images/${post.avatar}`}/>
                <div className="flex-container-flex ps-2">
                    <div className="row">
                        <div className="col-10 d-flex">
                            <div className="fw-bold pe-1">{post.userName}</div>
                            <i className="bi bi-check-circle-fill table-primary pe-1" style={{color: "#0096FF"}}></i>
                            <div className="text-secondary"> @{post.handle} · {post.time}</div>
                        </div>
                        <div className="col-2">
                            <i className="bi bi-three-dots float-end text-secondary fw-bold"></i>
                        </div>
                    </div>
                    <div className="mb-2">
                        <span className="text">{post.content}</span>
                    </div>
                    <ImageCondition image={{"hasImage": post.hasImage, "image": `${post.image}`}}/>
                    <OriginalTweetCondition originalTweet={{
                        "hasOriginalTweet": post.hasOriginalTweet,
                        "avatar": `${post.originalTweet.avatar}`,
                        "userName": `${post.originalTweet.userName}`,
                        "handle": `${post.originalTweet.handle}`,
                        "time": `${post.originalTweet.time}`,
                        "content": `${post.originalTweet.content}`,
                        "hasReferLink": post.originalTweet.hasReferLink,
                        "referLink": `${post.originalTweet.referLink}`
                    }}/>
                    <div className={`${post.hasThread ? 'pb-2' : ``} row pt-2`}>
                        <div className="col-3">
                            <i className="bi bi-chat text-secondary"></i>
                            <span className="text-secondary ps-2">{post.comments}</span></div>
                        <div className="col-3 d-flex">
                            <i className="bi bi-repeat text-secondary"></i><span
                            className="text-secondary ps-2">{post.forwards}</span></div>
                        <div className="col-3 text-secondary">
                            <i className="bi bi-heart"></i>
                            <span className="ps-2">{post.likes}</span>
                        </div>
                        <div className="col-3"><i className="bi bi-upload text-secondary"></i>
                        </div>
                    </div>
                    <ThreadCondition thread={{"hasThread": post.hasThread}}/>
                </div>
            </div>
        </div>
    );
}
export default PostHomeItem;
const RetweetCondition = ({
                              retweet = {
                                  "retweet": true,
                                  "retweetUser": "Elon Musk"
                              },
                          }
    ) => {
        if (retweet.retweet) {
            return (
                <div className="d-flex">
                    <i className="bi bi-repeat text-secondary ms-4"></i>
                    <div className="text-secondary fw-bolder col-11 ms-3">
                        {retweet.retweetUser} Retweeted
                    </div>
                </div>
            );
        } else {
            return (``);
        }
    };

export default RetweetCondition;
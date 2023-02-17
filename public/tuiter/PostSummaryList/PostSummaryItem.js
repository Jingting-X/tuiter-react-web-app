const PostSummaryItem = (post) => {
    return (`
    <li class="list-group-item">
                    <div class="row">
                        <div class="col-9">
                            <div class="text-secondary">
                                ${post.topic}
                            </div>
                            <div class="d-flex" style="align-items: center">
                                <div class="fw-bolder me-1">${post.userName}</div>
                                <i class="fa fa-check-circle"></i>
                                <div class="text-secondary ps-2">- ${post.time}</div>
                            </div>
                            <div class="fw-bolder">
                                ${post.title}
                            </div>
                        </div>
                        <div class="col-3">
                            <img src=${post.image} width="100px" class="float-end rounded-2"/>
                        </div>
                    </div>
                </li>
    `);
}
export default PostSummaryItem;
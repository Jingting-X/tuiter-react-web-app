const PostItems = (postItem) => {
    return (`
    <li class="list-group-item border-bottom border-secondary bg-black">
     <div class="d-flex pt-2">
       <image class="rounded-pill" src=${postItem.avatarIcon} style="width: 48px; height: 48px;"></image>
       <div>
       <div class="flex-container-flex ps-2">
       <div class="row">
         <div class="d-flex col-10" style="align-items: center">
           <div class="fw-bold">${postItem.userName}</div>
           <i class="fa fa-check-circle ms-2 me-2"></i>
           <div class="text-secondary">@${postItem.handle}</div>
           <div class="text-secondary ms-2">· ${postItem.time}</div>
         </div>
         <div class="col-2">
         <i class="fa fa-ellipsis-h float-end text-secondary"></i>
         </div>
         </div>
         <div class="mb-2">${postItem.title}</div>
         
        ${postItem.post ?
        `<div> 
                                    <img src = ${postItem.image} class="rounded-top border border-secondary" style="width: 100%;">
                                    <div class = "rounded-bottom p-2 border border-secondary">
                                        <div class="p-1"> ${postItem.post.postTitle}</div>
                                        <div class="p-1 text-secondary" style="width: 100%;"> ${postItem.post.postContent}</div>
                                    </div>
                                </div>` :
        `<div> 
                                    <img src = ${postItem.image} class="rounded border border-secondary" style="width: 100%;">
                                </div>`}
         
         <div class="row pt-2">
            <div class="col-3">
                 <i class="fa fa-comment fa-inverse text-secondary"></i>
                 <span class="text-secondary ps-2">${postItem.comments}</span>
            </div>
            <div class="col-3">
                 <i class="fas fa-retweet text-secondary"></i><span class="text-secondary ps-2">${postItem.forwards}</span></div>    
            <div class="col-3">
                <i class="fa fa-heart text-secondary"></i><span class="text-secondary ps-2">${postItem.likes}</span>
                </div>
            <div class="col-3"><i class="fa fa-arrow-up text-secondary"></i>
             </div>
         </div>
       </div>
     </div>
     </div>
    </li>
    `);
}
export default PostItems;
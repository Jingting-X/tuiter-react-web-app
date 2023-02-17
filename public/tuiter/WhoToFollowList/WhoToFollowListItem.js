const WhoToFollowListItem = (who) => {
    return (`
    <li class="list-group-item">
      <div class="row align-items-center">
       <div class="col-2">
        <img src=${who.avatarIcon} width="40px" class="rounded-circle"/>
       </div>
       <div class="col-7">
        <span class="fw-bolder me-1">${who.userName} </span>
         <i class="fa fa-check-circle"></i>
          <div class="text-secondary">
           @${who.handle}
          </div>
         </div>
         <div class="col-3">
          <button class="btn btn-primary rounded-pill float-end">Follow</button>
         </div>
        </div>
       </li>
    `);
}
export default WhoToFollowListItem;

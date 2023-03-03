import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return (`
            <div class="row">
                <!-- search field and cog -->
                <div class="col-10 align-self-center">
                    <div class="position-relative">
                        <input class="form-control rounded-pill ps-5" placeholder="Search Twitter"/>
                        <i class="fa fa-search position-absolute" style="top:10px; left:15px; width: 15px; height: 15px; color: gray"></i>
                    </div>
                </div>
                <div class="col-2 align-self-center">
                    <i class="fa fa-cog fa-2x float-end" style="color: #00c4ff"></i>
                </div>
           </div>
           <ul class="nav mb-2 nav-tabs mt-2">
                <!-- tabs -->
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="d-none d-md-block nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div class="position-relative">
                <img src="../../images/starship.png" width="100%"/>
                <h4 class="position-absolute bottom-0 left-10 text-white" style="left: 15px">
                    SpaceX's Starship
                </h4>
            </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;

import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    const isHome = paths.length === 2;
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>

            <Link to="/tuiter"
                  className={`list-group-item ${(isHome || active === '' || active === 'home') ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-house-fill"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Home</div>
                </div>
            </Link>

            <Link to="/tuiter/explore" className={`list-group-item ${active === 'explore' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-hash"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Explore</div>
                </div>
            </Link>

            <Link to="/" className="list-group-item">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-asterisk"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Labs</div>
                </div>
            </Link>

            <a className={`list-group-item
                    ${active === 'notification' ? 'active' : ''}`} href="#notifications">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-bell"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Notifications</div>
                </div>
            </a>

            <a className={`list-group-item
                    ${active === 'messages' ? 'active' : ''}`} href="#messages">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-envelope"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Messages</div>
                </div>
            </a>

            <a className={`list-group-item
                    ${active === 'bookmarks' ? 'active' : ''}`} href="#bookmarks">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-bookmark"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Bookmarks</div>
                </div>
            </a>

            <a className={`list-group-item
                    ${active === 'lists' ? 'active' : ''}`} href="#lists">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-list"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Lists</div>
                </div>
            </a>

            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile' ? 'active' : ''}`}>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-person"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">Profile</div>
                </div>
            </Link>

            <a className={`list-group-item
                    ${active === 'more' ? 'active' : ''}`} href="#more">
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12 col-xl-2 col-xxl-2">
                        <i className="bi bi-three-dots"></i>
                    </div>
                    <div className="d-none d-xl-block col-xl-10 col-xxl-10">More</div>
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;
import React from "react";
import {useSelector} from "react-redux";
import "./index.css";
import {Link} from "react-router-dom";

const ProfileComponent = () => {
    const profile = useSelector(state => state.profile)
    const dateOfBirth = BirthdateConvert(profile.dateOfBirth);
    const dateOfJoin = JoinDateConvert(profile.dateJoined);

    return (
        <div className="border p-2">
            <div className="row pb-2">
                <div className="col-1">
                    <Link to="/tuiter">
                        <div className="bi bi-arrow-left pt-2 fw-bolder"></div>
                    </Link>
                </div>
                <div className="col-11">
                    <div className="fw-bolder">{profile.firstName} {profile.lastName}</div>
                    <div className="text-secondary small">6,114 Tweets</div>
                </div>
            </div>
            <div className="pos-relative">
                <img className="wd-banner" src={`/images/${profile.bannerPicture}`} alt=""/>
                <img className="wd-avatar rounded-circle" src={`/images/${profile.profilePicture}`} alt=""/>
                <Link to="/tuiter/edit-profile">
                    <button className="btn btn-light float-end fw-bolder m-2 border rounded-pill">Edit Profile</button>
                </Link>
            </div>
            <div>
                <div className="fw-bolder">{profile.firstName} {profile.lastName}</div>
                <div className="text-secondary">{profile.handle}</div>
            </div>
            <div className="pt-2">
                {profile.bio}
            </div>
            <div className="row pt-2">
                <div>
                    <span className="bi bi-geo-alt text-secondary"></span>
                    <span className="ps-1">{profile.location} </span>
                    <span className="bi bi-balloon text-secondary"></span>
                    <span className="ps-1">Born {dateOfBirth} </span>
                    <span className="bi bi-calendar3 text-secondary"></span>
                    <span className="ps-1">Joined {dateOfJoin}</span>
                </div>
            </div>

            <div className="pt-2 row">
                <div className="col-3">
                    <span className="fw-bolder">{profile.followingCount}</span> Following
                </div>
                <div className="col-3">
                    <span className="fw-bolder col-4">{profile.followersCount}</span> Followers
                </div>
            </div>
        </div>
    );

};

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const BirthdateConvert = (date) => {
    const birthDate = date.split("/");
    const month = birthDate[0] - 1;
    return months[month] + " " + birthDate[1] + ", " + birthDate[2];
}
export const JoinDateConvert = (date) => {
    const joinDate = date.split("/");
    const joinMonth = joinDate[0] - 1;
    return months[joinMonth] + ", " + joinDate[1];
}

export default ProfileComponent;

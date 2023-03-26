import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateProfile} from "../profile-reducer";
import {Link} from "react-router-dom";
import {monthNames} from "../index";

const EditProfileComponent = () => {
    const profile = useSelector(state => state.profile);
    const currProfile = {
        'firstName': profile.firstName,
        'lastName': profile.lastName,
        'handle': profile.handle,
        'profilePicture': profile.profilePicture,
        'bannerPicture': profile.bannerPicture,
        'bio': profile.bio,
        'website': profile.website,
        'location': profile.location,
        'dateOfBirth': profile.dateOfBirth,
        'dateJoined': profile.dateJoined,
        'followingCount': profile.followingCount,
        'followersCount': profile.followersCount
    };

    const updateProfileDispatch = useDispatch();
    const updateProfileClickHandler = () => {
        const newName = document.getElementById("profileName").value;
        const nameArray = newName.split(" ");
        if (nameArray.length >= 1) {
            const firstName = nameArray[0];
            console.log(firstName);
            currProfile.firstName = firstName;
        }
        if (nameArray.length >= 2) {
            const lastName = nameArray[1];
            console.log(lastName);
            currProfile.lastName = lastName;
        }

        currProfile.bio = document.getElementById("profileBio").value;
        currProfile.location = document.getElementById("profileLocation").value;
        currProfile.website = document.getElementById("profileWebsite").value;

        const newDateOfBirth = document.getElementById("profileBirthOfDate").value;
        currProfile.dateOfBirth = DashToSlashConvert(newDateOfBirth);

        updateProfileDispatch(updateProfile(currProfile));
    }

    return (
        <div className="border p-2">
            <div className="row align-items-center pb-2">
                <div className="col-1">
                    <Link to="/tuiter/profile">
                        <i className="bi bi-x-lg float-end" style={{color: "grey"}}></i>
                    </Link>
                </div>
                <div className="col-9">
                    <div className="fw-bolder">Edit profile</div>
                </div>
                <div className="col-2 float-end">
                    <Link to="/tuiter/profile">
                        <button onClick={updateProfileClickHandler} className="btn btn-dark rounded-pill">Save
                        </button>
                    </Link>
                </div>
            </div>
            <div className="pos-relative">
                <img className="wd-banner" src={`/images/${profile.bannerPicture}`} alt=""/>
                <img className="wd-avatar rounded-circle" src={`/images/${profile.profilePicture}`} alt=""/>
            </div>
            <div className="border pt-2 rounded-1">
                <label className="text-secondary ps-2">Name</label>
                <input id="profileName" className="form-control border-0"
                       defaultValue={`${profile.firstName} ${profile.lastName}`}/>
            </div>
            <div className="border pt-2 mt-4 rounded-1">
                <label className="text-secondary ps-2">Bio </label>
                <textarea id="profileBio" className="form-control border-0" defaultValue={`${profile.bio}`}/>
            </div>
            <div className="border pt-2 mt-4 rounded-1">
                <label className="text-secondary ps-2">Location</label>
                <input id="profileLocation" className="form-control border-0" defaultValue={`${profile.location}`}/>
            </div>
            <div className="mt-4">
                <input id="profileWebsite" className="form-control" placeholder="Website"/>
            </div>
            <div className="mt-4">
                <div className="d-flex align-items-center">
                    <div className="text-secondary">Birth date</div>
                    <div className="ps-1 pe-1">·</div>
                    <button className="wd-stats-button" style={{color: "blue"}}>Edit</button>
                </div>
            </div>
            <input id="profileBirthOfDate" className="form-control border-0"
                   defaultValue={BirthdateConvert(profile.dateOfBirth)}/>
            <div className="row pt-3">
                <div className="col-11">Switch to professional</div>
                <div className="col-1 float-end">
                    <i className="bi bi-chevron-right"></i>
                </div>
            </div>
        </div>
    );

};

export const BirthdateConvert = (date) => {
    const birthDate = date.split("/");
    const month = birthDate[0] - 1;
    return monthNames[month] + " " + birthDate[1] + ", " + birthDate[2];
}
export const DashToSlashConvert = (DashDate) => {
    console.log("DashToSlashConvert")
    console.log("DashDate: " + DashDate)
    let [year, month, day] = DashDate.split("-");
    if (month < 10) {
        month = month.substring(1);
    }
    if (day < 10) {
        day = day.substring(1);
    }
    return month + "/" + day + "/" + year;
}

export default EditProfileComponent;

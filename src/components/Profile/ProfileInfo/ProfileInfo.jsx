import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";
import userPhoto from "../../../assets/images/user.png";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    const onSelectedMainPhoto = (e) => {
        if(e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div>
            <div>
                <img src={props.profile.photos.large || userPhoto} alt="" className={styles.mainPhoto}/>
            </div>
            {props.isOwner && <input type="file" onChange={onSelectedMainPhoto}/>}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>
                {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo;

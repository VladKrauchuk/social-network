import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../Dialogs/common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div>
            {/*<div className={styles.cover}>*/}
            {/*    <img*/}
            {/*        src='https://images.unsplash.com/photo-1611459427383-f9e2421583d7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>*/}
            {/*</div>*/}
            <div>
                <img src={props.profile.photos.large} alt=""/>
            </div>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            <div>
                {props.profile.fullName}
            </div>
        </div>
    )
}

export default ProfileInfo;

import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return (
        <div>
            <div className={styles.cover}>
                <img
                    src='https://images.unsplash.com/photo-1611459427383-f9e2421583d7?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDI1fHJuU0tESHd3WVVrfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'/>
            </div>
            <div className="p-10">
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;

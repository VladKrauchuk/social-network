import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.item}>
            <img
                src="https://media-exp1.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2159024400&v=beta&t=QM9VSoWVooxDwCONWh22cw0jBBlBPcBOqAxbZIE18jw"
                alt={""}/>
            {props.message}
            <div>
                <span>{props.likesCount}</span>
            </div>
        </div>
    )

}

export default Post;

import React from "react";
import myProfileImage from "./Youssef-Chebil-photo.png"

const ProfilePhoto = () => {
    return (
        <img src={myProfileImage} style={{width:250,height:300,borderRadius:"50%", borderStyle: "solid", borderColor: "#000000"}} alt="my profile photo"/>        
    );
}

export default ProfilePhoto;
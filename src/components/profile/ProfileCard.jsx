import React from 'react';
import ProfileCardHeader from "./ProfileCardHeader";
import ProfileCardFooter from "./ProfileCardFooter";
import ProfileImage from "./ProfileImage"

function ProfileCard() {
  var styles = {
    height: "325px",
    width: "400px",
    position: "relative"
  }

  return (
    <div style={styles}>
      <ProfileCardHeader/>
      <ProfileCardFooter/>
    </div>
  )
}

export default ProfileCard;

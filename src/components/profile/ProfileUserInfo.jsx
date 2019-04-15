import React from 'react';
import ProfileImage from './ProfileImage'

function ProfileUserInfo() {
  const styles = {
    fontSize: ".8em",
    marginBottom: "10px",
    display: "flex",
    alignItems: "flex-end",
    width: "100%",

    position: "absolute",
    top: "50%",
    left: "10px"
  }

  return (
    <div style={styles}>
      <ProfileImage/>
      <h2>Ward Chamberlain</h2>
    </div>
  )
}

export default ProfileUserInfo;

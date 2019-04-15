import React from 'react';
import ProfileLinksContainer from './ProfileLinksContainer';
import ProfileUserInfo from './ProfileUserInfo';
import ProfileImage from './ProfileImage';

function ProfileCardFooter() {
  var styles = {
    height : "45%",
    border : "2px solid lightgrey",
    padding : "10px"
  }

  return (
    <div style={styles}>
      <ProfileUserInfo/>
      <ProfileLinksContainer/>
    </div>
  )
}

export default ProfileCardFooter;

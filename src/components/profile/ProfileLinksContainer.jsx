import React from 'react';
import ProfileLink from './ProfileLink';

function ProfileLinksContainer() {
  const styles = {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px 0"
  }

  return (
    <div style={styles}>
      <ProfileLink title="Tweets"/>
      <ProfileLink title="Following"/>
      <ProfileLink title="Followers"/>
    </div>
  )
}

export default ProfileLinksContainer;

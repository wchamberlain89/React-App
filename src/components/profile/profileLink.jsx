import React from 'react';

function ProfileLink(props) {
  var styles = {
    textTransform: "uppercase",
    textDecoration: "none"
  }
  return (
    <a style={styles} href="">{props.title}</a>
  );
}

export default ProfileLink;

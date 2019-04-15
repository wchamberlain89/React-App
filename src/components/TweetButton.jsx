import React from 'react';

function TweetButton() {
  var styles = {
    padding : '10px 20px',
    border : '2px solid blue',
    borderRadius: '50px',
    fontSize: '1em'
  }
  return (
    <button style={styles}>Tweet</button>
  )
}

export default TweetButton;

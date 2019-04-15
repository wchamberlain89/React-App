import React from 'react';
import NavMenu from './NavMenu';
import ProfileCard from './profile/ProfileCard';

function App(){
  var styles = {
    maxWidth: "1400px",
    margin: "0 auto",
    padding: "0px 10px"
  }
  return (
    <div style={styles}>
      <NavMenu/>
      <ProfileCard/>
    </div>
  );
}

export default App;

import React from 'react';
import NavTabContainer from './NavTabContainer';
import NavOptionContainer from './NavOptionContainer';

function NavMenu(){
  var styles = {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px 0px",
    borderBottom: "2px solid lightgrey",
    marginBottom: "20px"
  }

  return (
    <div style={styles}>
      <NavTabContainer/>
      <NavOptionContainer/>
    </div>
  )
};

export default NavMenu;

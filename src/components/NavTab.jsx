import React from 'react';

function NavTab(props) {
  var NavTabStyles = {
    display: 'inline-block',
    padding: '10px 20px',
    border: '2px solid lightgrey',
    marginLeft: '-2px'
  }

  return (
    <div style={NavTabStyles}>
      {props.children}
    </div>
  )
};

export default NavTab;

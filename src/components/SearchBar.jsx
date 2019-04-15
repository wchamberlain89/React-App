import React from 'react';

function SearchBar() {
  var styles = {
    padding: '10px 20px',
    border: '2px solid blue',
    borderRadius: '50px',
    marginRight: '10px',
    fontSize: '1em'
  }
  return (
    <input style={styles} type="text" placeholder="Search"/>
  )
}

export default SearchBar;

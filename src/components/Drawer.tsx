// Responsive Drawer component 
import React from 'react';

class Drawer extends React.Component {
    render() {
      return (
        <div className="sidebar">
          <a className="active" href="#section1">Section 1</a>
          <a href="#section2">Section 2</a>
          <a href="#section3">Section 3</a>
          <a href="#section4">Section 4</a>
          <a href="#section5">Section 5</a>
        </div>
      );
    }
}

export default Drawer;
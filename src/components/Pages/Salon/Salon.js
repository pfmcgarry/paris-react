import NavDrawer from '../../Nav/NavDrawer';
import React from 'react';
import Gallery from './Gallery';
import './Salon.css';

class Salon extends React.Component {

 
  render() { 
 
 
    return (
      <div>
        <NavDrawer title="The Salon" />
        <div className="gallery">
          <Gallery  />
        </div>
      </div>
    );
  }
 
}

export default Salon;
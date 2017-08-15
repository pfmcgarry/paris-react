import React from 'react';
import NavDrawer from '../../Nav/NavDrawer';
import ContactForm from './ContactForm';

class Contact extends React.Component {
  render() {
    return (
      <div>
        <NavDrawer title="Contact Info" />
        <ContactForm />

      </div>
      )
        
  } 
}

export default Contact; 
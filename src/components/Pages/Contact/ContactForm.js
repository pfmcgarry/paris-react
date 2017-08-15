import React from 'react';

class ContactForm extends React.Component {

  sendForm(event) {
    event.preventDefault();
    const email = {
      name: this.name.value,
      email: this.email.value,
      message: this.message.value
    }
    console.log(email);
    window.emailjs.send("gmail","paris",email);
    this.messageForm.reset();
  }
  render() {
    
    return (
      <form ref={(input) => this.messageForm = input } className="contact-form" onSubmit={(e) => this.sendForm(e)}>
        <input ref={(input) => this.name = input } type="text" name="email" placeholder="Name"/>
        <input ref={(input) => this.email = input } type="text" name="message" placeholder="Email"/>
        <textarea ref={(input) => this.message = input } type="text" name="Your Message" ></textarea> 
        <button type="submit">Send</button>
      </form>
    	)
    		
  } 
}

export default ContactForm; 
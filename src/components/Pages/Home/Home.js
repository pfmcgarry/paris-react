import React from 'react';
import MediaQuery from 'react-responsive';
import Nav from '../../Nav/Nav';
import "./Home.css";

class Home extends React.Component {
  render() {
  	

    return (
    	<div>
    	  <div id="hero">
          <img src="https://preview.ibb.co/izkrQk/logo3.png" alt="paris logo"/>
        </div>
          <Nav />
          <div className="home-content">
          	<div className="app-box">
          	<span className="get-mobile-app">Get our Mobile App:</span>
          	<a href='https://play.google.com/store/apps/details?id=com.phorest.paris'>
          	<img className="google-badge" alt='Get it on Google Play' src={require('../../../images/google-play-badge.png')}/></a>
	      	</div>
	      </div>
	    </div>
    	)
    	
  } 
}
export default Home; 
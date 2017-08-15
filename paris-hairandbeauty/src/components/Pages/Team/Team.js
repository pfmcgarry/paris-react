import React from 'react';
import MediaQuery from 'react-responsive';
import NavDrawer from '../../Nav/NavDrawer';
import TeamCard from './TeamCard';

import "./Team.css";



class Team extends React.Component {


  render() {
  	

    return (
    	<div>
    	  <NavDrawer title="Our Team" />


          <TeamCard
            name="Paul McGarry"
            title="Software Developer"
            image={require('../../../images/paul.jpg')}
            description="Specialises in Web and Mobile Applications" />

	    </div>
    	)
    	
  } 
}
export default Team;
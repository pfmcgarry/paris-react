import React from 'react';
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import "./Team.css";

const style = {
  height: "100%",
  width: "90%",
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',
};

const TeamCard = (props) => (
    	<div>
    		<MuiThemeProvider>
    		    <Paper style={style} zDepth={1}>
    			<Card>
					<CardMedia overlay={<CardTitle title={props.name} subtitle={props.title} />}>
      					<img src={props.image} alt="profile"/>
    				</CardMedia>
				    <CardText>
				      {props.description}
				    </CardText>
    			</Card>
    			</Paper>
    		</MuiThemeProvider>
    	  
	    </div>
);

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default TeamCard;
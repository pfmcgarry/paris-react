import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavItem from './NavItem';
import injectTapEventPlugin from 'react-tap-event-plugin';
import PropTypes from 'prop-types';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './Nav.css';

injectTapEventPlugin(); 

const muiTheme = getMuiTheme({
  palette: {
    canvasColor: '#4109a5',
  },
});

class NavDrawer extends React.Component {
	constructor(props) {
    	super(props);
    	this.state = {open: false};
  	}

  	handleToggle = () => this.setState({open: !this.state.open});

  	render() {
	    return ( 
        
	    	<div><div className="nav-drawer">
                  <MuiThemeProvider>
                      <IconButton onTouchTap={this.handleToggle}>
                          <img className="menu-button" src={require('./icons/menu-button.svg')} alt="menu button" />
                      </IconButton>
                  </MuiThemeProvider>
                  <span className="nav-drawer-title">{this.props.title}</span>
                  <MuiThemeProvider  muiTheme={muiTheme}>
                      <Drawer open={this.state.open} >
                        <MenuItem className="top-drawer-item">
                          <IconButton onTouchTap={this.handleToggle}>
                            <img className="menu-button-overlay" src={require('./icons/menu-button.svg')} alt="menu button"  />
                          </IconButton>
                        </MenuItem>
                        <MenuItem>
                            <NavItem id="home" route="/" icon="./home.svg" label="home"/>
                        </MenuItem>
                        <MenuItem>
                            <NavItem id="book" route="/book" icon="./book.svg" label="book online"/>
                        </MenuItem>
                        <MenuItem>
                            <NavItem id="team" route="/team" icon="./team.svg" label="our team"/>
                        </MenuItem>
                        <MenuItem>
                            <NavItem id="salon" route="/salon" icon="./salon.svg" label="the salon"/>
                        </MenuItem>
                        <MenuItem>
                            <NavItem id="news" route="/news" icon="./news.svg" label="news"/>
                    </MenuItem>
                        <MenuItem>
                            <NavItem id="contact" route="/contact" icon="./location.svg" label="contact us"/>
                    </MenuItem>
                      </Drawer>
                </MuiThemeProvider>
                  </div>
                 <div className="nav-horizontal">
                  </div>

                </div>
	    )
  	} 
}

NavDrawer.propTypes = {
  title: PropTypes.string.isRequired
};

export default NavDrawer; 
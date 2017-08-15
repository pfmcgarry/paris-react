import React from 'react';
import ResponsiveEmbed from 'react-responsive-embed';
import './Book.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import NavDrawer from '../../Nav/NavDrawer';

class Book extends React.Component {

  render() {
    return (
    	<div>
    	<MuiThemeProvider>
            <NavDrawer title="Online Booking" />
        </MuiThemeProvider>
    	<ResponsiveEmbed src='https://parishairandbeauty.phorest.me/book?hosted_css=https://gitlab.com/TheBeardedDeveloper/paris-hairandbeauty/raw/bd844a0a0354cb6fe0afaa02c188e0a398b0413e/src/components/Pages/Book/boilerplate.css' ratio='4:8' />
    	</div>
    )
  }
}
export default Book;
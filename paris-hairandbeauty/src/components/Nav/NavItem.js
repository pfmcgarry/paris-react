import React from 'react';
import PropTypes from 'prop-types';

var req = require.context("./icons", true, /^\.\/.*\.svg$/);

const NavItem = (props) => (
<div className="nav-item">
	<a href={props.route} id={props.id}>
		<img className="nav-icon" src={req(props.icon)} alt="icon" />
			<span className="nav-label">{props.label}</span>
		<img className="nav-arrow" src={require('./icons/arrow.svg')} alt="arrow" />
	</a>
</div>

);

NavItem.propTypes = {
  id: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};

export default NavItem;
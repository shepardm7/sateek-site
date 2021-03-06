import React from 'react';
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import './header.styles.scss';
import SRLogo from '../../assets/SR_logo.png';
import GlitchImg from '../glitch-img/glitch-img.comp';

const HeaderComp = ({getNavVisibilityClass, history}) => {
	const [isNavbarOpen, setIsNavbarOpen] = React.useState(false);
	const {pathname} = history.location;

	const getClassName = path => {
		return path === pathname ? 'nav-link active' : 'nav-link';
	};

	const onMenuClick = () => {
		setIsNavbarOpen(!isNavbarOpen);
	};

	return (
		<nav className={`header nav bg-secondary ${getNavVisibilityClass()}`}>

			<Link to={{pathname: '/', state: {firstLoad: false}}} className={`home-link ${getClassName('/')}`}>
				0. <div className="sr-logo">
				<GlitchImg image={SRLogo} isContain={true} isLogo={true} className="sr-logo-img"/>
			</div>
			</Link>
			<Link to="/about" className={`hr-link ${getClassName('/about')}`}>1. About</Link>
			<Link to="/skills" className={`hr-link ${getClassName('/skills')}`}>2. Skills</Link>
			<Link to="/works" className={`hr-link ${getClassName('/works')}`}>3. My Works</Link>
			<Link to="/contact" className={`hr-link ${getClassName('/contact')}`}>4. Contact</Link>
			<button className={`nav-link menu text-success hamburger hamburger--collapse ${isNavbarOpen ? 'is-active' : ''}`} type="button" aria-label="Menu" aria-controls="navigation" aria-expanded={!isNavbarOpen ? 'true' : 'false'} onClick={onMenuClick}>
				<span className="hamburger-box">
					<spam className="hamburger-inner"/>
				</span>
			</button>
			<div id="navigation" className={`navigation nav-vertical ${isNavbarOpen ? 'open' : ''}`}>
				<Link to="/about" className={getClassName('/about')} onClick={onMenuClick}>1. About</Link>
				<Link to="/skills" className={getClassName('/skills')} onClick={onMenuClick}>2. Skills</Link>
				<Link to="/works" className={getClassName('/works')} onClick={onMenuClick}>3. My Works</Link>
				<Link to="/contact" className={getClassName('/contact')} onClick={onMenuClick}>4. Contact</Link>
			</div>
		</nav>
	);
};

HeaderComp.propTypes = {
	getNavVisibilityClass: PropTypes.func.isRequired
};

export default withRouter(HeaderComp);

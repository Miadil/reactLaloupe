import React from 'react'

import logo from '../logo.svg';

import './Header.css'

// ------------ function -----------------//

const Header = ({age, status}) => {
	console.log(age)
	return (
		<div>Age : {age} Status: {status}</div>
	)
}

// ------------ class ----------- --- //

// class Header extends React.Component {
//   render(){
// 		console.log(this)
// 		const {age, status} = this.props
//     return (
//     	<header className="header-header">
//     	  <img src={logo} className="header-logo" alt="logo" />
//     	  <p>
//     		  Age : {age} status : {status}
//     	  </p>
//     	  <a
//     	    className="header-link"
//     	    href="https://reactjs.org"
//     	    target="_blank"
//     	    rel="noopener noreferrer"
//     	  >
//     	    Learn React
//     	  </a>
//     	</header>
//     )
//   }
// }

export default Header
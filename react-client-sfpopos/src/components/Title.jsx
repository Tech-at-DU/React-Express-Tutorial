import { NavLink } from 'react-router-dom'
import RandomSpace from './POPOSRandomSpace/POPOSRandomSpace'

import './Title.css';

function Title() {
  return (
    <div className="Title">
			<div>
				<h1>SFPOPOS</h1>
				<small className="Title-Subtitle">San Francisco Privately Owned Public Open Spaces</small>
			</div>
			<div>
				<NavLink 
					className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
					to="/">List</NavLink>
				<NavLink 
					className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
					to="/about">About</NavLink>
				<RandomSpace />
			</div>
		</div>
  )
}

export default Title
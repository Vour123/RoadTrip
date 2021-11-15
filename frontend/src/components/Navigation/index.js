import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import jeep from '../../assets/jeep.png'
import './Navigation.css';

function Navigation({ isLoaded }){
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (
      <ProfileButton user={sessionUser} className='nav-button'/>
    );
  } else {
    sessionLinks = (
      <>
        <LoginFormModal />
        <NavLink to="/signup" className='nav-button'>Sign Up</NavLink>
      </>
    );
  }

  return (
    <header className='navbar-container'>
      {/* <img className='logo' src={jeep}></img> */}
      <nav className='navbar'>
        <div className='app-title'>RoadTrip</div>
        <div className='navbar-links'>
        <ul className='navlist-container'>
            <li className='nav-links'>
              <NavLink exact to="/" className='nav-button'>Home</NavLink>
            </li>
            <li className='nav-links'>
              <NavLink to='/listings' className='nav-button'>Listings</NavLink>
            </li>
            <li className='nav-links'>
              {isLoaded && sessionLinks}
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navigation;
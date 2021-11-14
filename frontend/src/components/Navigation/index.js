import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
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
    <ul>
      <li className='nav-bar'>
        <NavLink exact to="/" className='nav-button'>Home</NavLink>
        <NavLink className='nav-button' to='/listings'>Listings</NavLink>
        {isLoaded && sessionLinks}
      </li>
    </ul>
  );
}

export default Navigation;
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import * as sessionActions from '../../store/session';

function ProfileButton({ user }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [showMenu, setShowMenu] = useState(false);
  const sessionUser = useSelector(state => state.session.user);

  const { id } = sessionUser
  
  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };
  
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener('click', closeMenu);
  
    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    history.push('/');
    dispatch(sessionActions.logout());
  };

  return (
    <>
      <button onClick={openMenu}>
        <div className='profile-icon'>
          <i className="far fa-user" />
        </div>
      </button>
      {showMenu && (
        <ul className="profile-dropdown">
          <NavLink to={`/profile/${id}`}>{user.username}</NavLink>
          <li>{user.email}</li>
          <li>
            <button onClick={logout} className='nav-button'>Log Out</button>
          </li>
        </ul>
      )}
    </>
  );
}

export default ProfileButton;
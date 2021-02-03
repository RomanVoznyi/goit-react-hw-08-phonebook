import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getAuthStatus, getUserName } from 'redux/auth/auth-selector';
import { userLogoutRequest } from 'redux/auth/auth-operations';

import { Button } from '@material-ui/core';
import { ContactPhone } from '@material-ui/icons';
import { ImReddit, ImExit } from 'react-icons/im';

const Navigation = () => {
  const isLoggedIn = useSelector(state => getAuthStatus(state));
  const userName = useSelector(state => getUserName(state));
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navBar container">
        <NavLink to="/" className="logo">
          <div className="navLogoBackground">
            <ContactPhone className="logo" style={{ fontSize: 25 }} />
          </div>
        </NavLink>

        <NavLink to="/" exact className="link" activeClassName="activeLink">
          Home
        </NavLink>
        {isLoggedIn ? (
          <>
            <NavLink
              to="/contacts"
              className="link"
              activeClassName="activeLink"
            >
              PhoneBook
            </NavLink>
            <span className="authBar">
              <ImReddit className="avatar" style={{ fontSize: 25 }} />
              <span className="greeting">
                Welcome <span className="userName">{userName}</span>
              </span>
              <Button
                color="primary"
                variant="contained"
                type="button"
                onClick={() => dispatch(userLogoutRequest())}
              >
                Log out
                <ImExit style={{ marginLeft: 10 }} />
              </Button>
            </span>
          </>
        ) : (
          <span className="authBar">
            <NavLink
              to="/register"
              exact
              className="link"
              activeClassName="activeLink"
            >
              Register
            </NavLink>
            <NavLink to="/login" className="link" activeClassName="activeLink">
              Login
            </NavLink>
          </span>
        )}
      </nav>
    </>
  );
};

export default Navigation;

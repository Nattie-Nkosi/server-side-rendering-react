import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {
  const authButton = auth ? (
    <a href='/api/logout'>Logout</a>
  ) : (
    <a href='/api/auth/google'>Login</a>
  );

  return (
    <nav style={{ backgroundColor: '#6c5ce7' }}>
      <div className='nav-wrapper'>
        <Link to='/' style={{ marginLeft: '20px' }} className='brand'>
          Server Side Rendering
        </Link>
        <ul className='right'>
          <li>
            <Link to='/users'>Users</Link>
          </li>
          <li>
            <Link to='/admins'>Admins</Link>
          </li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);

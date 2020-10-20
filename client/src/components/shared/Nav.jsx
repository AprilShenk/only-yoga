import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to='/'>Home</Link>
      <Link to='/poses'>Poses</Link>
      <Link to='/logs'>Logs</Link>
    </div>
  );
};

export default Nav;
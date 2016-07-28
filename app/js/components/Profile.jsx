import React from 'react';
import { Link } from 'react-router';

require('../../scss/heading.scss');

const Profile = () => (
  <div>
    <p className="profile">Profile</p>
    <Link to={'/home'}>Home</Link>
  </div>
);

export default Profile;

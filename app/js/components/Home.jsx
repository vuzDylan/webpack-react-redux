import React from 'react';
import { Link } from 'react-router';

require('../../scss/heading');

const Home = () => (
  <div>
    <p className="home">Home</p>
    <Link to={'/profile'}>Profile</Link>
  </div>
);

export default Home;

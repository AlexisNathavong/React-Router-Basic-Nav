import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <ul>
          <li>
            <Link to="/Home/">Home</Link>
          </li>
          <li>
          <Link to="/About/">About</Link>
          </li>
          <li>
          <Link to="/Contact/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};


export default Navigation;

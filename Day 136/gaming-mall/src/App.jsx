import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Payment from './pages/Payment';
import Login from './pages/Login';
import Signup from './pages/SignUp';

export default function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen">
        <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
          <Link to="/">Gaming Mall</Link>
          <ul className="flex space-x-4">
            <li>
              <Link to="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/payment">Payment</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <div className="flex justify-center items-center h-screen">
              <h1 className="text-3xl">Welcome to the Gaming Mall</h1>
            </div>
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicy />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Home from './Home';
import AddNewProduct from './AddNewProduct';
import LoginPage from './LoginPage';
import Profile from './Profile'; // Pastikan ini adalah jalur yang benar

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <LoginPage onLogin={handleLogin} />
        </Route>
        <Route exact path="/add-new-product">
          <AddNewProduct />
        </Route>
        <Route path="/profile"> {/* Jangan gunakan exact di sini */}
          {isLoggedIn ? <Profile /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="*"> {/* Halaman not found */}
          <Redirect to="/" />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
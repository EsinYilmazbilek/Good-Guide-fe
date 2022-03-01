import React from 'react'
// import axios from 'axios'

import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/common/Home'
import Nav from './components/common/Nav'
import BrandIndex from './components/content/BrandIndex'
import BrandShow from './components/content/BrandShow'
import Register from './components/auth/Register'
import Login from './components/auth/Login'
import Notification from 'react-notify-toast'
import { Link } from 'react-router-dom'



function App() { 

  return (
    <BrowserRouter>
      <Notification />
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/brands/:brandId">
          <BrandShow />
        </Route>
        <Route path="/brands">
          <BrandIndex />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/*">
          <p>Page Not Found</p>
          <p>Head back to the <Link to="/" className="home">Home Page</Link></p>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App

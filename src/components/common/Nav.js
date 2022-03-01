import { ExternalLink } from 'react-external-link'
import React from 'react'
import { Link } from 'react-router-dom'

import { createNotification } from '../common/Notification'
import { isAuthenticated, removeToken } from '../../lib/auth'
import { useHistory } from 'react-router-dom'

function Nav() {
  const history = useHistory()
  const isAuth = isAuthenticated()

  const handleLogout = () => {
    removeToken()
    history.push('/')
    createNotification('See you soon!')
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-0 bg-white border-bottom">
      {/* <div className="navbar navbar-expand-lg navbar-dark bg-dark"> */}

      <div>
        <h5 className="navbar-brand my-0 mr-md-auto font-weight-normal"><a href="/" className="brandOnNav">Good Guide.</a></h5>
      </div>
      
      <div className="spacing">
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>

      <div className="my-2 my-md-0 mr-md-3">
        <Link to="/" className="p-2"
        >Home</Link>
&nbsp;&nbsp;&nbsp;
        <Link to="/brands" className="p-2"
        >All Brands</Link>
&nbsp;&nbsp;&nbsp;
        <ExternalLink 
          href="https://www.stand.earth/publication/forest-conservation/amazon-forest-protection/amazon-leather-supply-chain" 
          target="_blank"
          className="p-2">See The Research 
        </ExternalLink>
      </div>
      
      &nbsp;&nbsp;&nbsp;

      <div>
        {!isAuth && (
          <>
            <Link to="/register" className="btn btn-outline-warning"
            >Register</Link>
        &nbsp;&nbsp;&nbsp;
            <Link to="/login" className="btn btn-outline-warning"
            >Login</Link>
          </>
        )}
      </div>

      &nbsp;&nbsp;&nbsp;
      {isAuth && (
        <button className="btn btn-outline-warning" onClick={handleLogout}>
          Log Out
        </button>
      )}
      
    </div>
  )
}

export default Nav
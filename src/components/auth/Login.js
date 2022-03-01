import React from 'react'
import { loginUser } from '../../lib/api'
import { Link, useHistory } from 'react-router-dom'
import { createNotification } from '../common/Notification'
import { setToken } from '../../lib/auth'


const initialState = {
  email: '',
  password: '',
}
function Login() {

  const history = useHistory()

  const [formData, setFormData] = React.useState(initialState)
  const [formErrors, setFormErrors] = React.useState(initialState)


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setFormErrors({ ...formErrors, [e.target.name]: '' })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(formData)
      const res = await loginUser(formData)
      // console.log(res.data.token)
      setToken(res.data.token)
      createNotification(res.data.message)
      history.push('/brands')
    } catch (err) {
      console.log(err.response.data.errors)
    }
  }


  return (
    <div className="registerArea">

      <div className="registerFormHeader">
        <h1 className="display-4">Login Here</h1>
      </div>

      <div className="registerFormArea">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>
          Email:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  onChange={handleChange}/>
              </label>
            </div>
            &nbsp;
            <div className="form-group col-md-6">
              <label>
          Password:
                <input
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="password"
                  id="password"
                  onChange={handleChange}/>
              </label>
            </div>
            <div>&nbsp;&nbsp;&nbsp;</div>
            <div className="field">
              <button type="submit" className="btn btn-warning" onSubmit={handleSubmit}>
                Log Me In!
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>&nbsp;&nbsp;&nbsp;</div>
      <div className="form-row">
        <p className="has-text-centered">
        Dont have an account? <Link to="/register" className="register">Register</Link>
        </p>
      </div>
    </div>
  )
}


export default Login


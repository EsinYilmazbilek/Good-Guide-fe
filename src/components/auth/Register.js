import React from 'react'
import { registerUser } from '../../lib/api'
import { useHistory } from 'react-router'
import { Link } from 'react-router-dom'
import { createNotification } from '../common/Notification'

const initialState = {
  username: '',
  email: '',
  password: '',
  passwordConfirmation: '',
}

function Register() {
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
      await registerUser(formData)
      createNotification('Welcome! You are now a part of the Good Guide. family')
      history.push('/login')
    } catch (err) {
      console.log(err.response.data.errors)
      setFormErrors(err.response.data.errors)
    }
  }



  return (
    <div className="registerArea">

      <div className="registerFormHeader">
        <h1 className="display-4">Register Here</h1>
      </div>

      <div className="registerFormArea">
        <form onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label>
          Username:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Username"
                  name="username"
                  id="username"
                  onChange={handleChange}
                />
              </label>
            </div>
            &nbsp;
            <div className="form-group col-md-6">
              <label>
          Email:
                <input
                  className="form-control"
                  type="text"
                  placeholder="Email Address"
                  name="email"
                  id="email"
                  onChange={handleChange}
                />
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
                  onChange={handleChange}
                />
              </label>
            </div>
            &nbsp;
            <div className="form-group col-md-6">
              <label>
          Password Confirmation:
                <input 
                  className="form-control"
                  type="password"
                  placeholder="Password"
                  name="passwordConfirmation"
                  id="passwordConfirmation"
                  onChange={handleChange}
                />
              </label>
            </div>
            <div>&nbsp;&nbsp;&nbsp;</div>
            <div className="field">
              <button type="submit" className="btn btn-warning"
                onSubmit={handleSubmit}>
                Register Me!
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>&nbsp;&nbsp;&nbsp;</div>
      <div className="form-row">
        <p className="has-text-centered">
        Already have an account? <Link to="/login" className="login">Log In</Link>
        </p>
      </div>
    </div>
  )
}

export default Register


// <section className="section">
//   <div className="container">
//     <div className="columns">
//       <form className="column is-half is-offset-one-quarter box" onSubmit={handleSubmit}>
//         <div className="field">
//           <label className="label" htmlFor="username">
//             Username
//           </label>
//           <div className="control">
//             <input
//               placeholder="Username"
//               name="username"
//               id="username"
//               onChange={handleChange}
//             />
//           </div>
//         </div>
//       </form>
//     </div>
//   </div>
// </section>
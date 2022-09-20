import {Component} from 'react'

import './index.css'

class Login extends Component {
  submit = event => {
    event.preventDefault()
    console.log('clicked')
  }

  render() {
    return (
      <div className="Login-main-container">
        <div className="Login-Image-container">
          <img
            className="loginPageImage"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
            alt="website login"
          />
        </div>
        <form className="formContainer">
          <h1>
            <img
              className="LoginCompanyLogo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </h1>
          <div className="LoginInputContainer">
            <label className="label" htmlFor="userName">
              User Name
            </label>
            <input className="input" type="text" placeholder="User Name" />
            <label className="label" htmlFor="userName">
              User Name
            </label>
            <input className="input" type="text" placeholder="User Name" />
            <button
              type="button"
              onClick={this.submit}
              className="SubmitButton"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    )
  }
}

export default Login

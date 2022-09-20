import {Component} from 'react'

import './index.css'

class Login extends Component {
  state = {username: '', password: '', errorMsg: false, errorMsgText: ''}

  getUserName = event => {
    const userName = event.target.value
    this.setState({username: userName})
  }

  getPassword = event => {
    const passWord = event.target.value
    this.setState({password: passWord})
  }

  submit = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch('https://apis.ccbp.in/login', options)
    if (response.ok) {
      const {history} = this.props
      const data = await response.json()
      this.setState({errorMsg: false})
      history.replace('/')
    } else {
      const data = await response.json()
      this.setState({errorMsg: true, errorMsgText: data.error_msg})
      console.log(data.error_msg)
    }
  }

  render() {
    const {errorMsg, errorMsgText} = this.state
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
            <input
              onChange={this.getUserName}
              className="input"
              type="text"
              placeholder="User Name"
            />
            <label className="label" htmlFor="userName">
              Password
            </label>
            <input
              onChange={this.getPassword}
              className="input"
              type="text"
              placeholder="Password"
            />
            <button
              type="button"
              onClick={this.submit}
              className="SubmitButton"
            >
              Login
            </button>
            {errorMsg && <p className="errorMsgText">{`*${errorMsgText}`}</p>}
          </div>
        </form>
      </div>
    )
  }
}

export default Login

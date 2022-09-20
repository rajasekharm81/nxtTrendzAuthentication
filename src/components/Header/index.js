import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  render() {
    return (
      <div className="Header-main-container">
        <div className="HeaderLogoContainer">
          <img
            className="HeaderCompanyLogo"
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            alt="website logo"
          />
        </div>
        <div className="HeaderMenuContainer">
          <Link className="link" to="/">
            <p>Home</p>
          </Link>
          <p>Product</p>
          <p>Cart</p>
          <button type="button">Logout</button>
        </div>
      </div>
    )
  }
}

export default Header

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
        <ul className="HeaderMenuContainer">
          <Link className="link" to="/">
            <li>Home</li>
          </Link>
          <li>Products</li>
          <li>Cart</li>
          <button type="button">Logout</button>
        </ul>
      </div>
    )
  }
}

export default Header

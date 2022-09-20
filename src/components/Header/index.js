import {Component} from 'react'

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
          <p>Home</p>
          <p>Product</p>
          <p>Cart</p>
          <button type="button">Logout</button>
        </div>
      </div>
    )
  }
}

export default Header

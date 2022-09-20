import {Component} from 'react'

import Header from '../Header'

import './index.css'

class Home extends Component {
  submit = event => {
    event.preventDefault()
    console.log('clicked')
  }

  render() {
    return (
      <div className="Home-main-container">
        <Header />
        <div className="HomeMainContnetContainer">
          <div className="HomeContentContiner">
            <h1>Clothes that you get noticed</h1>
            <p>Fashion</p>
            <button className="ShopNowButton" type="button">
              Shop Now
            </button>
          </div>
          <div className="imageContainer">
            <img
              className="HomeImage"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png "
              alt="clothes that get you noticed"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home

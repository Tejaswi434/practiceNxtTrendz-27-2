// Write your JS code here

import './index.css'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import Header from '../Header'

const Products = () => {
  console.log('hiii')
  const value = Cookies.get('jwt_token')
  if (value === undefined) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Header />
      <div className="products-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-img.png"
          alt="products"
          className="products-img"
        />
      </div>
    </>
  )
}

export default Products

import React from 'react'
import Topbar from './Topbar'
import NavBar from './NavBar'
import Carousel from './Carousel'
import FeaturedProducts from './FeaturedProducts'
import Footer from './Footerbar'
import Shopingcart from './Shopingcart'
import DisplayItemCountInCart from './DisplayItemCountInCart'
import Cart from '../src/features/cart/Cart'

function HomePage() {
  return (
    <>
    <Topbar/>
    <NavBar/>
    <Carousel/>
    <FeaturedProducts/>
    <Cart/>
    <Shopingcart/>
    <DisplayItemCountInCart/>
    <Footer/>
   
    </>
  )
}

export default HomePage
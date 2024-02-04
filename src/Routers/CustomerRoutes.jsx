import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from '../customer/pages/HomePage/HomePage'
import Cart from '../customer/components/Cart/Cart'
import Navigation from '../customer/components/Navigation/Navigation'
import Footer from '../customer/components/Footer/Footer'
import Product from '../customer/components/Product/Product'
import ProductDetails from '../customer/components/ProductDetails/ProductDetails'
import CheckOut from '../customer/components/Checkout/Checkout'
import Order from '../customer/components/Order/Order'
import OrderDetails from '../customer/components/Order/OrderDetails'
import Signup from '../customer/components/Signup/Signup'
import PaymentSuccess from '../customer/components/Payment/PaymentSuccess'

const CustomerRoutes = () => {
  return (
    
    <div>

      <div>

    <Navigation/>

      </div>
      <Routes>
        <Route path="/login" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<HomePage />} />
        <Route path="/cart" element={< Cart />} />
        <Route path='/:levelOne/:levelTwo/:levelThree' element={<Product/> } />
        <Route path="/product/:productId" element={< ProductDetails />} />
        <Route path="/checkout" element={< CheckOut />} />
        <Route path="/account/order" element={< Order />} />
        <Route path="/account/order/:orderId" element={< OrderDetails />} />
        <Route path="/payment/:orderId" element={< PaymentSuccess />} />
        <Route path="/signup" element={< Signup />} />


        

      </Routes>

      <div>
        {/* <Footer/> */}
      </div>
    </div>
  )
}

export default CustomerRoutes
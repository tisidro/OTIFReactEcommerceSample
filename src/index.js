import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './scss/style.scss'

import ShippingOptions from './Pages/ShippingOptions'
import ShippingQuote from './Pages/ShippingQuote'
import StripeContainer from './Pages/StripeContainer'
import Dashboard from './Pages/Dashboard'
import Tracking from './Pages/Tracking'
import SignIn from './Pages/SignIn'
import SignUp from './Pages/SignUp'
import EmailConfirm from './Pages/EmailConfirm'

ReactDOM.render(
  <Router>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/shipping-options' element={<ShippingOptions />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path='/tracking' element={<Tracking />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/email-confirm' element={<EmailConfirm />} />
    </Routes>
  </Router>,
  document.getElementById('root')
)

import React from 'react'
import Home from './Home'

export default function App () {
  return (
    <div className='navigation-bar'>
      <div className='overlap-group2'>
        <div className='group-8'>
          <div className='mask-group-container'>
            <img className='mask-group' src={require('../assets/logo.png')} />
            <img className='mask-group-1' src={require('../assets/otif.png')} />
          </div>
          <div className='on-time-in-fullproductsans-bold-licorice-11px'>
            <span className='productsans-bold-licorice-11px'>
              <div className='otif-logo-text'>On Time In Full</div>
            </span>
          </div>
        </div>
        <div className='component-1-1'>
          <div className='trackinginter-medium-licorice-18px'>
            <span className='inter-medium-licorice-18px'>quote shipping</span>
          </div>
        </div>
        <Component7>Schedule shipping</Component7>
        <Component7 className='component-2'>Analytics</Component7>
        <Component7 className='component-3'>Generate Points</Component7>
        <Component7 className='component-4'>massive shipments</Component7>
        <Component7 className='component-5'>Tracking</Component7>
        <img className='line-1' src={require('../assets/line-1-1.png')} />
        <Component7 className='component-6'>history</Component7>
        <Component7 className='component-7'>Users</Component7>
        <Component7 className='component-8'>integrations</Component7>
        <Component7 className='component'>Wallets</Component7>
        <div className='group-38'>
          <div className='light-modeproductsans-regular-normal-licorice-18px'>
            <span className='productsans-regular-normal-licorice-18px'>
              Light Mode
            </span>
          </div>
          <Frame181 />
        </div>
        <div className='overlap-group1'>
          <div className='customer-serviceproductsans-regular-normal-licorice-18px'>
            <span className='productsans-regular-normal-licorice-18px'>
              <div className='customer-service-box'>
                <div className='customer-service>Customer service'>
                  Customer Service
                </div>
              </div>
            </span>
          </div>
        </div>
        <div className='overlap-group-1'>
          <div className='disconnectproductsans-regular-normal-white-18px'>
            <span className='productsans-regular-normal-white-18px'>
              <div className='disconnect-box'>Disconnect</div>
            </span>
          </div>
        </div>
      </div>
      <div>
        <Home />
      </div>
    </div>
  )
  function Component7 (props) {
    const { children, className } = props

    return (
      <div className={`component-1 ${className || ''}`}>
        <div className='tracking-1productsans-regular-normal-licorice-18px'>
          <span className='spanproductsans-regular-normal-licorice-18px'>
            <div className='nav-text'>{children}</div>
          </span>
        </div>
      </div>
    )
  }

  function Frame181 () {
    return (
      <div className='frame-181'>
        <div className='overlap-group'>
          <div className='rectangle-61'></div>
          <div className='rectangle-60'></div>
          <img className='moon' src={require('../assets/moon-1.png')} />
          <img className='sun' src={require('../assets/sun-1.png')} />
        </div>
      </div>
    )
  }
}

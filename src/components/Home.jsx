import React from 'react'
import StoreCard from './StoreCard.jsx'

export default function Home () {
  return (
    <div className='frame-7'>
      <div className='flex-row-2'>
        <h1 className='titleproductsans-bold-licorice-40px'>
          <span className='productsans-bold-licorice-40px'>INTEGRATIONS</span>
        </h1>
        <div className='quick-search'>
          <div className='searchproductsans-regular-normal-nobel-16px'>
            <span className='productsans-regular-normal-nobel-16px'>
              search
            </span>
          </div>
          <div className='quick-search-1'>
            <img className='union' src={require('../assets/union-1.png')} />
          </div>
        </div>
        <div className='frame-8'>
          <img
            className='rectangle-19'
            src={require('../assets/rectangle-19-1.png')}
          />
          <div className='nameproductsans-regular-normal-licorice-24px'>
            <span className='productsans-regular-normal-licorice-24px'>
              Jessica Jones
            </span>
          </div>
          <img
            className='chevron-down'
            src={require('../assets/chevron-down-1.png')}
          />
        </div>
      </div>
      <div className='flex-row-3'>
        <div className='frame-154'>
          <div className='choose-a-storevalign-text-middleproductsans-regular-normal-black-18px'>
            <span>
              <span className='productsans-regular-normal-black-18px'>
                Choose a Store
              </span>{' '}
            </span>
          </div>
        </div>
        <div className='frame-153'>
          <div className='connected-storesvalign-text-middleproductsans-regular-normal-black-18px'>
            <span>
              <span className='productsans-regular-normal-black-18px'>
                Connected Stores
              </span>{' '}
            </span>
          </div>
        </div>
        <div className='need-helpproductsans-regular-normal-black-18px'>
          <span className='productsans-regular-normal-black-18px'>
            Need help?
          </span>
        </div>
      </div>
      <div className='conect-with-your-e-commerce-storeproductsans-regular-normal-black-24px'>
        <span className='productsans-regular-normal-black-24px'>
          Connect with your e-commerce store
        </span>
      </div>
      <div className='group-container'>
        <div className='group-30'>
          <img
            className='icon-park-outlineall-application'
            src={require('../assets/icon-park-outline-all-application-1.png')}
          />
          <div className='allproductsans-regular-normal-black-18px'>
            <span className='productsans-regular-normal-black-18px'>All</span>
          </div>
        </div>
        <div className='group-29'>
          <div className='icon-park-outlineorder-1'>
            <img className='group' src={require('../assets/group-8.png')} />
          </div>
          <div className='import-ordersproductsans-regular-normal-black-18px'>
            <span className='productsans-regular-normal-black-18px'>
              Import Orders
            </span>
          </div>
        </div>
        <div className='group-27'>
          <img
            className='fluentdual-screen-status-bar-20-regular-1'
            src={require('../assets/fluent-dual-screen-status-bar-20-regular-6.png')}
          />
          <div className='fulfilment-statusproductsans-regular-normal-black-18px'>
            <span className='productsans-regular-normal-black-18px'>
              Fulfillment Status
            </span>
          </div>
        </div>
        <div className='group-28'>
          <img className='fecart-1' src={require('../assets/fe-cart-8.png')} />
          <div className='smart-shopping-cartproductsans-regular-normal-black-18px'>
            <span className='productsans-regular-normal-black-18px'>
              Smart Shopping Cart
            </span>
          </div>
        </div>
      </div>
      <div className='rectangle-56'>
        <img className='line-1-2' src={require('../assets/line-1-2.png')} />
      </div>

      <div className='frame-container'>
        <div className='rectangle-25'>
          <div className='frame-container-1'>
            <StoreCard
              imagePath={require('../assets/image-4-1.png')}
              body='Shopify Inc. is a Canadian multinational
                  e-commerce company headquartered in Ottawa, Ontario'
              fecartImg={require('../assets/fe-cart-9.png')}
              group9Img={require('../assets/group-9.png')}
              dualScreen={require('../assets/fluent-dual-screen-status-bar-20-regular-6.png')}
            />

            <StoreCard
              imagePath={require('../assets/image-5-1.png')}
              body='WooCommerce is an open-source e-commerce. 
              It is designed for
              small to large-sized online merchants'
              fecartImg={require('../assets/fe-cart-9.png')}
              group9Img={require('../assets/group-9.png')}
              dualScreen={require('../assets/empty.png')}
            />
            <StoreCard
              imagePath={require('../assets/image-6-1.png')}
              body='PrestaShop is an efficient and innovative e-commerce solution
              with all the features you need to create an online store and
              grow your business.'
              fecartImg={require('../assets/fe-cart-9.png')}
              group9Img={require('../assets/group-9.png')}
              dualScreen={require('../assets/fluent-dual-screen-status-bar-20-regular-6.png')}
            />
            <StoreCard
              imagePath={require('../assets/image-7-1.png')}
              body='Kometia is the best way to sell your products on the internet.
              Create or develop your own online store and increase your sales.'
              fecartImg={require('../assets/fe-cart-9.png')}
              group9Img={require('../assets/group-9.png')}
              dualScreen={require('../assets/fluent-dual-screen-status-bar-20-regular-6.png')}
            />
          </div>
          <div className='frame-container-1'>
            <StoreCard
              imagePath={require('../assets/image-8-1.png')}
              body='Build multi-channel commerce experiences for B2B and B2C
              customers on a single platform. From catalog to payment to
              fulfillment.'
              fecartImg={require('../assets/fe-cart-9.png')}
              group9Img={require('../assets/group-9.png')}
              dualScreen={require('../assets/empty.png')}
            />
            <StoreCard
              imagePath={require('../assets/image-9-1.png')}
              body='SpinCommerce is a consulting, software, and services company
              that offers online sales solutions.'
              fecartImg={require('../assets/fe-cart-9.png')}
              group9Img={require('../assets/group-9.png')}
              dualScreen={require('../assets/fluent-dual-screen-status-bar-20-regular-6.png')}
            />
            <StoreCard
              imagePath={require('../assets/image-10-1.png')}
              body='With Tiendanube you can create your online store without
              difficulties, with affordable prices and the support of a team
              focused on helping you.'
              fecartImg={require('../assets/fe-cart-9.png')}
              group9Img={require('../assets/group-9.png')}
              dualScreen={require('../assets/fluent-dual-screen-status-bar-20-regular-6.png')}
            />
            <StoreCard
              imagePath={require('../assets/image-11-1.png')}
              body='Mercado operates online marketplaces dedicated to e-commerce and
              online auctions.'
              fecartImg={require('../assets/fe-cart-9.png')}
              group9Img={require('../assets/group-9.png')}
              dualScreen={require('../assets/empty.png')}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

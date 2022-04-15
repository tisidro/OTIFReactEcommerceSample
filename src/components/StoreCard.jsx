export default function StoreCard (props) {
  const { imagePath, body, fecartImg, group9Img, dualScreen } = props

  return (
    <div className='cardContainer'>
      <div className='frame-1border-1px-bon-jour'>
        <img className='image' src={imagePath} />

        <p className='with-tiendanube-youvalign-text-middleproductsans-regular-normal-black-12px'>
          <span>
            <span className='productsans-regular-normal-black-12px'>
              <div className='card-body'>{body}</div>
            </span>
          </span>
        </p>
        <div className='flex-row-1'>
          {/* if no fecart for the store, just enter '' as props */}
          <img className='fecart' src={fecartImg} />

          <div className='icon-park-outlineorder'>
            {/* if no group9Img for the store, just enter '' as props */}
            <img className='group' src={group9Img} />
            {/* if no dualScreen for the store, just enter '' as props */}
            <img
              className='fluentdual-screen-status-bar-20-regular'
              src={dualScreen}
            />

            <div className='frame-155'>
              <div className='choose-storevalign-text-middleproductsans-regular-normal-black-13px'>
                <span>
                  <span className='productsans-regular-normal-black-13px'>
                    <div className='choose-store'>Choose Store</div>
                  </span>{' '}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

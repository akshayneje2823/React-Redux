import React from 'react'

function Home() {
  return (
    <div>
        <div className='add-to-cart'>
            <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" alt="img" />
        </div>
        <h1>Home Component</h1>
        <div className='cart-wrapper'>
            <div className='image-wrapper item'>
                <img src="https://rukminim1.flixcart.com/image/312/312/kg8avm80/mobile/r/h/z/apple-iphone-12-dummyapplefsn-original-imafwg8duby8qbn4.jpeg?q=70" alt="" />
            </div>
            <div className='text-wrapper item'>
                <span>I-Phone 12</span>
                <span>Price : 60000</span>
            </div>
            <div className='btn-wrapper item'>
                <button>Add To Cart</button>
            </div>
        </div>
    </div>
  )
}

export default Home
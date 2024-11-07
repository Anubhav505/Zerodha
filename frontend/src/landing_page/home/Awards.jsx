import React from 'react'

function Awards() {
  return (
    <div className="contaier px-28 mt-32">
    <div className="row flex items-center">
      <div className="col-6">
        <img className='scale-[0.9]' src="media/images/largestBroker.svg" alt="" />
      </div>
      <div className="col-6 px-10">
        <h1 className='text-4xl font-semibold mb-3'>Largest stock broker in India</h1>
        <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:</p>
        <div className="row mt-7 mb-6">
          <div className="col">
            <ul className='list-disc'>
              <li>Futures and Options</li>
              <li>Comodity derivatives</li>
              <li>Currency derivatives</li>
            </ul>
          </div>
          <div className="col">
              <ul className=' list-disc'>
              <li>Stocks & IPOs</li>
              <li>Direct mutual funds</li>
              <li>Bonds and Govt. Securities</li>
            </ul>
          </div>
          
        </div>
          <img src="media/images/pressLogos.png" alt="" className='w-[80%]' />
      </div>
    </div>
    </div>
  )
}

export default Awards
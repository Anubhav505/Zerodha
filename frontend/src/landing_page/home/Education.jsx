import React from 'react'

function Education() {
  return (
    <div className="container mt-32 px-20">
      <div className="row">
        <div className="col-6">
          <img src="media/images/education.svg" alt="Education Image" />
        </div>

        <div className="col-6">
          <h1 className="text-4xl font-medium mb-8">Free and open market education </h1>
          <p className="text-[1rem] font-normal mb-3">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a className="text-blue-500 " href="">Varsity <i class="ri-arrow-right-line"></i></a>

          <p className="text-[1rem] font-normal mb-3 mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
          <a className="text-blue-500 " href="">TradingQ&A <i class="ri-arrow-right-line"></i></a>
        </div>
      </div>
    </div>
  )
}

export default Education
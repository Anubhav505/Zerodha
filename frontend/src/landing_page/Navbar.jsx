import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className="flex items-center justify-between w-full px-52 border border-b py-[1.4rem] bg-white z-50">
      <Link to='/'><img src="media/images/logo.svg" alt="" className='w-[21%]'/></Link>
      <div className='flex gap-10'>
        <Link to="/signup">Signup</Link><Link to="/about">About</Link><Link to="/products">Products</Link><Link to="/pricing">Pricing</Link><Link to="/support">Support</Link>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className='container text-center my-48'>
            <h1 className='text-5xl font-bold'>404</h1>
            <h1 className='text-4xl font-semibold mt-2'>Kiaan couldn't find that page</h1>
            <h1 className='text-1xl mt-2'>We couldn't find the page you were looking for. Visit <Link className='text-blue-500' to='/'>Zerodha's home page</Link></h1>
        </div>
    )
}

export default NotFound
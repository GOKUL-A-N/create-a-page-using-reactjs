import React from 'react'

const Header = () => {
  return (
    <div className='fixed top-0 w-full h-[40px] bg-[#343434] text-[#dedede] z-10'>
        <ul className='w-full h-full flex items-center justify-center list-none gap-4 font-semibold text-[15px]'>
            <li>Home</li>
            <li>About Us</li>
            <li>Products</li>
            <li>Services</li>
            <li>Contact us</li>
        </ul>
    </div>
  )
}

export default Header
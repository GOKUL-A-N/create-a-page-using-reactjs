import React from 'react'

const Footer = () => {
  return (
    <div className='fixed bottom-0 w-full h-[40px] bg-[#343434] text-[#dedede]'>
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

export default Footer
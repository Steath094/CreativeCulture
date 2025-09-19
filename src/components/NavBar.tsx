import Image from 'next/image'
import React from 'react'

function NavBar() {
    const navs = [
        {
            name: "Home",
            to: "#"
        },
        {
            name: "About Us",
            to: "#"
        },
        {
            name: "Our Services",
            to: "#"
        },
        {
            name: "Success Stories",
            to: "#"
        },
    ]
  return (
    <div className='p-3 flex justify-between items-center w-full top-0'>
        <Image src={'./logo.svg'} alt='logo' width={250} height={88}/>
        <div className='flex gap-4 font-semibold'>
            {navs.map((nav,ind)=>(
                <nav key={ind} className='text-2xl  hover:text-[#7ED957] focus:text-[#7ED957] cursor-pointer'>{nav.name}</nav>
            ))}
        </div>
    </div>
  )
}

export default NavBar
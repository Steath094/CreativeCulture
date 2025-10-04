import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='flex items-center py-24'>
        <div className='flex gap-2 w-full'>
            <div className='w-9/20 flex flex-col gap-8'>
                <div>
                    <div className='flex gap-2 items-center'>
                        <Image src={'./star.svg'} alt='star logo' width={42} height={42}></Image>
                        <h2 className='text-3xl'>Elevate Your Brand With US</h2>
                    </div>
                    <h1 className='text-7xl'>
                        Empower Your Marketing
                    </h1>
                </div>
                <p className='text-xl'>We turn marketing mayhem into masterpiece. Let us be the artists of your brand success story. With strategy, creativity and a dash of humour, we'll make your brand stand out like a diamond in the rough.</p>
                <div className='flex gap-4 items-center '>
                    <button className='flex gap-2 justify-center items-center text-2xl bg-[#7ED957] text-[#10012B] font-semibold rounded-3xl px-4 py-2 text-center cursor-pointer'>Start Exploring <Image src={'./arrow.svg'} alt='arrow' width={26} height={10} /> </button>
                    <button className='text-2xl border-b-1'>All Services</button>
                </div>
            </div>
            <div className=''>
                <Image src={'./Hero.svg'} alt='Hero logo' width={730} height={470}></Image>
            </div>
        </div>
    </div>
  )
}

export default Hero
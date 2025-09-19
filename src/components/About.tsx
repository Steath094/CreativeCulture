import Image from 'next/image'
import React from 'react'
import Stats from './Stats'
import AboutGrid from './AboutGrid'

function About() {
  return (
   <section id="about" className="py-18 text-white">
      {/* ## Header ## */}
      <div className="text-center pt-12 py-3 px-4">
        <div className="flex justify-center items-center gap-3">
            <Image src={'./star.svg'} alt='star logo' width={42} height={42}></Image>
          <h2 className="text-xl md:text-4xl">About Us</h2>
        </div>
        <h3 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-2/3 mx-auto">
          Empowering Your Success with Digital Expertise
        </h3>
      </div>

      {/* ## Main Grid ## */}
      <AboutGrid />

      {/* ## Stats ## */}
      <Stats/>
    </section>
  )
}

export default About
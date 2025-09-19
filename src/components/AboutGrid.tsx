import Image from 'next/image';
import React from 'react';
import ProgressLine from './Progressline'; // Assumes ProgressLine.tsx exists

function AboutGrid() {
  return (

    <div>
        <div className='py-4 flex '>
            <div className='flex flex-col gap-4 w-1/2'>
                <div className='relative h-1/2'>
                    <div className='relative w-3/5 h-full'>
                        <Image
                            src="/image 3.png"
                            alt="Team collaborating on a project"
                            layout="fill"
                            objectFit="cover"
                        />
                    </div>
                    <div className="absolute top-1/2 left-4/5 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 lg:w-56 lg:h-56">
                        <Image
                        src="/drake.svg"
                        alt="Illustrative character"
                        layout="fill"
                        objectFit="contain"
                        />
                    </div>
                </div>
                <div className="relative w-9/10 h-1/2 rounded-lg overflow-hidden shadow-lg">
                    <Image 
                        src="/image 2.png"
                        alt="Business professionals collaborating"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>
            </div>         
            <div className='flex flex-col gap-4 w-1/2'>
                <div className="text-lg md:text-xl leading-relaxed text-gray-300">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>
                <div className="space-y-6">
                    <ProgressLine label="Marketing & Business Growth" percentage={90} />
                    <ProgressLine label="Creativity & Innovation" percentage={95} />
                    <ProgressLine label="Business and Financial Management" percentage={85} />
                </div>
            </div>
        </div>
    </div>
    
  );
}

export default AboutGrid;
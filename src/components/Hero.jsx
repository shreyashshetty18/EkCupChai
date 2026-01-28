import React from 'react'
import { FaStar } from 'react-icons/fa'

const Hero = () => {
  return (
    <section>
      <div className='relative z-50 flex flex-wrap justify-center items-center w-full max-w-3xl mx-auto px-2 sm:px-4 min-h-[calc(100vh-150px)]'>
        {/* StarLine */}
        <div className="flex flex-wrap items-center justify-center gap-1 text-sm font-medium text-chaiBrown mb-2 sm:mb-12">
          {Array(5).fill(0).map((_, i) => (
            <FaStar key={i} className="" />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
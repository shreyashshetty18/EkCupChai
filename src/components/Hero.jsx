import React from 'react'
import { FaStar } from 'react-icons/fa'

const Hero = () => {
  return (
    <section>
      <div className='relative z-50 flex flex-col justify-center items-center w-full max-w-3xl mx-auto px-2 sm:px-4 min-h-[calc(100vh-150px)]'>
        {/* StarLine */}
        <div className="flex flex-wrap items-center justify-center gap-1 text-sm font-medium text-chaiBrown mb-2 sm:mb-12">
          {Array(5).fill(0).map((_, i) => (
            <FaStar key={i} className="" />
          ))}
          <span className="ml-2">Loved by 1,00,000+ chai supporters</span>
        </div>
        {/* Main Heading */}
        <h1 className='text-5xl sm:text-7xl md:text-8xl font-extrabold text-black leading-tight md-6 text-center'>Create More.<br />
        <span className='logo-font text-chaiBrown'>Chai More.</span>
        </h1>

        {/* Subheading */}
        <p className='text-base sm:text-xl text-gray-500 mt-10 mb-18 tracking-wide text-center px-2 sm:px-8 whitespace-nowrap overflow-hidden text-ellipsis'>Serving content? Let your fans serve the chai. It's simpler than you think.</p>
      </div>
    </section>
  )
}

export default Hero
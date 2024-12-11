import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='px-4 bg-green1 '>
      <div className='max-w-[1290px] w-full mx-auto px-4'>
          <h2 className='font-poppins text-2xl font-bold lg:py-11 py-7 lg:px-[50px]'>Stub<span className='italic'>Rush</span></h2>
          <div className='lg:pt-16 pt-6 lg:px-[50px] grid lg:grid-cols-5 lg:gap-20 md:gap-14 gap-6 md:grid-cols-3 sm:grid-cols-2 grid-flow-col-1 w-full sm:justify-center'>
            <div className='gap-2.5 flex flex-col mb-6 md:mb-0'>
              <h4 className='font-bold text-sm'>ABOUT</h4>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>About StubRush</Link>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>How It Works</Link>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>Testimonials</Link>
            </div>
            <div className='gap-2.5 flex flex-col mb-6 md:mb-0'>
              <h4 className='font-bold text-sm'>FOR BUSINESSES</h4>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>List Your Event</Link>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>Why Choose StubRush?</Link>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>Learn More</Link>
            </div>
            <div className='gap-2.5 flex flex-col mb-10 md:mb-0'>
              <h4 className='font-bold text-sm'>RESOURCES</h4>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>FAQ</Link>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>Blog</Link>
              <Link href="#" className='font-poppins text-xs transition-all duration-200 hover:text-yellow1'>Contact Us </Link>
            </div>
            <div className='gap-2.5 flex flex-col mb-10 md:mb-0'>
              <h4 className='font-bold text-sm'>FOLLOW US</h4>
              <div className="flex gap-5 justify-start">
                <Link href="#" className='transition-all duration-200 hover:scale-125'>
                <Image src='/insta.svg' width={15} height={15} alt="Instagram"/>
                </Link>
                <Link href="#" className='transition-all duration-200 hover:scale-125'>
                <Image src='/tiktok.svg' width={15} height={15} alt="TikTok"/>
                </Link>
                <Link href="#" className='transition-all duration-200 hover:scale-125'>
                <Image src='/fb.svg' width={15} height={15} alt="Facebook"/>
                </Link>
              </div>
            </div>
            <div className='gap-2.5 flex flex-col mb-6 md:mb-0'>
              <h4 className='font-bold text-sm'>GET THE APP</h4>
              <div className="flex flex-col gap-3 justify-center md:justify-start">
                <Link href="#">
                <Image src='/apple.png' width={100} height={29} alt="Instagram"/>
                </Link>
                <Link href="#">
                <Image src='/google.png' width={100} height={29} alt="google"/>
                </Link>
              </div>
            </div>
          </div>
          <hr className='lg:mt-[126px] md:mt-14 mt-10'/>
          <p className='text-center md:text-sm text-xs font-poppins pt-3 md:pb-[57px] pb-8'>© 2024 StubRush. All Rights Reserved.</p>

      </div>
    </footer>
  )
}

export default Footer

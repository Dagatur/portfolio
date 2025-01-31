import React from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import MagicButton from './ui/MagicButton'

const Footer = () => {
  return (
    <footer className='w-full pb-10 mb-[100px] md:mb-5' id='contact'>
        <div className='w-full absolute left-0 -bottom-72 min-h-96'>
            <img 
                src='/footer-grid.svg'
                alt='grid'
                className='w-full h-full opacity-50'
            />
        </div>

        <div className='flex flex-col items-center'>
            <h1 className='heading lg:max-w-[45vw]'>
                Ready to take 
                <span className='text purple'>
                    your
                </span>
                digital presence to the next level?
            </h1>
            <p className='text-white-200 md:mt-10 my-5'>
                Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
            </p>
            <a href="mailto:tur.dagmara@gmail.com">
                <MagicButton
                    title='Let&apos;s get in touch'
                    icon={<FaLocationArrow />}
                    position='right'
                />
            </a>
        </div>
        <div className='flex mt-16 md:flex-row flex-col justify-between items-center'>
            <p className='md:text-base text-sm md:font-normal font-light'>Copyright © 2024 Dagmara</p>
        </div>
    </footer>
  )
}

export default Footer
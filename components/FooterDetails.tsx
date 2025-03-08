import React from 'react'
import Button from './common/Button'


function FooterDetails() {
    
  return (
    <section>
        <div className='flex justify-between max-w-[730px] m-auto p-4'>
        <div className='md:block hidden'>
            <h2 className='text-[20px] text-veryDarkBlue font-bold '>Senior Software Engineer</h2>
            <p className='text-gray'>So Digital Inc.</p>
        </div>
        <Button
            text="Apply"
            bg="bg-violet"
            bgHover="hover:bg-lightViolet"
            w="md:w-32 w-full"
            h="h-12"
          />
        </div>
    </section>
  )
}

export default FooterDetails
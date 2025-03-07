import Button from '@/components/common/Button'
import Header from '@/components/Header'
import JobCard from '@/components/JobCard'
import React from 'react'

function index() {
  return (
    <>
      <Header/>
      <main >
      <section className='trasnform translate-y-12 py-12 px-4 m-auto grid gap-y-16 lg:gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1110px]'>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
      </section>

      
      <Button w='w-36' h='h-12' bg='bg-violet' bgHover='hover:bg-lightViolet' text='Load More' m='my-[2rem] mx-auto' />
      </main>
    </>
  )
}

export default index
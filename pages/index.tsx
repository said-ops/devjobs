import Button from '@/components/common/Button'
import Header from '@/components/Header'
import JobCard from '@/components/JobCard'
import React from 'react'

function index() {
  return (
    <>
      <Header/>
      <main className='trasnform translate-y-12 py-12 px-4 m-auto grid gap-y-16 lg:gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1110px]'>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        <JobCard/>
        {/* <Button /> */}
      </main>
    </>
  )
}

export default index
import Header from '@/components/Header'
import JobCard from '@/components/JobCard'
import React from 'react'

function index() {
  return (
    <>
      <Header/>
      <main className='trasnform translate-y-12'>
        <JobCard/>
      </main>
    </>
  )
}

export default index
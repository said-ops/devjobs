import Button from '@/components/common/Button'
import Header from '@/components/Header'
import JobCard from '@/components/JobCard'
import useJobStore from '@/store/jobStore'
import React, { useEffect } from 'react'

function index() {
  const fetchJobs=useJobStore(state=>state.fetchJobs)
  const jobs=useJobStore(state=>state.jobs)
  useEffect(() => {
    fetchJobs();
  }, []);

  // Log jobs when they update
  useEffect(() => {
    console.log(jobs); // ✅ This ensures it logs after jobs are fetched
  }, [jobs]);
  return (
    <>
      <Header/>
      <main >
      <section className='trasnform translate-y-12 py-12 px-4 m-auto grid gap-y-16 lg:gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1110px]'>
      {jobs.length > 0
  ? jobs.map((job) => (
      <JobCard
        key={job.id}
        {...job}
      />
    ))
  : "Loading..."}
      </section>

      
      <Button w='w-36' h='h-12' bg='bg-violet' bgHover='hover:bg-lightViolet' text='Load More' m='my-[2rem] mx-auto' />
      </main>
    </>
  )
}

export default index
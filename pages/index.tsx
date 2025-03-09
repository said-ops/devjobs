import Button from "@/components/common/Button";
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import useJobStore from "@/store/jobStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";

function Index() {
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const jobs = useJobStore((state) => state.filteredJobs);
  const [visibleJobs, setVisibleJobs] = useState(6);

  useEffect(() => {
    fetchJobs();
  });

  const loadMore = ()=>{
    setVisibleJobs(prev=>prev+3)
  }

  return (
    <>
      <Header />
      <main>
        <section className="trasnform translate-y-12 py-12 px-4 m-auto grid gap-y-16 lg:gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1110px]">
          {jobs.length > 0
            ? jobs.slice(0,visibleJobs).map((job) => <Link key={job.id}  href={`/jobs/${job.id}`}><JobCard {...job} /></Link>)
            : "No jobs were found"}
        </section>

        {visibleJobs<jobs.length&&
        <Button
        w="w-36"
        h="h-12"
        bg="bg-violet"
        bgHover="hover:bg-lightViolet"
        text="Load More"
        m="my-[2rem] mx-auto"
        onClick={loadMore}
      />
        }
      </main>
    </>
  );
}

export default Index;

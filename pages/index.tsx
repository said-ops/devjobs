import Button from "@/components/common/Button";
import Header from "@/components/Header";
import JobCard from "@/components/JobCard";
import SkeletonLoader from "@/components/common/SkeletonLoader";
import useJobStore from "@/store/jobStore";
import Link from "next/link";
import React, { useEffect, useState } from "react";



function Index() {
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const jobs = useJobStore((state) => state.filteredJobs);
  const error = useJobStore((state) => state.error);
  const [loading, setLoading] = useState(true);
  const [visibleJobs, setVisibleJobs] = useState(9);

  useEffect(() => {
    setLoading(true);
    fetchJobs().finally(() => {
      setTimeout(() => setLoading(false), 2000); // 2-second delay on loading state
    });
  }, [fetchJobs]);

  const loadMore = () => {
    setVisibleJobs((prev) => prev + 3);
  };

  return (
    <>
      <Header />
      <main>
        <section className="transform translate-y-12 py-24 px-4 m-auto grid gap-y-16 lg:gap-x-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:max-w-[1110px]">
          {loading ? (
            Array.from({ length: 9 }).map((_, index) => <SkeletonLoader key={index} />)
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : jobs.length > 0 ? (
            jobs.slice(0, visibleJobs).map((job) => (
              <Link key={job.id} href={`/jobs/${job.id}`}>
                <JobCard {...job} />
              </Link>
            ))
          ) : (
            <p>No jobs were found</p>
          )}
        </section>

        {visibleJobs < jobs.length && !loading && (
          <Button
            w="w-36"
            h="h-12"
            bg="bg-violet"
            bgHover="hover:bg-lightViolet"
            text="Load More"
            m="my-[2rem] mx-auto"
            onClick={loadMore}
          />
        )}
      </main>
    </>
  );
}

export default Index;

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import HeaderDetails from "@/components/HeaderDetails";
import Button from "@/components/common/Button";
import FooterDetails from "@/components/FooterDetails";
import useJobStore from "@/store/jobStore";

function Details() {
  const selectedJob = useJobStore((state) => state.selectedJob);
  const selectJob = useJobStore((state) => state.selectJob);
  const fetchJobs = useJobStore((state) => state.fetchJobs);
  const route = useRouter();
  const { id } = route.query;

  useEffect(() => {
    const loadJob = async () => {
      await fetchJobs();
      if (id) {
        const jobId = Number(id);
        if (!isNaN(jobId)) {
          selectJob(jobId);
        }
      }
    };
    loadJob();
  }, [id,fetchJobs,selectJob]);
  return (
    <>
      <HeaderDetails />
      {/* comapny info */}
      <main className="md:max-w-[689px] lg:max-w-[730px] font-kumbh  mx-auto p-4 ">
        {/* deatils header  */}
        <section className="flex flex-col md:flex-row bg-white dark:bg-[#19202D] overflow-hidden rounded-lg md:w-auto md:h-auto w-[327px] h-[205px] m-auto ">
          <div
            className="md:w-[140px] md:h-[140px] w-[50px] h-[50px] flex items-center justify-center m-auto rounded-md"
            style={{ backgroundColor: selectedJob?.logoBackground }}
          >
            <img
              src={selectedJob?.logo}
              alt=""
              className="md:w-[81px] md:h-[23px] "
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center flex-1 md:p-8 p-3">
            <div className="flex flex-col md:gap-4 gap-2 md:ml-8  font-kumbh">
              <h1 className="text-[26px] text-veryDarkBlue dark:text-white font-bold">
                {selectedJob?.company}
              </h1>
              <p className="font-light text-gray">{selectedJob?.website}</p>
            </div>
            <Button
              w="w-36"
              h="h-12"
              bg="bg-[#C9C9C9]"
              bgHover="hover:bg-violet"
              text="Company site"
              m="text-violet"
            />
          </div>
        </section>
        {/* job desc */}
        <section className="my-8 bg-white dark:bg-veryDarkBlue md:p-16 p-4 rounded-md flex flex-col gap-16">
          {/* job title */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <p className="flex text-gray gap-4">
                <span>{selectedJob?.postedAt}</span>
                <span>.</span>
                <span>{selectedJob?.contract}</span>
              </p>
              <h1 className="md:text-[26px] text-[19px] text-veryDarkBlue dark:text-white font-bold ">
                {selectedJob?.position}
              </h1>
              <p className="text-violet font-semibold">
                {selectedJob?.location}
              </p>
            </div>
            <Button
              w="md:w-36"
              h="h-12"
              bg="bg-violet"
              bgHover="hover:bg-violet"
              text="Apply"
              m="w-full"
            />
          </div>
          {/* job desc    */}
          <p className="text-gray leading-7 text-[16px]">
            {selectedJob?.description}
          </p>
          {/* requirements */}
          <div className="flex flex-col gap-4">
            <h2 className="text-veryDarkBlue dark:text-white font-bold text-[20px]">
              Requirements
            </h2>
            <p className="text-gray leading-7 text-[16px]">
              {selectedJob?.requirements.content}
            </p>
            <ul className="text-gray flex flex-col gap-2 list-disc marker:text-violet mt-4 ">
              {selectedJob?.requirements.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
          {/* what will you do */}
          <div className="flex flex-col gap-4">
            <h2 className="text-veryDarkBlue dark:text-white font-bold text-[20px]">
              What You Will Do
            </h2>
            <p className="text-gray leading-7 text-[16px]">
              {selectedJob?.role.content}
            </p>
            <ol className="text-gray flex flex-col gap-2 list-decimal marker:text-violet mt-4 ">
              {selectedJob?.role.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </section>
      </main>
      <FooterDetails  />
    </>
  );
}

export default Details;

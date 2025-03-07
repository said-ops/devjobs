import React from "react";

function JobCard() {
  return (
    // job card
    <div className="flex flex-col justify-center gap-6 p-4 rounded-md transform transition-all ease-in-out  font-kumbh bg-white w-[327px] md:w-[339px] lg:w-[350px] h-56 m-auto">
      {/* logo */}
      <div className="w-[50px] h-[50px] bg-[hsl(36,87%,49%)] flex items-center justify-center rounded-xl absolute top-[-1.5rem] left-[1.5rem]">
        <img src="/assets/logos/scoot.svg" alt="company logo" />
      </div>
      {/* card text */}
      <div className="mt-4 flex flex-col gap-2">
        {/* date posted */}
        <div className="font-light text-gray flex items-center gap-1">
          <span>5h ago</span>
          <span className="font-bold">.</span>
          <span>full time</span>
        </div>
        {/* job title */}
        <h2 className="text-veryDarkBlue text-[20px] font-bold">
          Senior Software Engineer
        </h2>
        {/* company name */}
        <span className="text-gray font-light">scoot</span>
      </div>
      {/* location */}
      <span className="text-violet text-[14px] font-bold">United Kingdom</span>
    </div>
  );
}

export default JobCard;

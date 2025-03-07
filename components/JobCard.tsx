import React from "react";
import { Job } from "@/interface";

function JobCard({  company, logo, logoBackground, position, postedAt, contract, location }:Job) {
  return (
    // job card
    <div className="flex flex-col justify-center gap-6 p-4 rounded-md transform transition-all ease-in-out  font-kumbh bg-white w-[320px] md:w-[339px] lg:w-[350px] h-56 m-auto">
      {/* logo */}
      <div className={`w-[50px] h-[50px]  flex items-center justify-center rounded-xl absolute top-[-1.5rem] left-[1.5rem]`}
      style={{ backgroundColor: logoBackground }}
      >
        <img src={`${logo}`} alt="company logo" />
      </div>
      {/* card text */}
      <div className="mt-4 flex flex-col gap-2">
        {/* date posted */}
        <div className="font-light text-gray flex items-center gap-1">
          <span>{postedAt}</span>
          <span className="font-bold">.</span>
          <span>{contract}</span>
        </div>
        {/* job title */}
        <h2 className="text-veryDarkBlue text-[20px] font-bold">
          {position}
        </h2>
        {/* company name */}
        <span className="text-gray font-light">{company}</span>
      </div>
      {/* location */}
      <span className="text-violet text-[14px] font-bold">{location}</span>
    </div>
  );
}

export default JobCard;

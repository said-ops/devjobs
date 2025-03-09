import React from "react";
import Button from "./common/Button";
import SearcBarMobile from "./SearcBarMobile";

function SearchBar() {
  return (
    <>
      <form
        action="#"
        className=" bg-white dark:bg-veryDarkBlue min-h-[80px] xl:max-w-[1110px] mx-auto mt-6 rounded-md overflow-hidden shadow-lg hidden md:flex"
      >
        <fieldset className=" flex-1 lg:flex-[2] flex items-center pl-4 gap-2 border-r-2 border-r-lightGrey dark:border-r-veryDarkBlue ">
          <label htmlFor="query">
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
                fill="#5964E0"
                fillRule="nonzero"
              />
            </svg>
          </label>
          <input
            type="text"
            name="query"
            id="query"
            className="flex-1 outline-0 h-full dark:bg-veryDarkBlue dark:text-white"
            placeholder="Filter by title, companies, experties"
          />
        </fieldset>
        <fieldset className="flex-1  flex items-center  gap-2  pl-2 border-r-2 border-r-lightGrey dark:border-r-veryDarkBlue ">
          <label htmlFor="location">
            <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                fill="#5964E0"
                fillRule="nonzero"
              />
            </svg>
          </label>
          <input
            type="text"
            name="location "
            id="location"
            className="flex-1 outline-0 h-full dark:bg-veryDarkBlue  dark:text-white"
            placeholder="Filter by location"
          />
        </fieldset>
        <fieldset className="flex-1  flex items-center justify-between px-4  gap-2">
          <div className="flex items-center gap-1">
            <input
              type="checkbox"
              name="contract"
              id="contract"
              className=" w-4 h-4 lg:w-6 lg:h-6 dark:bg-black"
            />
            <label htmlFor="contract" className="font-kumbh md:font-semibold dark:text-white">
              Full time 
            </label>
          </div>
          <Button
            text="Search"
            bg="bg-violet"
            bgHover="hover:bg-lightViolet"
            w="w-32"
            h="h-12"
          />
        </fieldset>
      </form>
      <SearcBarMobile />
    </>
  );
}

export default SearchBar;

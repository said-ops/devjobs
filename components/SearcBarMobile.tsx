import React from "react";
import Button from "./common/Button";

function SearcBarMobile() {
  const icon = (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
        fill="white"
        fillRule="nonzero"
      />
    </svg>
  );
  return (
    <>
      <form
        action=""
        className="md:hidden max-w-[323px] m-auto flex items-center justify-between bg-white p-4 rounded-md transform -translate-y-2.5"
      >
        <input
          type="text"
          name="query"
          id="query"
          className="h-full"
          placeholder="Filter by title, companies, experties"
        />
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
            fill="#6E8098"
            fillRule="nonzero"
          />
        </svg>
        <Button h="h-12" w="w-12" icon={icon} bg="bg-violet" />
      </form>
      <form className="w-[327px] h-[217px] hidden flex flex-col justify-between bg-white p-4  m-auto absolute z-30 left-1/2 transform -translate-x-1/2 ">
        <div className="flex h-1/3 items-center gap-4 p-2 border-b border-b-gray">
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
            className="flex-1 outline-0 h-full"
            placeholder="Filter by location"
          />
        </div>
        <div className="flex items-center gap-4 p-2">
          <input
            type="checkbox"
            name="contract"
            id="contract"
            className=" w-4 h-4 lg:w-6 lg:h-6"
          />
          <label htmlFor="contract" className="font-kumbh md:font-semibold">
            Full time only
          </label>
        </div>
        <Button
          text="Search"
          bg="bg-violet"
          bgHover="hover:bg-lightViolet"
          w="w-full"
          h="h-12"
        />
      </form>
    </>
  );
}

export default SearcBarMobile;

import React from "react";
import { useRouter } from "next/router";
import HeaderDetails from "@/components/HeaderDetails";
import Button from "@/components/common/Button";

function Details() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <HeaderDetails />
      {/* comapny info */}
     <main className="md:max-w-[689px] lg:max-w-[730px] mx-auto">
     <section className="flex flex-col md:flex-row bg-white overflow-hidden rounded-lg md:w-auto md:h-auto w-[327px] h-[205px] m-auto ">
        <div
          className="md:w-[140px] md:h-[140px] w-[50px] h-[50px] flex items-center justify-center m-auto rounded-md"
          style={{ backgroundColor: "hsl(36, 87%, 49%)" }}
        >
          <img src="/assets/logos/scoot.svg" alt="" className="md:w-[81px] md:h-[23px] " />
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center flex-1 md:p-8 p-3">
          <div className="flex flex-col md:gap-4 gap-2 md:ml-8  font-kumbh">
            <h1 className="text-[26px] text-veryDarkBlue font-bold">Scoot</h1>
            <p className="font-light text-gray">scoot.com</p>
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
     </main>
    </>
  );
}

export default Details;

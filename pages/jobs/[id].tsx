import React from "react";
import { useRouter } from "next/router";
import HeaderDetails from "@/components/HeaderDetails";
import Button from "@/components/common/Button";
import FooterDetails from "@/components/FooterDetails";

function Details() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <HeaderDetails />
      {/* comapny info */}
      <main className="md:max-w-[689px] lg:max-w-[730px] font-kumbh  mx-auto p-4 ">
        {/* deatils header  */}
        <section className="flex flex-col md:flex-row bg-white overflow-hidden rounded-lg md:w-auto md:h-auto w-[327px] h-[205px] m-auto ">
          <div
            className="md:w-[140px] md:h-[140px] w-[50px] h-[50px] flex items-center justify-center m-auto rounded-md"
            style={{ backgroundColor: "hsl(36, 87%, 49%)" }}
          >
            <img
              src="/assets/logos/scoot.svg"
              alt=""
              className="md:w-[81px] md:h-[23px] "
            />
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
        {/* job desc */}
        <section className="my-8 bg-white md:p-16 p-4 rounded-md flex flex-col gap-16">
          {/* job title */}
          <div className="flex flex-col md:flex-row items-center gap-4 justify-between">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <p className="flex text-gray gap-4">
                <span>1w ago</span>
                <span>.</span>
                <span>Part Time</span>
              </p>
              <h1 className="md:text-[26px] text-[19px] text-veryDarkBlue font-bold ">
                Senior Software Engineer
              </h1>
              <p className="text-violet font-semibold">United Kingdom</p>
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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti. Sed egestas, ante et vulputate volutpat, eros pede semper
            est, vitae luctus metus libero eu augue. Morbi purus libero,
            faucibus adipiscing, commodo quis, gravida id, est. Sed lectus.
            Praesent elementum hendrerit tortor. Sed semper lorem at felis.
            Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod
            dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu,
            dapibus eu, fermentum et, dapibus sed, urna.
          </p>
          {/* requirements */}
          <div className="flex flex-col gap-4">
            <h2 className="text-veryDarkBlue font-bold text-[20px]">
              Requirements
            </h2>
            <p className="text-gray leading-7 text-[16px]">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <ul className="text-gray flex flex-col gap-2 list-disc marker:text-violet mt-4 ">
              <li>Morbi interdum mollis sapien. Sed</li>
              <li>
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus
              </li>
              <li>
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                lectus.
              </li>
              <li>Morbi interdum mollis sapien. Sed</li>
            </ul>
          </div>
          {/* what will you do */}
          <div className="flex flex-col gap-4">
            <h2 className="text-veryDarkBlue font-bold text-[20px]">
              What You Will Do
            </h2>
            <p className="text-gray leading-7 text-[16px]">
              Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia,
              magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae
              facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis,
              adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse
              ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante,
              mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede,
              ornare a, lacinia eu, vulputate vel, nisl.
            </p>
            <ol className="text-gray flex flex-col gap-2 list-decimal marker:text-violet mt-4 ">
              <li>Morbi interdum mollis sapien. Sed</li>
              <li>
                Phasellus lacinia magna a ullamcorper laoreet, lectus arcu
                pulvinar risus
              </li>
              <li>
                Mauris nibh felis, adipiscing varius, adipiscing in, lacinia
                vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut
                lectus.
              </li>
              <li>Morbi interdum mollis sapien. Sed</li>
            </ol>
          </div>
        </section>
      </main>
      <FooterDetails/>
    </>
  );
}

export default Details;

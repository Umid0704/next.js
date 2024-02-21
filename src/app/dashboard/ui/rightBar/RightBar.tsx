import Image from "next/image";
import React from "react";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

export default function RightBar() {
  return (
    <div className="fixed">
      <div className=" bg-gradient-to-t to-[#182237] from-[#253352] px-[20px] py-[24px] rounded-[10px] mb-[20px] relative ">
        <div className=" absolute bottom-0 right-0 w-[50%] h-[50%]">
          <Image className="opacity-20 object-contain " src='/favicon.ico' fill alt='image'  />
        </div>
        <div className="flex flex-col gap-[24px]">
          <span className="font-bold">Available Now</span>
          <h3>How to use the new version of the admin dashboadr?</h3>
          <span className="text-gray-300 font-medium text-[12px]">Takes 4 minutes to learn</span>
          <p  className=" font-medium text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Nam quidem dignissimos corporis sapiente asperiores!
          </p>
          <button className="p-[10px] flex gap-[10px]  items-center w-max"><MdPlayCircleFilled/> Watch</button>
        </div>
      </div>
      <div className=" bg-gradient-to-t to-[#182237] from-[#253352] px-[20px] py-[24px] rounded-[10px] mb-[20px] relative ">
        <div className="flex flex-col gap-[24px]">
          <span className="font-bold">Coming Soong</span>
          <h3>New server action are available partial pre-rendering is coming up!</h3>
          <span className="text-gray-300 font-medium text-[12px]">Boost your Productivity</span>
          <p className=" font-medium text-[14px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Sed ab labore fugiat vitae facilis.</p>
          <button className="p-[10px] flex gap-[10px]  items-center w-max"><MdReadMore/> Learn</button>
        </div>
      </div>
    </div>
  );
}

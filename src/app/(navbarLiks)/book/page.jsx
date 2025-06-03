'use client';
import FindStaysFlying from '@/app/_components/findStaysFlying/page';
import HandleHotelInfo from '@/app/_components/handleHotelInfo/page';
import HotelFilterDetails from '@/app/_components/hotelFilterDetails/page';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Book() {
  // // click to open filter
  const [isclick, setIsClick] = useState(false);

  return (
    <div className="md:mt-28 mt-14 text-black  ">
      <div className="flex flex-col gap-y-5 ">
        <div className="filter">
          <FindStaysFlying />
        </div>
        <div className="flex flex-col gap-y-2 relative">
          <div className="mobileicon flex gap-x-5 items-center text-[16px] text-[#00234D] md:hidden px-7 a ">
            <i
              onClick={() => setIsClick(!isclick)}
              className="fa-solid fa-bars-progress text-[16px]"
            ></i>
            <div className="Links flex gap-x-3 items-center">
              <Link href="/">Home</Link>
              <i className="fa-solid fa-chevron-right"></i>
              <Link href="/book">Book</Link>
            </div>
          </div>
          <div className="details lg:flex block gap-x-5 lg:w-[95%] px-3 lg:px-0 w-full mx-auto mb-40">
            <div
              className={`filtring w-full md:w-1/4 md:min-w-[150px] py-5 px-3  lg:block fixed top-0 left-0 right-0 md:static z-[1000] bg-white h-screen ${
                isclick ? 'block' : 'hidden'
              }`}
            >
              <div className="title text-[20px] text-[#00234D] font-semibold flex items-center justify-between">
                <h1 className="">Filters</h1>
                <span
                  className={`text-[25px] ${
                    isclick ? 'block' : 'hidden'
                  } mt-3 cursor-pointer`}
                  onClick={() => setIsClick(false)}
                >
                  x
                </span>
              </div>

              <div className="details">
                <HotelFilterDetails />
              </div>
              <button
                onClick={() => setIsClick(false)}
                className={`${
                  isclick ? 'block' : 'hidden'
                } bg-[#00234D] w-full py-2 rounded-md text-white text-[18px]`}
              >
                search
              </button>
            </div>
            <div className="show__info lg:w-3/4 ">
              <HandleHotelInfo />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

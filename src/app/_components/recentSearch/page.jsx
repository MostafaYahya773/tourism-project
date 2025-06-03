'use client';
import React, { useState } from 'react';

export default function RecentSearch() {
  //recent searches
  let [plan, setPlan] = useState([
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'GIZA, EGY',
      places: '325 places',
      id: '1',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'LUXURY, EGY',
      places: '325 places',
      id: '2',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'ALIXANDER, EGY',
      places: '325 places',
      id: '3',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'LUXURY, EGY',
      places: '325 places',
      id: '4',
    },
  ]);
  return (
    <div className="flex flex-col gap-y-5">
      <div className="title text-[#00234D]">
        <h1 className="text-[20px] md:text-[25px] lg:text-[32px] font-bold ">
          Your recent searches
        </h1>
      </div>
      <div className="flex gap-x-3 overflow-x-auto lg:overflow-x-hidden">
        {plan.map((ele) => (
          <div
            key={ele.id}
            className="flex gap-2 items-center md:p-3 w-full md:w-1/3 lg:w-1/4 shrink-0"
          >
            <img
              className="w-[90px] h-[90px] rounded-xl"
              src={ele.img}
              alt="img"
            />
            <div className="info flex flex-col gap-y-2 flex-wrap">
              <p className="text-[#00234D]  text-[16px] font-semibold">
                {ele.place}
              </p>
              <p className="flex gap-x-3 text-[#00234D]  opacity-70 text-[16px] font-normal">
                {ele.places}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

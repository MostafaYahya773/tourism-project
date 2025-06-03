'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function OurPlans() {
  let [plan, setPlan] = useState([
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',

      id: '1',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',
      id: '2',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',
      id: '3',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',
      id: '4',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',
      id: '5',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',
      id: '6',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',
      id: '7',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',
      id: '8',
    },
    {
      img: '/TURISM-AIG-WEB-PIC/cairo.jpg',
      place: 'cairo',
      type: 'flights',
      Accommodation: 'Hotels',
      Resorts: 'Resorts',
      id: '9',
    },
  ]);
  return (
    <div className="flex flex-col gap-y-7">
      <div className="plans flex items-center justify-between flex-wrap gap-y-3">
        <div className="title flex flex-col gap-y-3 text-[#00234D]">
          <h1 className=" text-[32px] font-semibold">Plan your perfect trip</h1>
          <p className="font-normal opacity-75">
            Search Flights & Places Hire to our most popular destinations
          </p>
        </div>
        <Link
          href="/"
          className="border-2 border-[#76192D] text-[#00234D] px-5 py-2 rounded-md font-medium"
        >
          See more places
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-x-3 gap-y-10">
        {plan.map((ele) => (
          <div
            key={ele.id}
            className="flex gap-2 items-center md:p-3 flex-wrap lg:flex-nowrap gap-y-2"
          >
            <img
              className="lg:w-[130px] w-full lg::h-[90px] rounded-xl"
              src={ele.img}
              alt="img"
            />
            <div className="info flex flex-col gap-y-2 flex-wrap text-wrap ">
              <p className="text-[#00234D] opacity-70 text-[16px] font-semibold">
                {ele.place}
              </p>
              <p className="flex gap-x-3 text-[#00234D] text-[14px] font-normal">
                {ele.type} . {ele.Accommodation} . {ele.Resorts}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

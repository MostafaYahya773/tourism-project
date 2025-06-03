'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function TrivelInfo() {
  const [data, setData] = useState([
    {
      city: 'Giza',
      price: '700$',
      paragraph: 'An amizing journey',
      img: '/TURISM-AIG-WEB-PIC/mainpage1.jpg',
      id: 1,
    },
    {
      city: 'Giza',
      price: '700$',
      paragraph: 'An amizing journey',
      img: '/TURISM-AIG-WEB-PIC/mainpage1.jpg',
      id: 2,
    },
    {
      city: 'Giza',
      price: '700$',
      paragraph: 'An amizing journey',
      img: '/TURISM-AIG-WEB-PIC/mainpage1.jpg',
      id: 3,
    },
    {
      city: 'Giza',
      price: '700$',
      paragraph: 'An amizing journey',
      img: '/TURISM-AIG-WEB-PIC/mainpage1.jpg',
      id: 4,
    },
  ]);
  return (
    <div className="flex flex-col gap-y-5">
      <div className="title flex items-center justify-between gap-x-5 flex-wrap gap-y-5 text-[#00234DDE]">
        <div className="text flex flex-col gap-y-3">
          <h1 className="text-[20px] md:text-[25px] lg:text-[32px] font-bold ">
            Fall into travel
          </h1>
          <p className="font-normal ">
            Going somewhere to celebrate this season? Whether you’re going home
            or somewhere to roam,
          </p>
        </div>
        <Link
          className="w-[100px] h-[40px] border-2 border-[#00234DDE] flex justify-center items-center rounded font-medium"
          href=""
        >
          See All
        </Link>
      </div>
      <div className="info flex gap-5 overflow-x-auto">
        {data.map((ele) => (
          <div
            key={ele.id}
            className="rounded-xl  min-w-[315px] grow  shrink-0"
          >
            <div
              className="hero bg-cover bg-center w-full h-[420px] relative rounded-xl"
              style={{
                backgroundImage: `url(${ele.img})`,
              }}
            >
              <div className="title flex items-end justify-center w-full h-full text-[#FFFFFF]">
                <div className="flex flex-col gap-y-3">
                  <div className="info flex justify-between  gap-x-16 items-center">
                    <div className="name">
                      <h1 className="city text-[24px] font-semibold">
                        {ele.city}
                      </h1>
                      <p className="font-normal text-[14px]">{ele.paragraph}</p>
                    </div>
                    <p className="price text-[24px] font-semibo">{ele.price}</p>
                  </div>
                  <Link
                    href=""
                    className="w-full text-center mb-3 py-2 bg-[#00234DDE] rounded-md"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

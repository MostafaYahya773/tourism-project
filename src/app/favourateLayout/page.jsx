'use client';
import React, { useState } from 'react';
import FavouratePlaces from '../_components/favouratePlases/page';
import FavourateTransport from '../_components/FavourateTransport/page';

export default function FavourateLayout() {
  // change page
  let [changePage, setChangePage] = useState('places');
  // favourate department
  const [department, setDepartMent] = useState([
    { name: 'TRANSPORT', marked: '3 marked', id: 0 },
    { name: 'Places', marked: '3 marked', id: 1 },
  ]);
  // put id of department
  let [departid, setDepartId] = useState(1);
  return (
    <div className="flex flex-col gap-y-2 mt-24  w-[95%] mx-auto">
      <h1 className="title font-bold text-[#76192D] text-[18px] md:text-[25px] lg:text-[30px]">
        Favourites
      </h1>
      <div className="flex flex-col gap-y-7">
        <div className="departments grid grid-cols-1 md:grid-cols-2 gap-4">
          {department?.map((depart, index) => (
            <div
              onClick={() => {
                setDepartId(depart?.id), setChangePage(depart?.name);
              }}
              key={depart?.id}
              className={`${
                departid === index ? 'border-b-4 border-[#FCA311]' : ''
              } p-3 shadow-lg text-[#00234D] cursor-pointer`}
            >
              <h1 className="font-semibold text-[12px] md:text-[18px]">
                {depart.name}
              </h1>
              <p className="text-[14px] font-normal opacity-40">
                {depart.marked}
              </p>
            </div>
          ))}
        </div>
        <div className="showresult mb-[200px]">
          {changePage === 'Places' && <FavouratePlaces />}
          {changePage === 'TRANSPORT' && <FavourateTransport />}
        </div>
      </div>
    </div>
  );
}

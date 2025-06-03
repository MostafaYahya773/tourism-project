'use client';
import React, { useState } from 'react';

export default function SmartScreenCity() {
  const [city, setCity] = useState([
    {
      cittyImg: 'TURISM-AIG-WEB-PIC/aswan-egy.jpg',
      cityName: 'Luxor now',
      id: 1,
    },
    {
      cittyImg: 'TURISM-AIG-WEB-PIC/aswan-egy.jpg',
      cityName: ' Sharm El Sheikh now',
      id: 2,
    },
  ]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {city?.map((ele) => (
        <div key={ele.id} className="CityEvents relative rounded-2xl">
          <img
            className="h-[200px] w-full rounded-3xl"
            src={ele.cittyImg}
            alt="img"
          />
          <h1 className="absolute text-[14px] font-normal top-3 left-3 bg-[#76192DE5] p-2 rounded-2xl text-[#ffffff]">
            {ele.cityName}
          </h1>
        </div>
      ))}
    </div>
  );
}

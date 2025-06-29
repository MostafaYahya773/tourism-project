'use client';
import React, { useEffect, useState } from 'react';
export default function HotelFilterDetails() {
  // rating state
  const [rating, setRating] = useState([0, 1, 2, 3, 4]);
  // freebies state
  const [freebies, setFreebies] = useState([
    { name: 'Free breakfast' },
    { name: 'Free parking' },
    { name: 'Free internet' },
    { name: 'Free airport shuttle' },
    { name: 'Free cancellation' },
  ]);
  // amenities state
  const [amenities, setAmenities] = useState([
    { name: '24hr front desk' },
    { name: 'Air-conditioned' },
    { name: 'Fitness' },
    { name: 'Pool' },
  ]);
  //racing open
  const [racingopen, setRacingOpen] = useState(true);
  //amenities open
  const [amenitiesOpen, setAmenitiesOpen] = useState(true);
  //freebies open
  const [freebiesOpen, setFreebiesOpen] = useState(true);
  //save target
  const [saveTarget, setSaveTarget] = useState([]);

  // handle all freebise
  const handleFreebise = (e) => {
    let result = e.target.name;
    if (saveTarget.includes(result)) {
      setSaveTarget(saveTarget.filter((item) => item !== result));
    } else {
      setSaveTarget([...saveTarget, result]);
    }
  };
  useEffect(() => {}, [saveTarget]);
  return (
    <div className="flex flex-col gap-y-0 text-[#00234D]  ">
      <div className="price"></div>
      <button className="raiting flex flex-col gap-y-5 py-5 cursor-pointer border-b border-[#00234d29] ">
        <div
          onClick={() => setRacingOpen(!racingopen)}
          className="title flex justify-between items-center h-full"
        >
          <h1 className="font-semibold">Rating</h1>
          <i
            className={`fa-solid fa-chevron-${
              racingopen ? 'down' : 'right'
            } mt-3`}
          ></i>
        </div>
        <div className={`flex gap-x-2 ${racingopen ? 'block' : 'hidden'}  `}>
          {rating.map((rate, index) => (
            <div
              key={index}
              className="box py-2 px-3 border border-[#8DD3BB] flex font-medium rounded-md cursor-pointer text-[12px]"
            >
              {rate}
              <span>+</span>
            </div>
          ))}
        </div>
      </button>
      <button className="freebies flex flex-col gap-y-5 py-5 cursor-pointer border-b border-[#00234d29]">
        <div
          onClick={() => setFreebiesOpen(!freebiesOpen)}
          className="title flex justify-between items-center"
        >
          <h1 className="font-semibold">Freebies</h1>
          <i
            className={`fa-solid fa-chevron-${
              freebiesOpen ? 'down' : 'right'
            } mt-3`}
          ></i>
        </div>
        <div
          className={`flex flex-col gap-y-2  ${
            freebiesOpen ? 'block' : 'hidden'
          }`}
        >
          {freebies?.map((item, index) => (
            <div key={index} className="flex ">
              <div className="flex gap-x-2 ">
                <input
                  type="checkbox"
                  id={item?.name}
                  name={item?.name}
                  checked={saveTarget.includes(item.name)}
                  onChange={handleFreebise}
                />
                <label className="cursor-pointer" htmlFor={item?.name}>
                  {item?.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </button>
      <button className="amenities flex flex-col gap-y-5 py-5 cursor-pointer border-b border-[#00234d29]">
        <div
          onClick={() => setAmenitiesOpen(!amenitiesOpen)}
          className="title flex justify-between items-center"
        >
          <h1 className="font-semibold">amenities</h1>
          <i
            className={`fa-solid fa-chevron-${
              amenitiesOpen ? 'down' : 'right'
            } mt-3`}
          ></i>
        </div>
        <div
          className={`flex flex-col gap-y-2  ${
            amenitiesOpen ? 'block' : 'hidden'
          }`}
        >
          {amenities?.map((item, index) => (
            <div key={index} className="flex ">
              <div className="flex gap-x-2 ">
                <input type="checkbox" id={item?.name} />
                <label className="cursor-pointer" htmlFor={item?.name}>
                  {item?.name}
                </label>
              </div>
            </div>
          ))}
        </div>
      </button>
    </div>
  );
}

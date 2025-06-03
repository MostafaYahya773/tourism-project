'use client';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
export default function FindStaysFlying() {
  let path = usePathname();

  // set from - to
  let [place, setPlace] = useState([
    { from: 'Cairo', to: 'Aswan' },
    { from: 'Cairo', to: 'luxor' },
    { from: 'minya', to: 'cairo' },
  ]);
  // chick in
  let [chickIn, setChickIn] = useState(['07 Nov 22', '15 Nov 22', '20 Nov 22']);
  // set chick out
  let [chickOut, setChickOut] = useState([
    '07 Nov 22',
    '15 Nov 22',
    '20 Nov 22',
  ]);
  // Passenger - Class
  let [passCla, setPassCla] = useState([
    { Passenger: '1 Passenger', class: 'Economy', id: '1' },
    { Passenger: '2 Passenger', class: 'buccness', id: '2' },
    { Passenger: '1 Passenger', class: 'Economy', id: '3' },
  ]);

  const handleForm = (e) => {
    let result = e.target.value;
  };

  return (
    <div
      className={`w-[95%] h-fit bg-w shadow-xl mx-auto rounded-xl gap-y-12 p-5 hidden md:grid bg-white ${
        path === '/book' ? 'grid-rows-none' : 'grid-rows-[auto_auto]'
      } `}
    >
      <div className={`title ${path === '/book' ? 'hidden' : 'block'}`}>
        <h1 className=" fliying_title text-[#114577] text-[20px] font-semibold relative">
          Where are you flying?
        </h1>
      </div>

      <div className="filtring flex flex-col gap-y-3">
        <form>
          <div className="flex flex-col gap-y-5 gap-x-5 flex-wrap">
            <div
              className={` grid md:grid-cols-2 ${
                path === '/book'
                  ? 'lg:grid-cols-[1fr_1fr_1fr_1fr_auto]'
                  : 'lg:grid-cols-4'
              }  gap-x-2 gap-y-5 `}
            >
              <div className="place relative">
                <label
                  htmlFor="place"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Enter Destination
                </label>
                <select
                  id="place"
                  name="place"
                  className="w-full border border-gray-300 rounded-md p-3 "
                  onChange={handleForm}
                >
                  <option value="">Select a Place</option>
                  {place?.map((place) => (
                    <option
                      key={place.to}
                      value={`${place.from} - ${place.to}`}
                    >
                      {place.from} - {place.to}
                    </option>
                  ))}
                </select>
              </div>
              <div className="chickIn relative">
                <label
                  htmlFor="chickIn"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Check In
                </label>
                <select
                  id="chickIn"
                  name="place"
                  className="w-full border border-gray-300 rounded-md p-3  "
                >
                  <option value="">{chickIn?.[0]}</option>
                  {chickIn?.map((type) => (
                    <option key={type} value={`${chickIn}`}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="chickOut relative">
                <label
                  htmlFor="chickOut"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Check Out
                </label>
                <select
                  id="chickOut"
                  name="chickOut"
                  className="w-full border border-gray-300 rounded-md p-3"
                >
                  <option value="">{chickOut?.[0]}</option>
                  {chickOut?.map((time) => (
                    <option key={time} value={`${chickOut}`}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
              <div className="place relative">
                <label
                  htmlFor="Passenger-Class"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Rooms & Guests
                </label>
                <select
                  id="Passenger-Class"
                  name="Passenger-Class"
                  className="w-full border border-gray-300 rounded-md p-3 "
                >
                  <option value="">{passCla[1].class}</option>
                  {passCla?.map((type) => (
                    <option
                      key={type.id}
                      value={`${type.Passenger} - ${type.class}`}
                    >
                      {type.Passenger} - {type.class}
                    </option>
                  ))}
                </select>
              </div>
              <button
                type="submit"
                className={`${
                  path === '/book'
                    ? 'block bg-[#00234D] text-[#FCA311]'
                    : 'bg-[#76192D]  text-white hidden'
                } flex gap-x-2 text-[14px] font-medium items-center px-5 py-3 col-span-2 lg:col-span-1  rounded-sm`}
              >
                <div className="w-full">
                  <p className="text-center w-full lg:hidden text-[18px]">
                    search
                  </p>
                  <i className="fa-solid fa-magnifying-glass hidden lg:block"></i>
                </div>
              </button>
            </div>
            <button
              type="submit"
              className={`${
                path === '/book' ? 'hidden' : ''
              } flex gap-x-2 text-[14px] font-medium items-center px-5 py-3 bg-[#76192D]  text-white w-fit self-end rounded-sm`}
            >
              <i className="fa-solid fa-location-arrow"></i>
              <p>Show Tran</p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

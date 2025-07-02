'use client';
import React, { useState } from 'react';
export default function FindCarFilter() {
  // set from - to
  let [place, setPlace] = useState([
    { from: 'Cairo', to: 'Aswan' },
    { from: 'Cairo', to: 'luxor' },
    { from: 'minya', to: 'cairo' },
  ]);
  // set rtip
  let [type, setType] = useState(['Go', 'Return', 'GO - Return']);
  // set Depart- Return
  let [depRet, setDepRet] = useState([
    { dep: '07 Nov 22', ret: '13 Nov 22' },
    { dep: '15 Nov 22', ret: '22 Nov 22' },
    { dep: '20 Nov 22', ret: '5 Des 22' },
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
    <div className="w-[95%] h-fit bg-white shadow-xl mx-auto rounded-xl  md:grid grid-rows-[auto_1fr] gap-y-12 p-5">
      <div className="logos flex gap-x-4 text-[#00234D] font-semibold relative mb-10 md:mb-0">
        <div className="tran flex gap-1 ">
          <i className="fa-solid fa-car w-[20px] h-[16px]"></i>
          <p className="text-[14px] font-semibold">Tran</p>
        </div>
        <div className="stays flex gap-1">
          <i className="fa-solid fa-bed w-[20px] h-[16px]"></i>
          <p className="text-[14px] font-semibold">Stays</p>
        </div>
      </div>

      <div className="filtring flex flex-col gap-y-3">
        <form>
          <div className="flex flex-col gap-y-5 gap-x-5 flex-wrap">
            <div className=" grid  md:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-5 ">
              <div className="place relative">
                <label
                  htmlFor="place"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  From - To
                </label>
                <select
                  id="place"
                  name="place"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 "
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
              <div className="trip relative">
                <label
                  htmlFor="trip"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Trip
                </label>
                <select
                  id="trip"
                  name="place"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 "
                >
                  <option value="">Ruturn</option>
                  {type?.map((type) => (
                    <option key={type} value={`${type}`}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="Depart__Return relative">
                <label
                  htmlFor="Depart-Return"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Depart- Return
                </label>
                <select
                  id="Depart-Return"
                  name="Depart-Return"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 "
                >
                  <option value="">Select a Time</option>
                  {depRet?.map((time) => (
                    <option key={time.dep} value={`${time.dep} - ${time.ret}`}>
                      {time.dep} - {time.ret}
                    </option>
                  ))}
                </select>
              </div>
              <div className="place relative">
                <label
                  htmlFor="Passenger-Class"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Passenger - Class
                </label>
                <select
                  id="Passenger-Class"
                  name="Passenger-Class"
                  className="w-full border border-gray-300 rounded-md px-3 py-2 "
                >
                  <option value="">Select a class</option>
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
            </div>
            <button
              type="submit"
              className="flex gap-x-2 text-[14px] font-medium items-center px-5 py-3 bg-[#76192D]  text-white w-fit self-end rounded-sm"
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

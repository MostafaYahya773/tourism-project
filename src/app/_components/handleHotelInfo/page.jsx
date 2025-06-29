import React, { useState } from 'react';
import Hotel from '../hotel/page';
import Motels from '../motels/page';
import Resorts from '../resorts/page';

export default function HandleHotelInfo() {
  // check select
  const [isActive, setIsActive] = useState('Hotel');
  //  routing navbar
  const [routNav, setRoutNav] = useState([
    { name: 'Hotel', places: 250, id: 0 },
    { name: 'Motels', places: 255, id: 1 },
    { name: 'Resorts', places: 260, id: 2 },
  ]);
  const [selectId, setSelectId] = useState(0);
  return (
    <div className="flex flex-col gap-y-7 ">
      <div className="links flex justify-between  gap-x-3 shadow-xl sticky top-[60px] z-[90] bg-white">
        {routNav?.map((routName, index) => (
          <div
            onClick={() => setIsActive(`${routName?.name}`)}
            className={`w-full flex justify-center    `}
            key={routName?.id}
          >
            <button
              onClick={() => setSelectId(routName?.id)}
              className={`${
                selectId === index ? 'border-b-2 border-[#FCA311C2]' : ''
              } w-full flex items-center px-3 justify-center lg:justify-start h-[70px]  text-[#112211] font-semibold`}
            >
              <div>
                <p className="text-start">{routName.name}</p>
                <p className="text-[14px] font-normal opacity-40">
                  {routName?.places} places
                </p>
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="results ">
        {isActive === 'Hotel' && <Hotel />}
        {isActive === 'Motels' && <Motels />}
        {isActive === 'Resorts' && <Resorts />}
      </div>
    </div>
  );
}

import React, { useState } from 'react';
import Hotel from '../hotel/page';
import Motels from '../motels/page';
import Resorts from '../resorts/page';

export default function HandleHotelInfo() {
  // check select
  const [isActive, setIsActive] = useState('Hotel');
  //  routing navbar
  const [routNav, setRoutNav] = useState([
    { name: 'Hotel', places: 250, id: 1 },
    { name: 'Motels', places: 255, id: 2 },
    { name: 'Resorts', places: 260, id: 3 },
  ]);

  return (
    <div className="flex flex-col gap-y-7 ">
      <div className="links flex justify-between  gap-x-3 shadow-xl sticky top-[60px] z-[90] bg-white">
        {routNav?.map((routName) => (
          <div
            onClick={() => setIsActive(`${routName?.name}`)}
            className={`w-full flex justify-center px-3  py-2 `}
            key={routName?.id}
          >
            <button className="w-full flex items-center justify-center lg:justify-start h-[70px] border-e border-[#D7E2EE] text-[#112211] font-semibold">
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

import Link from 'next/link';
import React from 'react';

export default function SelectTwo() {
  return (
    <div className="grid grid-cols-1 gap-y-4 md:grid-cols-2 gap-x-3 ">
      <div className="img__traffic relative">
        <img
          className=" w-full"
          src="/TURISM-AIG-WEB-PIC/traffic40.png"
          alt="img"
        />
        <div className="title px-2 text-white absolute bottom-2 md:bottom-5 lg:bottom-13 gap-y-3 lg:gap-y-5 w-full text-center flex justify-center items-center flex-col ">
          <h1 className=" font-bold text-[clamp(14px,5vw,40px)]">
            Transportation
          </h1>
          <p className="font-normal text-[clamp(14px,1vw,40px)]">
            Search cars & Places Hire to our most popular destinations
          </p>
          <Link
            href="/"
            type="submit"
            className="flex gap-x-2 text-[14px] font-medium items-center px-3 py-2 md:px-5 md:py-3 bg-[#76192D]  text-white w-fit  rounded-sm"
          >
            <i className="fa-solid fa-location-arrow"></i>
            <p className="text-[clamp(9px,1vw,20px)]">Show Tran</p>
          </Link>
        </div>
      </div>
      <div className="img__hoteil relative">
        <img
          className="  w-full "
          src="/TURISM-AIG-WEB-PIC/hotel41.png"
          alt="img"
        />
        <div className="title px-2 text-white absolute bottom-2 md:bottom-5 lg:bottom-13 gap-y-3 lg:gap-y-5 w-full text-center flex justify-center items-center flex-col ">
          <h1 className=" font-bold text-[clamp(14px,7vw,40px)]">Hotels</h1>
          <p className="font-normal text-[clamp(14px,1vw,40px)]">
            Search hotels & Places Hire to our most popular destinations
          </p>
          <Link
            href="/book"
            type="submit"
            className="flex gap-x-2 text-[14px] font-medium items-center px-3 py-2 md:px-5 md:py-3 bg-[#76192D]  text-white w-fit  rounded-sm"
          >
            <i className="fa-solid fa-location-arrow"></i>
            <p className="text-[clamp(9px,1vw,20px)]">Show Tran</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import FindCarFilter from './_components/findCarFilter/page';
import OurPlans from './_components/ourPlans/page';
import SelectTwo from './_components/selecttwo/page';
import RecentSearch from './_components/recentSearch/page';
import TrivelInfo from './_components/travelInfo/page';
import SmartScreen from './_components/smartScreen/page';
import SmartScreenCity from './_components/smartScreenCity/page';
import Reviews from './_components/reviews/page';
export default function Home() {
  return (
    <div className="grid grid-rows-auto gap-y-10">
      <div
        className="hero bg-cover bg-center md:h-[580px] h-[400px] relative"
        style={{ backgroundImage: 'url("/TURISM-AIG-WEB-PIC/mainpage1.jpg")' }}
      >
        <div className="title  flex flex-col w-full h-full text-center justify-center items-center text-white">
          <h5 className="text-[30] sm:text-[30px] lg:text-[45px] font-bold">
            Helping Others
          </h5>
          <h1 className="text-[40px] sm:text-[50px] lg:text-[80px] font-bold">
            Live & Travel
          </h1>
          <p className="text-[16px] sm:text-[16px] lg:text-[20px]  font-semibold">
            Special offers to suit your plan
          </p>
        </div>
        <div className="filtring absolute w-full -bottom-24 z-[200]">
          <FindCarFilter />
        </div>
      </div>
      <div className="plans  md:mt-20 px-2 md:px-10">
        <OurPlans />
      </div>
      <div className="select mt-10 px-2 md:px-10">
        <SelectTwo />
      </div>
      <div className="recent mt-10 px-2 md:px-10 overflow-x-auto  ">
        <RecentSearch />
      </div>
      <div className="info_Trivel mt-10 px-2 md:px-10 overflow-x-auto">
        <TrivelInfo />
      </div>
      <div className="SmartScreen mt-10 px-2 md:px-10 overflow-x-auto">
        <SmartScreen />
      </div>
      <div className="SmartScreenCirt mt-0 px-2 md:px-10 ">
        <SmartScreenCity />
      </div>
      <div className="reviews mt-10 px-2 md:px-10 overflow-x-auto  md:mb-[150px] lg:mb-[150px]">
        <Reviews />
      </div>
    </div>
  );
}

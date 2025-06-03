import React from 'react';
import RecentSearch from '../_components/recentSearch/page';
import TrivelInfo from '../_components/travelInfo/page';
import SmartScreenCity from '../_components/smartScreenCity/page';
import Reviews from '../_components/reviews/page';
import SmartScreen from '../_components/smartScreen/page';
import FindStaysFlying from '../_components/findStaysFlying/page';
import Contact from '../(navbarLiks)/contact/page';
export default function Home() {
  return (
    <div className="grid grid-rows-auto gap-y-10">
      <div
        className="hero bg-cover bg-center md:h-[580px] h-[400px] relative"
        style={{ backgroundImage: 'url("/TURISM-AIG-WEB-PIC/bg-stays.png")' }}
      >
        <div className="title flex flex-col h-full md:px-5 justify-center text-center md:items-start text-white">
          <h5 className="text-[25px] sm:text-[30px] lg:text-[45px] font-bold">
            Make your travel whishlist, we’ll do the rest
          </h5>
          <p className="text-[16px] sm:text-[16px] lg:text-[20px] text-center md:text-start font-semibold">
            Special offers to suit your plan
          </p>
        </div>
        <div className="filtring absolute w-full -bottom-24 z-[500]">
          <FindStaysFlying />
        </div>
      </div>
      <div className="recent md:mt-20 mt-0 px-2 md:px-10 overflow-x-auto  ">
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
      <div className="reviews mt-10 px-2 md:px-10 overflow-x-auto">
        <Reviews />
      </div>
      <div className="contact mt-10 px-2 md:px-10 md:mb-[150px] lg:mb-[150px] ">
        <Contact />
      </div>
    </div>
  );
}

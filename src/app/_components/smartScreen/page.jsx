'use client';
import Usewether from '@/app/hook/useWether';
import Link from 'next/link';
import React from 'react';

export default function SmartScreen() {
  let { data, isLoading } = Usewether();
  return (
    <div className="flex flex-col gap-y-10">
      <div className="flex flex-col gap-y-7 ">
        <div className="title flex justify-between items-center gap-5 flex-wrap">
          <h1 className="text-[20px] md:text-[30px] font-normal text-[#16213E]">
            Smart Screen
          </h1>
          <div className="link flex items-center gap-x-2 text-[#76192D] font-medium">
            <Link href="">All Areas</Link>
            <i className="fa-solid fa-chevron-right"></i>
          </div>
        </div>
        <div className="info flex gap-x-3 overflow-x-auto">
          <div className="weather min-w-[410px] grow flex flex-col gap-y-3 bg-[#E5E7EB] w-1/3 p-3 rounded-3xl">
            <div className="title flex items-center gap-x-2">
              <i className="fa-solid fa-temperature-quarter text-[25px] text-[#76192D]"></i>
              <h1 className="text-[18px] font-normal text-[#16213E]">
                Wether Now
              </h1>
            </div>
            <div className="location flex gap-x-16">
              <div className="citydetails flex flex-col justify-center items-center gap-y-4">
                {isLoading ? (
                  'No data'
                ) : (
                  <p className="text-[#76192D] text-[36px] font-normal relative">
                    <span className="pe-1">{data?.current?.temp_c}</span>
                    <i className="fa-solid fa-o text-[12px] absolute top-2 font-bold "></i>
                  </p>
                )}
                <h1 className="cituName font-normal text-[#A1B2CD] text-[30px]">
                  Cairo
                </h1>
              </div>
              <div className="wethetInfo flex flex-col text-[#A1B2CD] gap-y-7 mt-2 justify-center items-center">
                <i className="fa-solid fa-wind  text-[36px] justify-center"></i>
                <p className="text-[25px]">{data?.current?.condition?.text}</p>
              </div>
              <div className="flex flex-col text-[#A1B2CD] gap-y-7 mt-2 justify-center items-center">
                <i className="fa-solid fa-droplet text-[36px] justify-center text-[#72ca72]"></i>
                <p className="text-[25px]">{data?.current?.humidity}</p>
              </div>
            </div>
            <div className="date flex gap-x-4 items-center text-[#A1B2CD]">
              <i className="fa-solid fa-clock text-[18px]"></i>
              <p className="text-[14px]">{data?.location?.localtime}</p>
            </div>
          </div>
          <div className="events min-w-[410px] grow w-1/3 flex flex-col gap-y-5 bg-[#E5E7EB] rounded-3xl p-3">
            <div className="title flex items-center gap-x-2">
              <i className="fa-solid fa-calendar-days text-[22px] text-[#76192D]"></i>
              <h1 className="text-[18px] font-normal text-[#16213E] mt-1">
                Today Events
              </h1>
            </div>
            <div className="event flex flex-col  gap-y-3 text-[#16213E]">
              <div className="flex gap-x-3 items-center">
                <i className="fa-solid fa-music text-[#A1B2CD] text-[18px] "></i>
                <p className="font-medium">Nile Music Festival</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <i className="fa-solid fa-building-columns text-[#569e56] text-[18px]"></i>
                <p className="font-medium">Grand museum tour</p>
              </div>
              <div className="flex gap-x-3 items-center">
                <i className="fa-solid fa-utensils text-[18px] text-[#A1B2CD]"></i>
                <p className="font-medium">Try Egyptian food</p>
              </div>
            </div>
            <div className="date flex gap-x-4 items-center text-[#A1B2CD]">
              <i className="fa-solid fa-clock text-[18px]"></i>
              <p className="text-[14px]">Now</p>
            </div>
          </div>
          <div className="touresm min-w-[410px] grow w-1/3 flex flex-col gap-y-3 bg-[#E5E7EB] rounded-3xl p-3">
            <div className="title flex items-center gap-x-2">
              <i className="fa-solid fa-person text-[25px] text-[#76192D]"></i>
              <h1 className="text-[18px] font-normal text-[#16213E]">
                Tourist density
              </h1>
            </div>
            <div className="location flex gap-x-16">
              <div className="citydetails flex flex-col justify-center items-center gap-y-4">
                <h1 className="text-[30px]">Medium</h1>
                <p className="cituName font-normal text-[#A1B2CD] text-[20px]">
                  Pyramids
                </p>
              </div>
              <div className="Population__density flex flex-col text-[#A1B2CD] gap-y-7 mt-2 justify-center items-center">
                <h2 className="text-[#65a965] text-[25px]">Low</h2>
                <p className="text-[20px] text-center">Luxor</p>
              </div>
              <div className="flex flex-col text-[#A1B2CD] gap-y-7 mt-2 justify-center items-center">
                <h1 className="text-[#76192D] text-[20px]">High</h1>
                <p className="text-[16px] text-center">Sharm El Sheikh</p>
              </div>
            </div>
            <div className="date flex gap-x-4 items-center text-[#A1B2CD]">
              <i className="fa-solid fa-clock text-[18px]"></i>
              <p className="text-[14px]">Now</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

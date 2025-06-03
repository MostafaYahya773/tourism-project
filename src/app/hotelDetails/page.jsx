'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import HotelReview from '../_components/hotelReview/page';
export default function HotelDetails() {
  const [isfiv, setIsFiv] = useState(false);
  // hotel details
  const [data, setData] = useState([
    {
      hotelName: 'GIZA HOTEL',
      Location: 'GIZA-CITY',
      stars: 5,
      aminities: 20,
      rateNum: 4,
      rateDegree: 'Very Good',
      viewers: 370,
      price: 240,
      img: 'TURISM-AIG-WEB-PIC/545.png',
      id: 2,
      places: 220,
      reviewOpt: [
        {
          img: 'TURISM-AIG-WEB-PIC/duble-stars.png',
          title: 'Near park',
          id: 1,
        },
        {
          img: 'TURISM-AIG-WEB-PIC/duble-stars.png',
          title: 'Near nightlife',
          id: 2,
        },
        {
          img: 'TURISM-AIG-WEB-PIC/duble-stars.png',
          title: 'Near theater',
          id: 3,
        },
        {
          img: 'TURISM-AIG-WEB-PIC/duble-stars.png',
          title: 'Clean Hotel',
          id: 4,
        },
      ],
    },
  ]);
  // room details
  const [room, setRoom] = useState([
    {
      img: 'TURISM-AIG-WEB-PIC/545.png',
      details: 'Superior room - 1 double bed or 2 twin beds',
      price: 240,
      id: 1,
    },
    {
      img: 'TURISM-AIG-WEB-PIC/545.png',
      details: 'Superior room - City view  - 1 double bed or 2 twin beds',
      price: 250,
      id: 2,
    },
    {
      img: 'TURISM-AIG-WEB-PIC/545.png',
      details: 'Superior room - City view - 1 double bed or 2 twin beds',
      price: 340,
      id: 3,
    },
    {
      img: 'TURISM-AIG-WEB-PIC/545.png',
      details: 'Superior room - City view - 1 double bed or 2 twin beds',
      price: 500,
      id: 4,
    },
  ]);
  // amentities details
  const [amentities, setAmentities] = useState([
    { icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png', name: 'Outdoor pool' },
    { icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png', name: 'Indoor pool' },
    {
      icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png',
      name: 'Spa and wellness center',
    },
    { icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png', name: 'Restaurant' },
    { icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png', name: 'Fitness center' },
    { icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png', name: 'Bar/Lounge' },
    { icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png', name: 'Free Wi-Fi' },
    {
      icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png',
      name: 'Tea/coffee machine',
    },
    { icon: 'TURISM-AIG-WEB-PIC/amentitiesIcon.png', name: 'Outdoor pool' },
  ]);
  // controle in length
  const [isClick, setIsClick] = useState(true);
  // handle amentities length
  const handleAmentitiesLength = () => {
    setIsClick(!isClick);
  };
  return (
    <div className=" mt-24 w-[95%] md:w-[90%] lg:w-[82%]  mx-auto md:mb-[300px]">
      <div className="flex flex-col gap-y-10">
        <div className="img__overview">
          {data?.map((hotel) => (
            <div key={hotel?.id} className="img__info flex flex-col gap-y-10 ">
              <div className="flex flex-col gap-y-3 border-b border-[#11221150]  pb-12">
                <div className="info flex flex-col gap-3">
                  <div className="title_Rating__price flex justify-between items-center flex-wrap gap-x-3">
                    <div className="title__rating flex items-center gap-x-3 flex-wrap">
                      <h1 className="text-[#00234D] text-[24px] font-semibold">
                        {hotel?.hotelName}
                      </h1>
                      <div className="raiting flex gap-x-2 flex-wrap">
                        <div className="rate_start flex gap-x-2 text-[14px]">
                          <span>
                            {[...Array(hotel.rateNum)].map((_, index) => (
                              <i
                                key={index}
                                className="fa-solid fa-star text-[#FCA311] "
                              ></i>
                            ))}
                          </span>
                          <p className="text-[#112211] font-medium">
                            {hotel.rateNum} Star Hotel
                          </p>
                        </div>
                        <div className="rate_num"></div>
                      </div>
                    </div>
                    <div className="price">
                      <h1 className="text-[#00234D] text-[32px] font-bold">
                        ${hotel?.price}/
                        <span className="text-[14px] font-bold">night</span>
                      </h1>
                    </div>
                  </div>
                  <div className="location flex gap-x-2 items-center text-[#5D0207]">
                    <i className="fa-solid fa-location-dot text-[14px]"></i>
                    <p className="text-[12px] font-medium">{hotel?.Location}</p>
                  </div>
                  <div className="rating__booking flex justify-between items-center gap-4 flex-wrap">
                    <div
                      className={
                        'rating flex items-center gap-3 flex-wrap text-[#5D0207] '
                      }
                    >
                      <div className="num border border-[#F87171] px-4  rounded-md">
                        <p className="text-[18px]">{hotel?.rateNum}</p>
                      </div>
                      <div className="degree">
                        <h1 className="font-bold">{hotel?.rateDegree}</h1>
                      </div>
                      <div className="viewers">
                        <p className="font-medium"> {hotel?.viewers} reviews</p>
                      </div>
                    </div>
                    <div className="booking flex items-center gap-x-3 flex-wrap">
                      <div className="share__favourate flex items-center gap-x-3">
                        <button className="share border border-[#5D0207] py-2  px-5 rounded-md flex justify-center items-center">
                          <i className="fa-solid fa-share-nodes text-[22px] text-[#000000]"></i>
                        </button>
                        <button
                          onClick={() => setIsFiv(!isfiv)}
                          className="favourate border border-[#5D0207] py-2  px-5 rounded-md flex justify-center items-center"
                        >
                          <i
                            className={`fa-solid fa-heart text-[22px]  ${
                              isfiv ? 'text-[#5D0207]' : 'text-[#6b636386]'
                            }`}
                          ></i>
                        </button>
                      </div>
                      <Link
                        href="/payment"
                        className="booking text-center w-[150px] py-2 bg-[#5D0207DB] rounded-md text-white text-[14px] font-semibold"
                      >
                        Book now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="img grid grid-col-1 md:grid-cols-2 gap-2 ">
                  <div className="big__img w-full h-full">
                    <img
                      className="w-full h-auto rounded-3xl"
                      src={hotel?.img}
                      alt="hotel img"
                    />
                  </div>
                  <div className="small_img grid grid-cols-2  gap-2">
                    <img
                      className="w-full rounded-xl"
                      src={hotel?.img}
                      alt="hotel img"
                    />
                    <img
                      className="w-full rounded-xl"
                      src={hotel?.img}
                      alt="hotel img"
                    />
                    <img
                      className="w-full rounded-xl"
                      src={hotel?.img}
                      alt="hotel img"
                    />
                    <img
                      className="w-full rounded-xl"
                      src={hotel?.img}
                      alt="hotel img"
                    />
                  </div>
                </div>
              </div>
              <div className="overview flex flex-col gap-5 border-b border-[#11221150]  pb-12">
                <div className="title flex flex-col gap-y-3 text-[#00234D]">
                  <h1 className="font-bold text-[20px]">Overview</h1>
                  <p className="font-medium text-[14px] md:text-[16px]">
                    We take you to the most beautiful places, make planning
                    easy, and keep adventure always within reach
                  </p>
                </div>
                <div className="review_rate flex gap-x-3 flex-nowrap items-center overflow-x-auto">
                  <div className="rate min-w-[166px] h-fit bg-[#00234DBD] text-[#76192D] p-2 rounded-xl">
                    <h1 className="rateNum text-[32px] font-bold mb-7">
                      {hotel.rateNum}
                    </h1>
                    <div className="rateText">
                      <p className="font-bold">{hotel?.rateDegree}</p>
                      <p className="text-[14px]">371 reviews</p>
                    </div>
                  </div>
                  <div className="review flex gap-x-3">
                    {hotel?.reviewOpt.map((opt) => (
                      <div
                        key={opt?.id}
                        className="options w-[166px] h-fit p-2 rounded-xl border border-[#FCA5A5] "
                      >
                        <img
                          className="w-[32px] h-[32px] mb-16"
                          src={opt?.img}
                          alt="imgOpt"
                        />
                        <p className="text-[#76192D] font-medium">
                          {opt?.title}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="room border-b border-[#11221150] pb-10  md:pb-12">
          <div className="roomDetails flex flex-col gap-7 text-[#00234D] ">
            <div className="title">
              <h1 className="font-bold text-[20px]">Available Rooms</h1>
            </div>
            {room?.map((room) => (
              <div
                key={room?.id}
                className="img_detais flex flex-col gap-y-3 pb-2 last-of-type:border-none  border-b border-[#11221150]   "
              >
                <div className=" flex flex-nowrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <img
                      className="w-[48px] h-[48px]"
                      src={room?.img}
                      alt="room img"
                    />
                    <h1 className="font-medium text-[14px] md:text-[16px]">
                      {room?.details}
                    </h1>
                  </div>
                  <div className="price__book">
                    <div className="font-semibold flex items-center flex-col lg:flex-row lg:gap-x-4 md:gap-y-2 flex-nowrap">
                      <h1 className="text-[16px] md:text-[24px]">
                        ${room?.price}
                        <span className="text-[12px]">/night</span>
                      </h1>
                      <Link
                        className="hidden sm:block px-7 py-2 text-white bg-[#76192D] text-[14px] rounded-md font-semibold "
                        href="/hotelDetails"
                      >
                        Book now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mobile_link w-full flex sm:hidden">
                  <Link
                    className="w-full py-2 text-center text-white bg-[#76192D] text-[14px] rounded-md font-semibold "
                    href="/hotelDetails"
                  >
                    Book now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="location flex flex-col gap-y-4 text-[#00234D]  border-b border-[#11221150] pb-10  md:pb-12">
          <div className="title flex items-center justify-between gap-5 flex-wrap">
            <h1 className="text-[20px] font-bold">Location/Map</h1>
            <Link
              className="bg-[#76192D] text-white px-5 py-2 rounded-md"
              href="/hotelDetails"
            >
              View on google maps
            </Link>
          </div>
          <div className="map">
            <img src="TURISM-AIG-WEB-PIC/map.png" alt="" />
          </div>
          <div className="location flex items-center gap-x-2 text-[14px] font-medium">
            <i className="fa-solid fa-location-dot "></i>
            <p>GIZA-CITY</p>
          </div>
        </div>

        <div className="amentities flex flex-col gap-5 text-[#00234D] border-b border-[#11221150] pb-10  md:pb-12">
          <div className="title">
            <h1 className="font-bold text-[20px]">Available Rooms</h1>
          </div>
          <div className="details grid grid-cols-1 sm:grid-cols-2 gap-5 w-full md:w-[80%]">
            {(isClick ? amentities.slice(0, 5) : amentities).map(
              (ele, index) => (
                <div key={index} className="flex gap-x-2 items-center">
                  <img className="w-[30px] h-[30px]" src={ele.icon} alt="" />
                  <p className="font-medium">{ele.name}</p>
                </div>
              )
            )}
            <button
              onClick={handleAmentitiesLength}
              className="font-medium text-[#FF8682] text-start"
            >
              {isClick ? 'show more' : 'show less'}
            </button>
          </div>
        </div>

        <div className="review">
          <HotelReview />
        </div>
      </div>
    </div>
  );
}

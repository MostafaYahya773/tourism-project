'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

export default function FavouratePlaces() {
  let [hotel, setHotel] = useState([
    {
      hotelName: 'GIZA HOTEL',
      Location: 'GIZA-CITY',
      stars: 5,
      aminities: 20,
      rateNum: 4.2,
      rateDegree: 'Very Good',
      viewers: 370,
      price: 240,
      img: 'TURISM-AIG-WEB-PIC/545.png',
      id: 1,
      places: 220,
    },
    {
      hotelName: 'GIZA HOTEL',
      Location: 'GIZA-CITY',
      stars: 5,
      aminities: 20,
      rateNum: 4.2,
      rateDegree: 'Very Good',
      viewers: 370,
      price: 240,
      img: 'TURISM-AIG-WEB-PIC/545.png',
      id: 2,
      places: 220,
    },
    {
      hotelName: 'GIZA HOTEL',
      Location: 'GIZA-CITY',
      stars: 5,
      aminities: 20,
      rateNum: 4.2,
      rateDegree: 'Very Good',
      viewers: 370,
      price: 240,
      img: 'TURISM-AIG-WEB-PIC/545.png',
      id: 3,
      places: 220,
    },
  ]);
  return (
    <div className="flex flex-col gap-y-10 ">
      {hotel?.map((place) => (
        <div
          key={place?.id}
          className="flex flex-col sm:flex-row gap-3  shadow-xl"
        >
          <div className={'img md:min-w-[300px]'}>
            <img
              className={'w-full h-full rounded-e-2xl'}
              src={place?.img}
              alt=""
            />
          </div>
          <div className="details flex flex-col p-0 gap-y-3 py-4 px-2 md:py-4 md:px-2  w-full">
            <div className="info flex flex-col gap-y-3 text-[#00234D]">
              <div className="name__price flex justify-between  ">
                <div className="name flex flex-col gap-y-5 ">
                  <h1 className="text-[20px] font-bold">{place?.hotelName}</h1>
                  <div className="location flex gap-x-2 items-center">
                    <i className="fa-solid fa-location-dot text-[14px]"></i>
                    <p className="text-[12px] font-medium">{place?.Location}</p>
                  </div>
                </div>
                <div className={`price flex flex-col gap-y-1`}>
                  <p className="text-[12px] font-medium">starting from</p>
                  <div className="prise">
                    <h1 className="text-[#FF8682] font-bold text-[24px]">
                      ${place?.price}/<span className="text-[14px]">night</span>
                    </h1>
                  </div>
                  <p className="text text-end text-[12px] font-medium">
                    excl.tax
                  </p>
                </div>
              </div>
              <div className="rate flex flex-col gap-3">
                <div className="rate_stars flex gap-3 flex-wrap ">
                  <div className="stars flex gap-x-1 text-[#FF8682]">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                  </div>
                  <div className="stars_text me-4">
                    <p className="font-medium">{place.rateNum} Star Hote</p>
                  </div>
                  <div className="aminities font-bold flex items-center gap-x-2">
                    <i className="fa-solid fa-mug-saucer"></i>
                    <p>{place?.aminities}+</p>
                    <div className="flex gap-x-1 font-medium ">
                      <p>Aminities</p>
                    </div>
                  </div>
                </div>
                <div
                  className={
                    'rate_review  flex items-center gap-3 flex-wrap text-[#00234D] border-b border-[#00234d49] pb-5 '
                  }
                >
                  <div className="num border border-[#F87171] px-3 py-2 rounded-xl">
                    <p className="text-[18px]">{place?.rateNum}</p>
                  </div>
                  <div className="degree">
                    <h1 className="font-bold">{place?.rateDegree}</h1>
                  </div>
                  <div className="viewers">
                    <p className="font-medium"> {place?.viewers} reviews</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={'view flex gap-x-5 pt-4'}>
              <div className="fiv border border-[#F87171] px-3 py-2 rounded-md">
                <i className="fa-solid fa-heart"></i>
              </div>
              <Link
                href="/hotelDetails"
                className="view bg-[#FCA311C2] w-full flex justify-center items-center font-semibold text-[14px]"
              >
                View Place
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

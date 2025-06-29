'use client';
import React from 'react';
import UseHotel from '@/app/hook/useHotel';
import Link from 'next/link';

export default function Motels() {
  const { data, isLoading } = UseHotel('hotels', 'Motel');
  return (
    <div className="flex flex-col gap-y-10">
      {isLoading ? (
        <div className="flex justify-center items-center">loading</div>
      ) : (
        data?.results?.map((place) => (
          <div
            key={place?._id}
            className="flex flex-col sm:flex-row gap-3  shadow-xl"
          >
            <div className={'img md:min-w-[300px]'}>
              <img
                className={'w-[900px] h-[300px] rounded-e-2xl'}
                src={place?.images[0]}
                alt="img"
              />
            </div>
            <div className="details flex flex-col p-0 gap-y-3 py-4 px-2 md:py-4 md:px-2  w-full">
              <div className="info flex flex-col gap-y-3 text-[#00234D]">
                <div className="name__price flex justify-between  ">
                  <div className="name flex flex-col gap-y-5 ">
                    <h1 className="text-[20px] font-bold">{place?.name}</h1>
                    <div className="location flex gap-x-2 items-center">
                      <i className="fa-solid fa-location-dot text-[14px]"></i>
                      <p className="text-[12px] font-medium">
                        {place?.location?.city}
                      </p>
                    </div>
                  </div>
                  <div className={`price flex flex-col gap-y-1`}>
                    <p className="text-[12px] font-medium">starting from</p>
                    <div className="prise">
                      <h1 className="text-[#FF8682] font-bold text-[24px]">
                        ${place?.rooms[0]?.price}/
                        <span className="text-[14px]">night</span>
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
                      <span>
                        {[...Array(Math.round(Number(place?.rating)))].map(
                          (_, index) => (
                            <i
                              key={index}
                              className="fa-solid fa-star text-[#FCA311] "
                            ></i>
                          )
                        )}
                      </span>
                    </div>
                    <div className="stars_text me-4">
                      <p className="font-medium">{place?.rating} Star Hote</p>
                    </div>
                    <div className="aminities font-bold flex items-center gap-x-2">
                      <i className="fa-solid fa-mug-saucer"></i>
                      <p></p>
                      <div className="flex gap-x-1 font-medium ">
                        <p>{place?.amenities?.length} Aminities</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={
                      'rate_review  flex items-center gap-3 flex-wrap text-[#00234D] border-b border-[#00234d49] pb-5 '
                    }
                  >
                    <div className="degree">
                      <h1 className="font-bold">{place?.rating}</h1>
                    </div>
                    <div className="viewers">
                      <p className="font-medium">
                        {place?.reviewsCount} reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={'view flex gap-x-5 pt-4'}>
                <div className="fiv border border-[#F87171] px-3 py-2 rounded-md">
                  <i className="fa-solid fa-heart"></i>
                </div>
                <Link
                  href={`/hotelDetails/${place?._id}`}
                  className="view bg-[#FCA311C2] w-full flex justify-center items-center font-semibold text-[14px]"
                >
                  View Place
                </Link>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

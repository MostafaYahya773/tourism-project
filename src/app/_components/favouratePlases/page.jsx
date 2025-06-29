'use client';
import { contextProvider } from '@/app/context/contextProvider';
import UseDelete from '@/app/hook/favourate/useDelete';
import UseGetFavourate from '@/app/hook/favourate/useGetFavourate';
import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

export default function FavouratePlaces() {
  // use context
  let { setFavourateCount } = useContext(contextProvider);
  // get data from api
  let { data, isLoading } = UseGetFavourate();
  // send data to api to delete favourate places
  let { mutate } = UseDelete();
  // handle delete
  const handleDelete = (hotelId) =>
    mutate(hotelId, {
      onSuccess: (res) => {
        toast.success(res?.data?.message, {
          position: 'top-center',
          className: 'mt-16 text-[14px]',
        });
      },
      onError: (err) => {
        toast.error(err?.response?.data?.error, {
          position: 'top-center',
          className: 'mt-16 text-[14px]',
        });
      },
    });
  // check if data receved or not
  useEffect(() => {
    if (!data?.favorites) return;
    // get number of places by context
    setFavourateCount(data?.favorites?.length);
  }, [data]);

  return (
    <div className="flex flex-col gap-y-10 ">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <span className="loaderChange"></span>
        </div>
      ) : !data?.favorites?.length ? (
        <div className="flex justify-center items-center text-[#00234D] py-10 text-lg font-semibold">
          No Favourate Places
        </div>
      ) : (
        data?.favorites?.map((place) => (
          <div
            key={place?.hotelId?._id}
            className="flex flex-col sm:flex-row gap-3  shadow-xl"
          >
            <div
              className={
                'img lg:max-w-[500px] lg:max-h-[300px] sm:max-w-[300px] sm:max-h-[300px]'
              }
            >
              <img
                className={'w-full h-full rounded-e-2xl'}
                src={place?.hotelId?.images?.[1]}
                alt="hotel img"
              />
            </div>
            <div className="details flex flex-col p-0 gap-y-3 py-4 px-2 md:py-4 md:px-2  w-full">
              <div className="info flex flex-col gap-y-3 text-[#00234D]">
                <div className="name__price flex justify-between  ">
                  <div className="name flex flex-col gap-y-5 ">
                    <h1 className="text-[20px] font-bold">
                      {place?.hotelId?.name}
                    </h1>
                    <div className="location flex gap-x-2 items-center">
                      <i className="fa-solid fa-location-dot text-[14px]"></i>
                      <p className="text-[12px] font-medium">
                        {place?.hotelId?.location?.city}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rate flex flex-col gap-3">
                  <div className="rate_stars flex gap-3 flex-wrap ">
                    <span>
                      {[
                        ...Array(
                          Math.max(
                            0,
                            Math.round(Number(place?.hotelId?.rating) || 0)
                          )
                        ),
                      ].map((_, index) => (
                        <i
                          key={index}
                          className="fa-solid fa-star text-[#FCA311]"
                        />
                      ))}
                    </span>
                    <div className="stars_text me-4">
                      <p className="font-medium">
                        {place?.hotelId?.rating} Star Hote
                      </p>
                    </div>
                    <div className="aminities font-bold flex items-center gap-x-2">
                      <i className="fa-solid fa-mug-saucer"></i>
                      <p>{place?.hotelId?.amenities?.length}+</p>
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
                      <p className="text-[18px]">{place?.hotelId?.rating}</p>
                    </div>

                    <div className="viewers">
                      <p className="font-medium">
                        {place?.hotelId?.reviewsCount} reviews
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="view flex gap-5 pt-4  flex-wrap md:flex-nowrap">
                <button
                  title="delete from favourate"
                  onClick={() => handleDelete(place?._id)}
                  className="fiv md:w-1/2 w-full border border-[#F87171] font-semibold px-3 py-2 rounded-md"
                >
                  delete
                </button>
                <Link
                  href={`/hotelDetails/${place?.hotelId?._id}`}
                  className="view md:w-1/2 w-full bg-[#FCA311C2] py-2 flex justify-center items-center font-semibold text-[14px]"
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

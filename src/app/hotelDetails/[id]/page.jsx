'use client';
// import MapView from '';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import HotelReview from '../../_components/hotelReview/page';
import { useParams } from 'next/navigation';
import UseHotel from '@/app/hook/useHotel';
import MapView from '@/app/_components/mapView/page';
import UseFavourate from '@/app/hook/favourate/useFavourate';
import toast from 'react-hot-toast';

export default function HotelDetails() {
  const [isfiv, setIsFiv] = useState(false);
  // controle in length
  const [isClick, setIsClick] = useState(true);
  //get Hotel Id
  let { id } = useParams();
  // get data by hotel id
  let { data } = UseHotel('hotels', '', id);
  // send data to favourate api
  const { mutate } = UseFavourate();
  // handle data
  const handleFavourate = (hoteId) => {
    mutate(hoteId, {
      onSuccess: (res) => {
        toast.success(res?.data?.message, {
          position: 'top-center',
          className: 'mt-16 text-[14px]',
        });
      },
      onError: (err) => {
        setIsSelected(false);
        toast.error(err?.response?.data?.error || 'Something went wrong', {
          position: 'top-center',
          className: 'mt-16 text-[14px]',
        });
      },
    });
  };
  useEffect(() => {
    if (!data?.hotel) return;
    console.log(data);
  }, [data?.hotel]);
  return (
    <div className=" mt-24 w-[95%] md:w-[90%] lg:w-[82%]  mx-auto md:mb-[300px]">
      <div className="flex flex-col gap-y-10">
        <div className="img__overview">
          <div
            key={data?.hotel?.id}
            className="img__info flex flex-col gap-y-10  "
          >
            <div className="flex flex-col gap-y-3 border-b border-[#11221150]  pb-12">
              <div className="info flex flex-col gap-3">
                <div className="title_Rating__price flex justify-between items-center flex-wrap gap-x-3">
                  <div className="title__rating flex items-center gap-x-3 flex-wrap">
                    <h1 className="text-[#00234D] text-[24px] font-semibold">
                      {data?.hotel?.name}
                    </h1>
                    <div className="raiting flex gap-x-2 flex-wrap">
                      <div className="rate_start flex gap-x-2 text-[14px]">
                        <span>
                          {[
                            ...Array(
                              Math.floor(Number(data?.hotel?.rating) || 0)
                            ),
                          ].map((_, index) => (
                            <i
                              key={index}
                              className="fa-solid fa-star text-[#FCA311]"
                            ></i>
                          ))}
                        </span>
                        <p className="text-[#112211] font-medium">
                          {data?.hotel?.rating} Star Hotel
                        </p>
                      </div>
                      <div className="rate_num"></div>
                    </div>
                  </div>
                  <div className="price">
                    <h1 className="text-[#00234D] text-[32px] font-bold">
                      ${data?.hotel?.rooms[0]?.price} /
                      <span className="text-[14px] font-bold">night</span>
                    </h1>
                  </div>
                </div>
                <div className="location flex gap-x-2 items-center text-[#5D0207]">
                  <i className="fa-solid fa-location-dot text-[14px]"></i>
                  <p className="text-[12px] font-medium">
                    {data?.hotel?.location?.city}
                  </p>
                </div>
                <div className="rating__booking flex justify-between items-center gap-4 flex-wrap">
                  <div
                    className={
                      'rating flex items-center gap-3 flex-wrap text-[#5D0207] '
                    }
                  >
                    <div className="degree">
                      <h1 className="font-bold">{data?.hotel?.rating}</h1>
                    </div>
                    <div className="viewers">
                      <p className="font-medium">
                        {data?.hotel?.reviewsCount} reviews
                      </p>
                    </div>
                  </div>
                  <div className="booking flex items-center gap-x-3 flex-wrap">
                    <div className="share__favourate flex items-center gap-x-3">
                      <button className="share border border-[#5D0207] py-2  px-5 rounded-md flex justify-center items-center">
                        <i className="fa-solid fa-share-nodes text-[22px] text-[#000000]"></i>
                      </button>
                      <button
                        onClick={() => {
                          handleFavourate(data?.hotel?.id), setIsFiv(!isfiv);
                        }}
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
              <div className="img grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="big__img w-full h-full ">
                  <img
                    className="w-full h-auto rounded-3xl"
                    src={data?.hotel?.images[0]}
                    alt="hotel img"
                  />
                </div>

                <div className="small_img grid grid-cols-2  gap-2">
                  {data?.hotel?.images?.slice(1).map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      className="w-full h-full rounded-xl"
                      alt={`hotel small img`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="overview flex flex-col gap-5 border-b border-[#11221150]  pb-12">
              <div className="title flex flex-col gap-y-3 text-[#00234D]">
                <h1 className="font-bold text-[20px]">Overview</h1>
                <p className="font-medium text-[14px] md:text-[16px]">
                  We take you to the most beautiful places, make planning easy,
                  and keep adventure always within reach
                </p>
              </div>
              <div className="review_rate flex gap-x-3 flex-nowrap items-center overflow-x-auto">
                <div className="rate min-w-[166px] h-fit bg-[#00234DBD] text-[#76192D] p-2 rounded-xl">
                  <h1 className="rateNum text-[32px] font-bold mb-7">
                    {data?.hotel?.rating}
                  </h1>
                  <div className="rateText">
                    <p className="font-bold">{data?.hotel?.rating}</p>
                    <p className="text-[14px]">371 reviews</p>
                  </div>
                </div>
                <div className="review flex gap-x-3">
                  {data?.hotel?.freebies.map((opt, ind) => (
                    <div
                      key={ind}
                      className="options w-[166px] p-2 rounded-xl border border-[#FCA5A5]"
                    >
                      <p className="text-[#76192D] font-medium h-[120px]">
                        {opt}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="room border-b border-[#11221150] pb-10  md:pb-12">
          <div className="roomDetails flex flex-col gap-7 text-[#00234D] ">
            <div className="title">
              <h1 className="font-bold text-[20px]">Available Rooms</h1>
            </div>
            {data?.hotel?.rooms?.map((room, ind) => (
              <div
                key={ind}
                className="img_detais flex flex-col gap-y-3 pb-2 last-of-type:border-none  border-b border-[#11221150]   "
              >
                <div className=" flex flex-nowrap gap-4 items-center justify-between">
                  <div className="flex items-center gap-x-3">
                    <i className="fa-solid fa-bed"></i>
                    <h1 className="font-medium text-[14px] md:text-[16px]">
                      {room?.type} - {room?.bedConfiguration}
                    </h1>
                  </div>
                  <div className="price__book">
                    <div className="font-semibold flex items-center flex-col lg:flex-row lg:gap-x-4 md:gap-y-2 flex-nowrap">
                      <h1 className="text-[16px] md:text-[24px]">
                        ${room?.price}
                        <span className="text-[12px]"> / night</span>
                      </h1>
                      <Link
                        className="hidden sm:block px-7 py-2 text-white bg-[#76192D] text-[14px] rounded-md font-semibold "
                        href=""
                      >
                        Book now
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="mobile_link w-full flex sm:hidden">
                  <Link
                    className="w-full py-2 text-center text-white bg-[#76192D] text-[14px] rounded-md font-semibold "
                    href=""
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
              href=""
            >
              View on google maps
            </Link>
          </div>
          <MapView
            lat={data?.hotel?.location?.coordinates?.latitude}
            lng={data?.hotel?.location?.coordinates?.longitude}
          />

          <div className="location flex items-center gap-x-2 text-[14px] font-medium">
            <i className="fa-solid fa-location-dot "></i>
            <p>{data?.hotel?.location?.city}</p>
          </div>
        </div>

        <div className="amentities flex flex-col gap-5 text-[#00234D] border-b border-[#11221150] pb-10  md:pb-12">
          <div className="title">
            <h1 className="font-bold text-[20px]">Amenities</h1>
          </div>
          <div className="details grid grid-cols-1 sm:grid-cols-2 gap-5 w-full md:w-[80%]">
            {data?.hotel?.amenities?.map((ele, index) => (
              <div key={index} className="flex gap-x-2 items-center">
                <p className="font-medium">{ele}</p>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="review">
          <HotelReview />
        </div> */}
      </div>
    </div>
  );
}

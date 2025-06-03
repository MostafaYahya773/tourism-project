'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function HotelReview() {
  // comments details
  const [comments, setComments] = useState([
    {
      img: 'TURISM-AIG-WEB-PIC/5.png',
      rateNum: '5.0',
      ratesub: 'Amazing',
      commentName: 'Mostafa yahya',
      commentSub:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

    {
      img: 'TURISM-AIG-WEB-PIC/5.png',
      rateNum: '5.0',
      ratesub: 'Amazing',
      commentName: 'Mostafa yahya',
      commentSub:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },

    {
      img: 'TURISM-AIG-WEB-PIC/5.png',
      rateNum: '5.0',
      ratesub: 'Amazing',
      commentName: 'Mostafa yahya',
      commentSub:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      img: 'TURISM-AIG-WEB-PIC/5.png',
      rateNum: '5.0',
      ratesub: 'Amazing',
      commentName: 'Mostafa yahya',
      commentSub:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
  ]);
  //controle for comments swip
  let [swip, setSwip] = useState(1);
  return (
    <div className="flex flex-col gap-y-5">
      <div className="title flex justify-between items-center gap-5 flex-wrap">
        <h1 className="text-[#00234D] text-[20px] font-bold">Reviews</h1>
        <button className="text-white px-5 py-2 bg-[#76192D] rounded text-[12px] md:text-[16px]">
          Give your review
        </button>
      </div>
      <div className="comments">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="comment flex flex-col md:flex-row gap-3 items-start md:items-center pb-5 border-b border-[#00234d46] last-of-type:border-none"
          >
            <img
              className="w-[60px] h-[60px] rounded-full"
              src={comment?.img}
              alt=""
            />
            <div className="commeny_details flex flex-col gap-y-2 text-[#00234D">
              <div className="rate__name flex gap-x-2 items-center">
                <div className="rate flex gap-x-2 items-center flex-wrap">
                  <span className="font-semibold text-[14px]">
                    {comment?.rateNum} {comment?.ratesub}
                  </span>
                  <span>|</span>
                  <h1 className="font-normal">{comment?.commentName}</h1>
                </div>
              </div>
              <p className="text-[12px] md:text-[15px]">
                {comment?.commentSub}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="swip flex gap-x-5 items-center justify-center">
        <i
          onClick={(e) => {
            if (swip === 1) {
              e.stopPropagation();
              return;
            }
            setSwip(swip--);
          }}
          className="fa-solid fa-chevron-left cursor-pointer px-2"
        ></i>
        <p>{swip} of 40</p>
        <i
          onClick={() => setSwip(swip++)}
          className="fa-solid fa-chevron-right cursor-pointer px-2"
        ></i>
      </div>
    </div>
  );
}

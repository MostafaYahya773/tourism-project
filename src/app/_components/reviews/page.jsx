'use client';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Reviews() {
  const [isSeeMore, setIsSeMore] = useState(false);
  const [reviewDetails, setReviewDetails] = useState([
    {
      comment: '“A real sense of community, nurtured”',
      subcomment:
        'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for',
      name: 'mostafa yahya',
      locaation: 'Minya - Egy',
      account: 'Google',
      img: 'TURISM-AIG-WEB-PIC/aswan-egy.jpg',
      id: 1,
      rate: 5,
      account: 'TURISM-AIG-WEB-PIC/google.png',
    },
    {
      comment: '“A real sense of community, nurtured”',
      subcomment:
        'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for',
      name: 'mostafa yahya',
      locaation: 'Minya - Egy',
      account: 'Google',
      img: 'TURISM-AIG-WEB-PIC/aswan-egy.jpg',
      id: 2,
      rate: 4,
      account: 'TURISM-AIG-WEB-PIC/google.png',
    },
    {
      comment: '“A real sense of community, nurtured”',
      subcomment:
        'Really appreciate the help and support from the staff during these tough times. Shoutout to Katie for',
      name: 'mostafa yahya',
      locaation: 'Minya - Egy',
      account: 'Google',
      img: 'TURISM-AIG-WEB-PIC/aswan-egy.jpg',
      id: 3,
      rate: 5,
      account: 'TURISM-AIG-WEB-PIC/google.png',
    },
  ]);
  return (
    <div className="flex flex-col gap-y-5">
      <div className="title flex justify-between items-center gap-5 flex-wrap">
        <div className="text-[#00234D]">
          <h1 className="text-[20px] md:text-[32px] font-semibold ">Reviews</h1>
          <p className="font-normal">
            What people says about Golobe facilities
          </p>
        </div>
        <Link
          className="w-[100px] h-[40px] border-2 border-[#76192D] flex justify-center items-center rounded font-medium"
          href=""
        >
          See All
        </Link>
      </div>
      <div className="info flex gap-x-10 overflow-x-auto lg:mx-5 p-3 lg:p-5">
        {reviewDetails?.map((review) => (
          <div
            key={review?.id}
            className="comment p-3 min-w-[400px] h-fit bg-[#1122111A] rounded-2xl reviewShadow flex flex-col gap-y-7"
          >
            <div className="comments flex flex-col gap-y-3">
              <h1 className="title  text-[24px] font-bold text-[#00234D]">
                {review.comment}
              </h1>
              <div className="subcomment">
                <p className="text-[#00234D] font-normal text-[14px] opacity-70">
                  {isSeeMore
                    ? review?.subcomment
                    : review?.subcomment.length > 100 &&
                      `
              ${review?.subcomment.slice(0, 100)}
              . . .`}
                </p>
                <button
                  onClick={() => setIsSeMore(!isSeeMore)}
                  className="text-end w-full mt-1"
                >
                  {isSeeMore ? 'View Less' : 'View More'}
                </button>
              </div>
            </div>
            <div className="details  flex flex-col gap-y-2">
              <div className="stars text-[#FFC107]">
                {[...Array(review.rate)].map((_, index) => (
                  <i key={index} className="fa-solid fa-star"></i>
                ))}
              </div>
              <div className="accountDetailS text-[#00234D] flex flex-col gap-y-3">
                <div className="city">
                  <h1 className="text-[14px] font-bold">{review?.name}</h1>
                  <p className="opacity-50 text-[12px] font-medium">
                    {review?.locaation}
                  </p>
                </div>
                <div className="account flex gap-3 items-center">
                  <img
                    className="w-[24px] h-[24px]"
                    src={review?.account}
                    alt="Google img"
                  />
                  <p className="text-[12px] font-bold opacity-50">Google</p>
                </div>
              </div>
            </div>
            <div className="img">
              <img
                className="h-[200px] w-full rounded-xl"
                src={review.img}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

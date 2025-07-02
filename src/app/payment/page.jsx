'use client';
import React, { useEffect, useState } from 'react';
import Login from '../(auth)/login/page';
import PaymentOption from '../_components/paymentOption/page';
import AddNewCard from '../_components/addNewCard/page';

export default function Payment() {
  //payment info
  const [paymentInfo, setPaymentInfo] = useState({
    title: 'Superior room - 1 double bed or 2 twin beds',
    hotelname: 'GIZA HOTEL',
    startedDate: 'Thursday, MAY 18',
    endDate: 'Friday, MAY 20',
    price: 240,
    hotelImg: 'TURISM-AIG-WEB-PIC/545.png',
    hotelRateNum: 4.6,
    hotelRateText: 'very good',
    reviewNum: 45,
    Discount: 0,
    taxes: 20,
    services: 5,
  });

  //payment type
  const [paymentType, setPaymentType] = useState([
    {
      type: 'Pay in full',
      title: 'Pay the total and you are all set',
      name: 'payment',
      id: 0,
    },
    {
      type: 'Pay part now, part later',
      title:
        'Pay $207.43 now, and the rest ($207.43) will be automatically charged to the same payment method on Nov 14, 2022. No extra fees.',
      name: 'payment',
      id: 1,
    },
  ]);
  // checkd option
  let [selectedId, setSelectedId] = useState(0);
  // token is exist or not
  const [token, setToken] = useState(null);
  useEffect(() => {
    let tokenValue = localStorage.getItem('token');
    if (!tokenValue) {
      setToken(false);
    } else {
      setToken(tokenValue);
    }
    console.log('selectedId changed to:', selectedId);
  }, [selectedId]);

  return (
    <div className="mt-24 relative grid grid-cols-1 md:grid-cols-[70%_30%] gap-5 md:gap-x-3  text-[#00234D] md:w-[95%] w-[98%] mb-[0px] md:mb-[200px]  mx-auto">
      <div className="payment flex flex-col gap-y-10  ">
        <div className="flex flex-col gap-7 payment-shadow md:p-5 p-2 rounded-md">
          <div className="title flex justify-between items-center gap-x-5 gap-y-2 flex-wrap md:flex-nowrap">
            <h1 className="title text-[14px] md:text-[20px] lg:text-[30px] font-bold">
              {paymentInfo.title}
            </h1>
            <p className="text-[#FCA311] text-[14px] md:text-[25px] font-bold">
              ${paymentInfo.price}/
              <span className="text-[10px] md:text-[14px]">night</span>
            </p>
          </div>
          <div className="hotelname flex gap-x-7 gap-y-2 flex-col md:flex-row border border-[#FCA311] md:p-5 p-2 rounded-xl">
            <img
              src={paymentInfo.hotelImg}
              alt="hotelImg"
              className=" md:w-[70px] md:h-[70px] w-auto h-auto rounded-md"
            />
            <div className="hotelInfo flex flex-col gap-2">
              <h1 className="text-[14px] md:text-[20px] lg:text-[25px] font-bold">
                {paymentInfo.hotelname}
              </h1>
              <div className="location flex gap-2 items-center">
                <i className="fa-solid fa-location-dot text-[14px]"></i>
                <p className="text-[10px] md:text-[14px]">
                  {paymentInfo?.hotelname}
                </p>
              </div>
            </div>
          </div>
          <div className="dateInfo flex flex-col gap-y-3 md:flex-row justify-between items-start md:items-center  font-semibold">
            <div className="text-[15px] md:text-[20px] lg:text-[25px] flex flex-row  w-full md:w-fit  justify-between flex-wrap md:flex-none gap-3 items-center   md:flex-col md:gap-1 ">
              <h1>{paymentInfo?.startedDate}</h1>
              <p className="text-[10px] md:text-[15px] font-normal opacity-60">
                Check-In
              </p>
            </div>
            <div className="shape flex items-center gap-10 text-[25px] rotate-90 md:rotate-0 md:text-[30px] lg:text-[40px]">
              <i className="fa-solid fa-arrow-right-arrow-left"></i>
            </div>
            <div className="text-[15px] md:text-[20px] lg:text-[25px] flex flex-row  w-full md:w-fit justify-between flex-wrap md:flex-none gap-3 items-center  md:flex-col md:gap-1">
              <h1>{paymentInfo?.endDate}</h1>
              <p className="text-[10px] md:text-[15px] font-normal opacity-60">
                Check-Out
              </p>
            </div>
          </div>
        </div>
        <div className="paymentOption  z-10 flex flex-col  gap-y-3 payment-shadow p-3 rounded-md">
          {paymentType?.map((item) => (
            <label
              key={item?.id}
              htmlFor={item.id}
              className={`cursor-pointer ${
                item?.id === selectedId ? 'bg-[#FCA311]' : ''
              } fullpay flex justify-between items-center md:p-5 p-2 rounded-2xl gap-5`}
            >
              <div className="w-full flex flex-col gap-y-2">
                <h1 className="font-bold">{item.type}</h1>
                <p className="font-normal text-[10px] md:text-[14px]">
                  {item?.title}
                </p>
              </div>

              <input
                id={item.id}
                type="radio"
                name={item?.name}
                checked={selectedId === item.id}
                onChange={() => setSelectedId(item.id)}
                className="cursor-pointer"
              />
            </label>
          ))}
        </div>
      </div>
      <div className="submitpayment w-full h-fit payment-shadow p-2 lg:p-3 md:sticky top-24  rounded-md flex flex-col gap-y-3">
        <div className="hotel_details flex flex-col gap-y-3">
          <div className="hotel flex items-start  flex-row  md:flex-col lg:flex-row gap-3 border-b border-[#00234d50] pb-4">
            <img
              className="w-[140px] md:w-full lg:w-[140px] "
              src={paymentInfo?.hotelImg}
              alt="horel img"
            />
            <div className="info flex flex-col gap-y-2 w-full ">
              <h1 className="font-medium text-[14px] md:text-[16px]">
                {paymentInfo?.hotelname}
              </h1>
              <h1 className="text-[12px] md:text-[14px]  font-semibold">
                {paymentInfo?.title}
              </h1>
              <div className="raiting flex gap-2 flex-wrap text-[12px]">
                <p className="px-4 py-0 border border-[#FCA311] font-medium ">
                  {Math.round(paymentInfo?.hotelRateNum)}
                </p>
                <p className="font-bold">{paymentInfo?.hotelRateText}</p>
                <p>
                  {paymentInfo?.reviewNum}{' '}
                  <span className="font-medium">reviews</span>
                </p>
              </div>
            </div>
          </div>
          <p className="font-medium text-[12px] md:text-[14px]  border-b border-[#00234d50] pb-4 px-1">
            Your booking is protected by <span className="font-bold">AIG</span>
          </p>
        </div>
        <div className="PriceDetails flex flex-col gap-y-4 pb-4 border-b border-[#00234d50]">
          <h1 className="title font-bold">Price Details</h1>
          <div className="flex flex-col gap-y-4 ">
            <div className="price flex justify-between items-center text-[14px] md:text-[14px]">
              <p className="font-medium">Base Fare </p>
              <p className="font-semibold">${paymentInfo?.price}</p>
            </div>
            <div className="price flex justify-between items-center text-[14px] md:text-[14px]">
              <p className="font-medium">Discount </p>
              <p className="font-semibold">${paymentInfo?.Discount}</p>
            </div>
            <div className="price flex justify-between items-center text-[14px] md:text-[14px]">
              <p className="font-medium">Taxes </p>
              <p className="font-semibold">${paymentInfo?.taxes}</p>
            </div>
            <div className="price flex justify-between items-center text-[14px] md:text-[14px]">
              <p className="font-medium">Service Fee </p>
              <p className="font-semibold">${paymentInfo?.services}</p>
            </div>
          </div>
        </div>
        <div className="total flex justify-between items-center text-[14px] md:text-[14px] px-1">
          <p className="font-medium">Total </p>
          <p className="total font-semibold">
            $
            {paymentInfo?.price +
              paymentInfo?.Discount +
              paymentInfo?.taxes +
              paymentInfo?.services}
          </p>
        </div>
      </div>
      <div className="paymentOPtion">
        {token ? <PaymentOption /> : <Login />}
      </div>

      <div className="add_card absolute flex justify-center items-center w-full h-screen z-1">
        <AddNewCard />
      </div>
    </div>
  );
}

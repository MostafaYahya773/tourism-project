'use client';
import React, { useState } from 'react';
import FavouratePlaces from '../_components/favouratePlases/page';
import FavourateTransport from '../_components/FavourateTransport/page';
import AccountSetting from '../_components/account/page';
import PaymentMethoud from '../_components/paymentMethoud/page';

export default function AccountLayout() {
  // change page
  let [changePage, setChangePage] = useState('Account');
  // favourate department
  const [accountinfo, setAccountInfo] = useState([
    { name: 'Account', id: 0 },
    { name: 'Payment Methouds', id: 1 },
  ]);

  // account img and gmail
  const [accountimg, setAccountImg] = useState({
    img: '/TURISM-AIG-WEB-PIC/mainpage1.jpg',
    gmail: 'mostafa@gmail.com',
    name: 'mostafa yahya',
  });

  // put id of department
  let [departid, setDepartId] = useState(0);
  return (
    <div className="flex flex-col md:gap-y-48 gap-y-0   mx-auto relative mb-36">
      <div className=" h-[580px] md:h-[480px] ">
        <div
          className="top bg-cover bg-center  h-[350px] md:h-[480px]   flex justify-center items-end relative "
          style={{
            backgroundImage: 'url("/TURISM-AIG-WEB-PIC/mainpage1.jpg")',
          }}
        >
          <div className="img_gmail flex flex-col gap-3 absolute -bottom-36">
            <img
              className="md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-full mx-auto"
              src={accountimg.img}
              alt="account img"
            />
            <div className="flex flex-col gap-y-0">
              <h1 className="name text-center md:text-[24px] font-semibold">
                {accountimg.name}
              </h1>
              <p className="gmail text-center opacity-75 text-[14px]">
                {accountimg.gmail}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-7 mx-auto w-[95%]">
        <div className="departments grid grid-cols-2 gap-4">
          {accountinfo?.map((depart, index) => (
            <div
              onClick={() => {
                setDepartId(depart?.id), setChangePage(depart?.name);
              }}
              key={depart?.id}
              className={`${
                departid === index ? 'border-b-4 border-[#FCA311]' : ''
              } p-3 shadow-lg text-[#00234D] cursor-pointer`}
            >
              <h1 className="font-semibold text-[12px] md:text-[18px]">
                {depart.name}
              </h1>
            </div>
          ))}
        </div>
        <div className="showresult mb-[100px]">
          {changePage === 'Account' && <AccountSetting />}
          {changePage === 'Payment Methouds' && <PaymentMethoud />}
        </div>
      </div>
    </div>
  );
}

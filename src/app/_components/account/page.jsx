'use client';
import React, { useState } from 'react';

export default function AccountSetting() {
  const [accountInfo, setAccountInfo] = useState({
    name: 'Mostafa yahya',
    email: 'mostafa@gmail.com',
    id: 0,
    password: '********',
    phone: '01158947589',
    address: 'minya street',
    dateOfbirth: '1/4/2001',
  });
  return (
    <div className="flex flex-col gap-x-3 text-[#00234D] shadow-md ">
      <h1 className="title font-bold md:text-[20] lg:text-[32px] ">Account</h1>
      <div className="info flex flex-col gap-y-5 p-3">
        <div className="name flex justify-between items-center">
          <div className="namee flex flex-col gap-2">
            <h1 className="font-normal opacity-75">Name</h1>
            <h2 className="md:text-[20px] font-semibold">
              {accountInfo?.name}
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-[140px] h-[40px] rounded-md">
            <button className="w-full h-full font-medium">change</button>
          </div>
        </div>
        <div className="email flex justify-between items-center">
          <div className="email flex flex-col gap-2">
            <h1 className="font-normal opacity-75">Email</h1>
            <h2 className="md:text-[20px] font-semibold">
              {accountInfo?.email}
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-[140px] h-[40px] rounded-md">
            <button className="w-full h-full font-medium">change</button>
          </div>
        </div>
        <div className="password flex justify-between items-center">
          <div className="password flex flex-col gap-2">
            <h1 className="font-normal opacity-75">Password</h1>
            <h2 className="md:text-[20px] font-semibold">
              {accountInfo?.password}
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-[140px] h-[40px] rounded-md">
            <button className="w-full h-full font-medium">change</button>
          </div>
        </div>
        <div className="phone flex justify-between items-center">
          <div className="phone flex flex-col gap-2">
            <h1 className="font-normal opacity-75">phone</h1>
            <h2 className="md:text-[20px] font-semibold">
              {accountInfo?.phone}
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-[140px] h-[40px] rounded-md">
            <button className="w-full h-full font-medium">change</button>
          </div>
        </div>
        <div className="address flex justify-between items-center">
          <div className="address flex flex-col gap-2">
            <h1 className="font-normal opacity-75">address</h1>
            <h2 className="md:text-[20px] font-semibold">
              {accountInfo?.address}
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-[140px] h-[40px] rounded-md">
            <button className="w-full h-full font-medium">change</button>
          </div>
        </div>
        <div className="datePfBirth flex justify-between items-center">
          <div className="datePfBirth flex flex-col gap-2">
            <h1 className="font-normal opacity-75">Date of Birth</h1>
            <h2 className="md:text-[20px] font-semibold">
              {accountInfo?.dateOfbirth}
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-[140px] h-[40px] rounded-md">
            <button className="w-full h-full font-medium">change</button>
          </div>
        </div>
      </div>
    </div>
  );
}

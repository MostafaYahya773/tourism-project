'use client';
import React, { useContext } from 'react';

import { contextProvider } from '@/app/context/contextProvider';

export default function AccountSetting({ data }) {
  // show and hide topic
  const { showChangeTopic, setshowChangeTopic } = useContext(contextProvider);
  return (
    <div className="flex flex-col gap-x-3 text-[#00234D] shadow-md ">
      <h1 className="title font-bold md:text-[20] lg:text-[32px] ">Account</h1>
      <div className="info flex flex-col gap-y-5 p-3">
        <div className="name flex flex-col gap-y-3 md:flex-row md:justify-between">
          <div className="namee flex flex-col gap-2">
            <h1 className="font-normal opacity-75">Name</h1>
            <h2 className="md:text-[20px] font-semibold">{data?.name}</h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-full md:w-[140px] h-[40px] rounded-md">
            <button
              onClick={() =>
                setshowChangeTopic({
                  boolean: false,
                  type: 'text',
                  name: 'name',
                })
              }
              className="w-full h-full font-medium"
            >
              change
            </button>
          </div>
        </div>

        <div className="email flex flex-col gap-y-3 md:flex-row md:justify-between">
          <div className="email flex flex-col gap-2">
            <h1 className="font-normal opacity-75">Email</h1>
            <h2 className="md:text-[20px] font-semibold">{data?.email}</h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-full md:w-[140px] h-[40px] rounded-md">
            <button
              onClick={() =>
                setshowChangeTopic({
                  boolean: false,
                  type: 'email',
                  name: 'email',
                })
              }
              className="w-full h-full font-medium"
            >
              change
            </button>
          </div>
        </div>
        <div className="password flex flex-col gap-y-3 md:flex-row md:justify-between">
          <div className="password flex flex-col gap-2">
            <h1 className="font-normal opacity-75">Password</h1>
            <h2 className="md:text-[20px] font-semibold">
              {/* {accountInfo?.password} */}
              **********
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-full md:w-[140px] h-[40px] rounded-md">
            <button
              onClick={() =>
                setshowChangeTopic({
                  boolean: false,
                  type: 'password',
                  name: 'password',
                })
              }
              className="w-full h-full font-medium"
            >
              change
            </button>
          </div>
        </div>
        <div className="phone flex flex-col gap-y-3 md:flex-row md:justify-between">
          <div className="phone flex flex-col gap-2">
            <h1 className="font-normal opacity-75">phone</h1>
            <h2 className="md:text-[20px] font-semibold">{data?.phone}</h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-full md:w-[140px] h-[40px] rounded-md">
            <button
              onClick={() =>
                setshowChangeTopic({
                  boolean: false,
                  type: 'text',
                  name: 'phone',
                })
              }
              className="w-full h-full font-medium"
            >
              change
            </button>
          </div>
        </div>
        <div className="address flex justify-between items-center">
          <div className="address flex flex-col gap-2">
            <h1 className="font-normal opacity-75">address</h1>
            <h2 className="md:text-[20px] font-semibold">
              {data?.address || 'add address'}
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-full md:w-[140px] h-[40px] rounded-md">
            <button
              onClick={() =>
                setshowChangeTopic({
                  boolean: false,
                  type: 'text',
                  name: 'address',
                })
              }
              className="w-full h-full font-medium"
            >
              {data?.address ? 'change' : 'add'}
            </button>
          </div>
        </div>
        <div className="datePfBirth flex justify-between items-center">
          <div className="datePfBirth flex flex-col gap-2">
            <h1 className="font-normal opacity-75">Date of Birth</h1>
            <h2 className="md:text-[20px] font-semibold">
              {data?.dateOfBirth
                ? data?.dateOfBirth.slice(0, 10)
                : '' || 'add date of birth'}
            </h2>
          </div>
          <div className="change flex gap-2 items-center border border-[#00234D] text-[#00234D] w-full md:w-[140px] h-[40px] rounded-md">
            <button
              onClick={() =>
                setshowChangeTopic({
                  boolean: false,
                  type: 'date',
                  name: 'dateOfBirth',
                })
              }
              className="w-full h-full font-medium"
            >
              {data?.dateOfBirth ? 'change' : 'add'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

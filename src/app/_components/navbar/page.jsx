'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

export default function Navbar() {
  //to get path from url
  let path = usePathname();
  // face account details
  let [account, setAccount] = useState([
    { name: 'Mostafayahya', img: 'TURISM-AIG-WEB-PIC/aswan-egy.jpg' },
  ]);

  // open and close settings
  const [isOpen, setIsOpem] = useState(false);
  const [isClick, setIsClick] = useState(false);
  let pathname = usePathname();
  return (
    <div className=" flex justify-between  md:grid lg:grid-cols-3 md:grid-cols-[auto_1fr_auto] items-center px-4 py-1 fixed z-[99999] top-0 left-0 right-0 w-full mx-auto bg-white max-w-[2000px] shadow-md">
      <div className="logo">
        <Link href="/">
          <img
            className="w-[80px] h-[50px]   "
            src="/TURISM-AIG-WEB-PIC/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div className="mx-auto hidden md:flex links w-full">
        <ul className="flex items-center lg:justify-evenly md:justify-center md:gap-x-5 gap-x-0 text-[#14213D] font-semibold w-full">
          <li className={`${path === '/' ? 'active' : ''}`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`${path === '/book' ? 'active' : ''}`}>
            <Link href="/book">Book</Link>
          </li>
          <li className={`${path === '/apartment' ? 'active' : ''}`}>
            <Link href="/apartment">Apartments</Link>
          </li>
          <li className={`${path === '/contact' ? 'active' : ''}`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="ms-auto hidden md:flex account__favourate  items-center gap-x-5 text-[#5D0207] font-semibold text-[14px] cursor-pointer">
        <Link
          href="/favourateLayout"
          className="favourate flex gap-x-2 items-center "
        >
          <div className="text flex gap-x-2 items-center pe-3">
            <i className="fa-solid fa-heart text-[28px] lg:text-[18px]"></i>
            <p className="hidden lg:block">Favourites</p>
          </div>
          <span className="iocn">|</span>
        </Link>
        <button
          onClick={() => setIsOpem(!isOpen)}
          className="account flex  items-center"
        >
          {account.map((acc) => (
            <div
              key={acc.img}
              className="accountDetails flex items-center gap-x-2"
            >
              <div className="img">
                <img
                  className="w-[30px] h-[30px] rounded-full"
                  src={acc?.img}
                  alt="profilepic"
                />
              </div>
              <div className="name hidden lg:block">
                {acc?.name.length > 10
                  ? `${acc?.name.slice(0, 9)}..`
                  : acc.name}
              </div>
              <div className="icon"></div>
            </div>
          ))}
          <i className="fa-solid fa-chevron-down text-[#FF8682] hidden lg:block"></i>
        </button>
      </div>
      <div
        className={` ${
          isOpen ? 'block' : 'hidden'
        } settingOpen absolute left-0 right-0 top-[58px] md:right-5 md:left-auto  md:top-16 bg-white shadow-2xl w-full md:w-[200px] h-fit px-4 py-4 rounded-b-xl flex flex-col gap-y-3`}
      >
        <div className="account flex flex-col gap-y-4 border-b border-dotted border-[#112211] pb-3">
          <Link
            onClick={() => isOpen(false)}
            href="/accountLayout"
            className="myAccount flex gap-x-2 items-center relative"
          >
            <i className="fa-solid fa-user-large text-[14px]"></i>
            <p className="text-[14px] font-medium mt-1">My account</p>
            <i className="fa-solid fa-chevron-right absolute right-0 text-[14px] mt-1"></i>
          </Link>
          <Link
            onClick={() => isOpen(false)}
            href="/payment"
            className="payment flex gap-x-2 items-center relative"
          >
            <i className="fa-solid fa-money-check text-[14px]"></i>
            <p className="text-[14px] font-medium ">Payments</p>
            <i className="fa-solid fa-chevron-right absolute right-0 text-[14px] "></i>
          </Link>
        </div>
        <div className="support__log flex flex-col gap-y-4">
          <Link
            onClick={() => isOpen(false)}
            href="/"
            className="support flex gap-x-2 items-center relative"
          >
            <i className="fa-solid fa-circle-info text-[14px]"></i>
            <p className="text-[14px] font-medium ">support</p>
            <i className="fa-solid fa-chevron-right absolute right-0 text-[14px] mt-1"></i>
          </Link>
          <Link
            onClick={() => isOpen(false)}
            href="/login"
            className="payment flex gap-x-2 items-center relative"
          >
            <i className="fa-solid fa-right-to-bracket text-[14px]"></i>
            <p className="text-[14px] font-medium mt-1">logout</p>
            <i className="fa-solid fa-chevron-right absolute right-0 text-[14px] mt-1"></i>
          </Link>
        </div>
      </div>

      <div className="mobile md:hidden cursor-pointer">
        <i
          onClick={() => setIsOpem(!isOpen)}
          className="fa-solid fa-bars text-[22px] text-[#00234D]"
        ></i>
      </div>
    </div>
  );
}

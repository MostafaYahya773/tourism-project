'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
export default function NavbarW() {
  let pathname = usePathname();
  const [isClick, setIsClick] = useState(false);
  return (
    <div
      className={`flex backdrop-blur bg-white/2 justify-between items-center px-4 py-1 fixed z-[9999999] top-0 left-0 right-0 w-full mx-auto  max-w-[2000px]  `}
    >
      <div className="logo">
        <Link href="/">
          <img
            className="w-[80px] h-[50px]"
            src="/TURISM-AIG-WEB-PIC/logo.png"
            alt="logo"
          />
        </Link>
      </div>
      <div
        className={`${
          pathname === '/login' ||
          pathname === '/register' ||
          pathname === '/verifyCode' ||
          pathname === '/forgotPass'
            ? 'md:hidden'
            : 'md:flex'
        } hidden option  items-center gap-x-7`}
      >
        <Link
          href="/"
          className={`findCar flex items-center gap-x-3 ${
            pathname === '/' ? 'text-[#FCA311]' : 'text-black'
          }`}
        >
          <i className="fa-solid fa-car w-[20px] h-[16px]"></i>
          <p className="text-[14px] font-semibold">Find Car</p>
        </Link>

        <Link
          href="/stays"
          className={`findCar flex items-center gap-x-3  ${
            pathname === '/stays' ? 'text-[#FCA311]' : 'text-black'
          }`}
        >
          <i className="fa-solid fa-bed w-[20px] h-[16px]"></i>
          <p className="text-[14px] font-semibold">Find Stays</p>
        </Link>
      </div>
      <div className="hidden log md:flex gap-x-3">
        <Link
          href="/login"
          className={`bg-[#6E1E1E] text-white py-2 px-5  text-[14px] font-bold rounded-lg   `}
        >
          Login
        </Link>
        <Link
          className={`bg-[#6E1E1E] text-white  font-medium  text-[14px] rounded-lg   py-2 px-5`}
          href="/register"
        >
          Sign Up
        </Link>
      </div>
      <div
        className={`md:hidden ${
          isClick ? 'block' : 'hidden'
        } absolute right-0 top-20  humborger___mobile flex flex-col gap-y-5 bg-sky-900 p-5 rounded-xl w-full`}
      >
        <Link
          href="/stays"
          className={`findCar flex items-center gap-x-3  ${
            pathname === '/stays' ? 'text-[#FCA311]' : 'text-white'
          }`}
        >
          <i className="fa-solid fa-bed w-[20px] h-[16px]"></i>
          <p className="text-[14px] font-semibold">Find Stays</p>
        </Link>

        <Link
          href="/"
          className={`findCar flex items-center gap-x-3 ${
            pathname === '/' ? 'text-[#FCA311]' : 'text-white'
          }`}
        >
          <i className="fa-solid fa-car w-[20px] h-[16px]"></i>
          <p className="text-[14px] font-semibold">Find Car</p>
        </Link>

        <Link
          href="/login"
          className={` flex items-center gap-x-3 ${
            pathname === '/login' ? 'text-[#FCA311]' : 'text-white'
          }`}
        >
          <i className="fa-solid fa-right-to-bracket w-[20px] h-[16px]"></i>
          <p className="text-[14px] font-semibold">Login</p>
        </Link>

        <Link
          href="/register"
          className={`findCar flex items-center gap-x-3 ${
            pathname === '/register' ? 'text-[#FCA311]' : 'text-white'
          }`}
        >
          <i className="fa-solid fa-user-plus w-[20px] h-[16px]"></i>
          <p className="text-[14px] font-semibold">Sign Up</p>
        </Link>
      </div>
      <div className="mobile md:hidden cursor-pointer">
        <i
          onClick={() => setIsClick(!isClick)}
          className="fa-solid fa-bars text-[22px] text-[#00234D]"
        ></i>
      </div>
    </div>
  );
}

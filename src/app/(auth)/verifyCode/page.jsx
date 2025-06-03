import Link from 'next/link';
import React from 'react';
import '@fortawesome/fontawesome-free';
import CustomSlider from '@/app/_components/slider/page';

export default function Verify() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="mx-5 xl:mx-20  flex justify-center items-center h-screen py-2 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-full gap-x-10 ">
        <div className="text  text-white flex flex-col justify-center gap-y-7 px-5 md:px-10">
          <Link
            href="/login"
            className="flex gap-x-3 items-center text-[#00234D]"
          >
            <i className="fa-solid fa-chevron-left"></i>
            <p>back to login</p>
          </Link>
          <div className="title text-[#00234D] flex flex-col gap-y-2">
            <h1 className="font-bold text-[40px]">Verify code</h1>
            <p>An authentication code has been sent to your email.</p>
          </div>
          <div className="form flex flex-col gap-y-4">
            <form>
              <div className="flex flex-col gap-y-5">
                <div className="email flex flex-col relative">
                  <label
                    htmlFor="ver"
                    className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                  >
                    Enter Code
                  </label>
                  <input
                    className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2"
                    type="text"
                    id="ver"
                    placeholder="Enter Your Code"
                  />
                </div>
                <div className="remember__forget flex justify-between items-center flex-wrap gap-3 ">
                  <div className="remember text-[#00234D] flex gap-x-1">
                    <p
                      htmlFor="rem"
                      className="text-[14px] font-normal cursor-default"
                    >
                      Didn’t receive a code?{' '}
                      <Link href="" className="text-[#FF8682] cursor-pointer ">
                        Resend
                      </Link>{' '}
                    </p>
                  </div>
                </div>
                <Link
                  type="submit"
                  className="bg-[#6E1E1E] h-[48px] rounded-md w-full flex justify-center items-center"
                  href="/setPass"
                >
                  Verify
                </Link>
              </div>
            </form>
          </div>
        </div>
        <div className=" h-[670px] my-auto w-[95%] mx-auto hidden lg:block">
          <CustomSlider {...settings} className="h-full">
            <img
              src="/TURISM-AIG-WEB-PIC/Rectangle20@2x.png"
              alt=""
              className="h-full w-full px-2"
            />
            <img
              src="/TURISM-AIG-WEB-PIC/Rectangle 5.png"
              alt=""
              className="h-full w-full px-2"
            />
          </CustomSlider>
        </div>
      </div>
    </div>
  );
}

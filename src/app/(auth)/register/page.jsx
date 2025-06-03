import Link from 'next/link';
import React from 'react';
import '@fortawesome/fontawesome-free';
import CustomSlider from '@/app/_components/slider/page';

export default function Register() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="mx-5 xl:mx-20  flex justify-center items-center h-screen mt-10 mb-40 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-full gap-x-10 ">
        <div className="img h-[600px] my-auto w-[95%] mx-auto hidden lg:block">
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
        <div className="text  text-white flex flex-col justify-center gap-y-7 px-5 md:px-10">
          <div className="title text-[#00234D] flex flex-col gap-y-2">
            <h1 className="font-bold text-[40px]">Sign Up</h1>
            <p className="">
              Let’s get you all st up so you can access your personal account.
            </p>
          </div>
          <div className="form flex flex-col gap-y-4">
            <form>
              <div className="flex flex-col gap-y-5">
                <div className="names grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                  <div className="f-name relative ">
                    <label
                      htmlFor="fname"
                      className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                    >
                      first name
                    </label>
                    <input
                      className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2 w-full"
                      type="text"
                      id="fname"
                      placeholder="Enter Your first name"
                    />
                  </div>
                  <div className="l-name relative">
                    <label
                      htmlFor="lname"
                      className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                    >
                      last name
                    </label>
                    <input
                      className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2  w-full"
                      type="text"
                      id="lname"
                      placeholder="Enter Your last name"
                    />
                  </div>
                </div>
                <div className="email_phone grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                  <div className="email flex flex-col relative">
                    <label
                      htmlFor="email"
                      className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                    >
                      Email
                    </label>
                    <input
                      className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2"
                      type="email"
                      id="email"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="phone flex flex-col relative">
                    <label
                      htmlFor="tel"
                      className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                    >
                      phone
                    </label>
                    <input
                      className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2 w-full"
                      type="tel"
                      id="tel"
                      placeholder="Enter Your phone"
                    />
                  </div>
                </div>
                <div className="password flex flex-col relative">
                  <label
                    htmlFor="pass"
                    className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                  >
                    Password
                  </label>
                  <input
                    className="border outline-none text-black border-[#79747E] rounded-md  h-[50px] px-2"
                    type="password"
                    id="pass"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="confPassword flex flex-col relative">
                  <label
                    htmlFor="pass"
                    className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                  >
                    confirm Password
                  </label>
                  <input
                    className="border outline-none text-black border-[#79747E] rounded-md  h-[50px] px-2"
                    type="password"
                    id="pass"
                    placeholder="Enter Your confirm Password"
                  />
                </div>
                <div className="remember__forget flex justify-between items-center flex-wrap gap-3 ">
                  <div className="remember text-[#00234D] flex gap-x-1">
                    <input
                      type="checkbox"
                      className="cursor-pointer"
                      id="rem"
                    />
                    <label
                      htmlFor="rem"
                      className="cursor-pointer text-[14px] font-normal"
                    >
                      I agree to all the{' '}
                      <Link href="" className="text-[#FF8682]">
                        Terms
                      </Link>{' '}
                      and{' '}
                      <Link href="" className="text-[#FF8682]">
                        Privacy Policies
                      </Link>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  className="bg-[#6E1E1E] h-[48px] rounded-2xl"
                >
                  Create account
                </button>
              </div>
            </form>
            <div className="Login text-center">
              <p className="text-[#00234D] text-[14px] font-semibold">
                Already have an accountt ?{' '}
                <Link href={'/login'} className="text-[#FF8682]">
                  Login
                </Link>
              </p>
            </div>
          </div>
          <div className="another border border-t-[#00234D] opacity-50 relative before"></div>
          <div className="accounts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-5 gap-y-5">
            <Link
              href={''}
              className="facebook border border-[#FCA5A5] flex justify-center items-center h-[45px]  "
            >
              <i className="fa-brands fa-facebook text-[#1877F2] text-[24px]"></i>
            </Link>
            <Link
              href={''}
              className="facebook border border-[#FCA5A5] flex justify-center items-center h-[45px]  "
            >
              <i className="fa-brands fa-google text-[#1877F2] text-[24px]"></i>
            </Link>

            <Link
              href={''}
              className="facebook border border-[#FCA5A5] flex justify-center items-center h-[45px]  "
            >
              <i className="fa-brands fa-apple text-[#00234D] text-[24px]"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import '@fortawesome/fontawesome-free';
import CustomSlider from '@/app/_components/slider/page';
import UseForget from '@/app/hook/(auth)/useforget';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { contextProvider } from '@/app/context/contextProvider';

export default function Forget() {
  // get email from user
  const { setForgetEmail, isloading, setIsLoading } =
    useContext(contextProvider);
  //send data to api
  let { mutate, isError } = UseForget();
  // read email from input
  let [readEmail, setReadEmail] = useState({});
  // userouter
  let router = useRouter();
  // read email from input
  const handleForget = (e) => {
    let email = e.target.value;
    let data = { email: email };
    setReadEmail(data);
    setForgetEmail(email);
  };
  // handle submit
  const submitHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    mutate(readEmail, {
      onSuccess: (res) => {
        setIsLoading(false);
        toast.success(res?.data?.message, {
          position: 'top-center',
          className: 'mt-20 text-[14px]',
        });
        router.push('/verifyCode');
      },
      onError: (err) => {
        setIsLoading(false);
        toast.error(err?.response?.data?.error, {
          position: 'top-center',
          className: 'mt-20 text-[14px]',
        });
      },
    });
  };

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };
  return (
    <div className="mx-5 xl:mx-20  mt-10 mb-40  flex justify-center items-center h-screen py-2 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-full gap-x-10 ">
        <div className="text text-white flex flex-col justify-center gap-y-7 px-5 md:px-10">
          <Link
            href="/login"
            className="flex gap-x-3 items-center text-[#F87171]"
          >
            <i className="fa-solid fa-chevron-left"></i>
            <p>back to login</p>
          </Link>
          <div className="title text-[#00234D] flex flex-col gap-y-2">
            <h1 className="font-bold text-[40px]">Forgot your password?</h1>
            <p>
              Don’t worry, happens to all of us. Enter your email below to
              recover your password
            </p>
          </div>
          <div className="form flex flex-col gap-y-4">
            <form>
              <div className="flex flex-col gap-y-5">
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
                    onChange={handleForget}
                    placeholder="Enter Your Email"
                    required
                  />
                </div>
                <button
                  onClick={submitHandler}
                  type="submit"
                  className="bg-[#6E1E1E] h-[48px] rounded-md w-full flex justify-center items-center"
                >
                  {isloading ? <span className="loaderChange"></span> : 'send'}
                </button>
              </div>
            </form>
          </div>
          {/* <div className="another border border-t-[#00234D] opacity-50 relative before"></div> */}
          {/* <div className="accounts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-x-5 gap-y-5">
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
          </div> */}
        </div>
        <div className=" h-[600px] my-auto  w-[95%]  hidden lg:block">
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

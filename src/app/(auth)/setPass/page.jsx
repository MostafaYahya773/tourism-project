'use client';
import React, { useContext, useState } from 'react';
import '@fortawesome/fontawesome-free';
import CustomSlider from '@/app/_components/slider/page';
import UseReset from '@/app/hook/(auth)/useReset';
import { contextProvider } from '@/app/context/contextProvider';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function SetPass() {
  // get data from context
  let { forgetEmail, code, isloading, setIsLoading } =
    useContext(contextProvider);
  // send data to api
  let { mutate, isError, error } = UseReset();
  // read email from input

  const handleSubmit = (e) => {
    setNewPassword(e.target.value);
  };

  // userouter
  let router = useRouter();
  //read new password
  const [newPassword, setNewPassword] = useState('');
  // handle submit
  const submitHandler = (e) => {
    e.preventDefault();
    if (!forgetEmail && !code) return;
    setIsLoading(true);
    mutate(
      { email: forgetEmail, token: code, newPassword: newPassword },
      {
        onSuccess: (res) => {
          setIsLoading(false);
          toast.success(res?.data?.message, {
            position: 'top-center',
            className: 'mt-20 text-[14px]',
          });
          router.push('/login');
        },
        onError: (err) => {
          setIsLoading(false);
          toast.error(err?.response?.data?.error, {
            position: 'top-center',
            className: 'mt-20 text-[14px]',
          });
        },
      }
    );
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
    <div className=" xl:mx-20 mt-10 mb-40 mx-5  flex justify-center items-center h-screen py-2 relative ">
      <div className="grid grid-cols-1 lg:grid-cols-2  w-full h-full gap-x-10 ">
        <div className="text  text-white flex flex-col justify-center gap-y-7 px-5 md:px-10">
          <div className="title text-[#00234D] flex flex-col gap-y-2">
            <h1 className="font-bold text-[40px]">Set a password</h1>
            <p>
              Your previous password has been reseted. Please set a new password
              for your account.
            </p>
          </div>
          <div className="form flex flex-col gap-y-4">
            <form>
              <div className="flex flex-col gap-y-5">
                <div className="password flex flex-col relative">
                  <label
                    htmlFor="pass"
                    className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                  >
                    New Password
                  </label>
                  <input
                    className="border outline-none text-black border-[#79747E] rounded-md  h-[50px] px-2"
                    type="password"
                    id="pass"
                    placeholder="Enter Your Password"
                    onChange={handleSubmit}
                  />
                </div>
                {/* <div className="re-password flex flex-col relative">
                  <label
                    htmlFor="repass"
                    className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                  >
                    Re-enter-Password
                  </label>
                  <input
                    className="border outline-none text-black border-[#79747E] rounded-md  h-[50px] px-2"
                    type="password"
                    id="repass"
                    placeholder="Enter Your repassword"
                  />
                </div> */}
                <button
                  onClick={submitHandler}
                  type="submit"
                  className="bg-[#6E1E1E] h-[48px] rounded-md flex justify-center items-center"
                >
                  {isloading ? (
                    <span className="loaderChange"></span>
                  ) : (
                    'set password'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className=" h-[600px] my-auto w-[95%] mx-auto hidden lg:block">
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

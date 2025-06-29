'use client';
import Link from 'next/link';

import * as Yup from 'yup';
import '@fortawesome/fontawesome-free';
import CustomSlider from '@/app/_components/slider/page';
import UseRegister from '@/app/hook/(auth)/useRegister';
import { useFormik } from 'formik';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { contextProvider } from '@/app/context/contextProvider';
import toast from 'react-hot-toast';
export default function Register() {
  // use context
  let { setTokenValue, isloading, setIsLoading } = useContext(contextProvider);

  // handle error in form
  const userError = Yup.object().shape({
    firstName: Yup.string()
      .min(3, 'min 3 length')
      .max(10, 'max 10 length')
      .required('First Name is required'),
    lastName: Yup.string()
      .min(3, 'min 3 length')
      .max(10, 'max 10 length')
      .required('Last Name is required'),
    email: Yup.string().email('Email is not Vailed').required(),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,100}$/,
        'Password must be small (a-z)  capital (A-Z) number (0-9)  special (@$!%*?&)'
      )
      .required('Password is required'),
    phone: Yup.string()
      .matches(/^(\+20)?01[0125][0-9]{8}$/, 'phone must be Egy Number')
      .required('Phone is required'),
  });
  // call api using hook
  const { mutate, isError, error } = UseRegister();

  //function to send data to api
  const hanleSubmit = (values) => {
    setIsLoading(true);
    mutate(values, {
      onSuccess: (res) => {
        setIsLoading(false);
        toast.success(res?.data?.message, {
          position: 'top-center',
          className: 'mt-20 text-[14px]',
        });
        router.push('/');
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
  // get data from user
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      phone: '',
    },
    onSubmit: hanleSubmit,
    validationSchema: userError,
  });

  let router = useRouter();
  //handle redirect
  const handleRedirect = () => {
    let token = localStorage.getItem('token');
    if (!token) return;
    setTokenValue(localStorage.getItem('token'));
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
            {isError ? (
              <div className="text-white flex items-center p-2 rounded-lg  bg-[#d15858]">
                {error?.response?.data?.error || error?.message}
              </div>
            ) : null}
            <form onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-y-5">
                <div className="names grid grid-cols-1 lg:grid-cols-2 gap-5 ">
                  <div className="f-name relative ">
                    <label
                      htmlFor="firstName"
                      className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                    >
                      first name
                    </label>
                    <input
                      className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2 w-full"
                      type="text"
                      id="firstName"
                      name="firstName"
                      placeholder="Enter Your first name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.firstName && formik.touched.firstName ? (
                      <div className="flex items-center  text-[12px] mt-2 text-red-600  ">
                        {`* ${formik.errors.firstName}`}
                      </div>
                    ) : null}
                  </div>

                  <div className="l-name relative">
                    <label
                      htmlFor="lastName"
                      className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                    >
                      last name
                    </label>
                    <input
                      className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2  w-full"
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter Your last name"
                    />
                    {formik.errors.lastName && formik.touched.lastName ? (
                      <div className="flex items-center  text-[12px] mt-2 text-red-600  ">
                        {`* ${formik.errors.lastName}`}
                      </div>
                    ) : null}
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
                      name="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter Your Email"
                    />
                    {formik.errors.email && formik.touched.email ? (
                      <div className="flex items-center  text-[12px] mt-2 text-red-600  ">
                        {`* ${formik.errors.email}`}
                      </div>
                    ) : null}
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
                      name="phone"
                      value={formik.values.phone}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      placeholder="Enter Your phone"
                    />
                    {formik.errors.phone && formik.touched.phone ? (
                      <div className="flex items-center  text-[12px] mt-2 text-red-600  ">
                        {`* ${formik.errors.phone}`}
                      </div>
                    ) : null}
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
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Your Password"
                  />
                  {formik.errors.password && formik.touched.password ? (
                    <div className="flex items-center  text-[12px] mt-2 text-red-600  ">
                      {`* ${formik.errors.password}`}
                    </div>
                  ) : null}
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
                  onClick={handleRedirect}
                  type="submit"
                  className="bg-[#6E1E1E] h-[48px] rounded-2xl"
                >
                  {isloading ? (
                    <span className="loaderChange"></span>
                  ) : (
                    'Create account'
                  )}
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

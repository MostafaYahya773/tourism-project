'use client';
import Link from 'next/link';
import React, { useContext } from 'react';
import '@fortawesome/fontawesome-free';
import CustomSlider from '@/app/_components/slider/page';
import { usePathname } from 'next/navigation';
import { useFormik } from 'formik';

import UseLogin from '@/app/hook/(auth)/useLogin';
import { contextProvider } from '@/app/context/contextProvider';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

export default function Login() {
  let { tokenValue, setTokenValue, isloading, setIsLoading } =
    useContext(contextProvider);
  // call api using hook
  const { mutate, isError, error } = UseLogin();
  // use router
  let router = useRouter();
  // function to send data to api
  const hanleSubmit = (values) => {
    setIsLoading(true);
    mutate(values, {
      onSuccess: (res) => {
        setIsLoading(false);
        toast.success(res?.data?.message, {
          position: 'top-center',
          className: 'mt-24 text-[14px]',
        });
        localStorage.setItem('token', res?.data?.token);
        setTokenValue(res?.data?.token);
        router.push('/');
      },
      onError: (err) => {
        setIsLoading(false);
      },
    });
  };
  // set values
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: hanleSubmit,
  });

  let pathname = usePathname();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  // handleLogin
  const handleLogin = () => {
    let token = localStorage.getItem('token');
    if (!token) {
      return;
    } else {
      setTokenValue(localStorage.getItem('token'));
      toast.success('Login Successfully', { position: 'buttom-center' });
      router.push('/');
    }
  };
  return (
    <div
      className={`${
        pathname === '/payment'
          ? 'mx-0 mt-0 mb-0 h-fit'
          : 'mx-5 xl:mx-20 mt-10 mb-0 md:mb-40 md:my-20 '
      }   flex justify-center items-center relative `}
    >
      <div
        className={`${
          pathname === '/payment'
            ? 'grid-cols-1 h-fit'
            : 'grid-cols-1 lg:grid-cols-2 h-full'
        } grid w-full  gap-x-10 `}
      >
        <div
          className={`${
            pathname === '/payment'
              ? 'px-3 justify-start h-fit'
              : 'md:px-10 px-5 justify-center'
          }  text-white flex flex-col  gap-y-7`}
        >
          <div className="mt-5 lg:mt-0 title text-[#00234D] flex flex-col gap-y-2">
            <h1 className="font-bold text-[40px] ">Login</h1>
            <p className=" text-[14px] md:text-[18px]">
              Login to access your Golobe account
            </p>
          </div>
          <div className="form flex flex-col gap-y-4">
            {isError && (
              <div className="text-white flex items-center p-2 rounded-lg  bg-[#d15858]">
                {error?.response?.data?.error || error?.message}
              </div>
            )}
            <form onSubmit={formik.handleSubmit}>
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
                    name="email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Your Email"
                  />
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
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Enter Your Password"
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
                      Remember me
                    </label>
                  </div>
                  <div className="forget">
                    <p className=" font-normal text-[#FF8682] text-[14px]">
                      <Link href={'/forgotPass'}>Forget password</Link>
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogin}
                  type="submit"
                  className="bg-[#6E1E1E] h-[48px] rounded-2xl flex justify-center items-center"
                >
                  {isloading ? <span className="loaderChange"></span> : 'Login'}
                </button>
              </div>
            </form>
            <div className="signup text-center">
              <p className="text-[#00234D] text-[14px] font-semibold">
                Dont have an account ?{' '}
                <Link href={'/register'} className="text-[#FF8682]">
                  Sign Up
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
        <div
          className={`${
            pathname === '/payment' ? 'hidden h-fit' : 'lg:h-[600px] h-0 '
          }  my-auto w-[95%] mx-auto`}
        >
          <CustomSlider
            {...settings}
            className={` ${
              pathname === '/payment' ? 'hidden' : 'hidden md:block  lg:block'
            } h-full`}
          >
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

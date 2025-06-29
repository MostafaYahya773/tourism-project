'use client';
import { contextProvider } from '@/app/context/contextProvider';
import UseContact from '@/app/hook/(auth)/useContact';
import { useFormik } from 'formik';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';

export default function Contact() {
  // use context
  let { isloading, setIsLoading } = useContext(contextProvider);
  // send data to api
  let { mutate } = UseContact();

  //handle date
  const handleSubmit = (values) => {
    setIsLoading(true);
    mutate(values, {
      onSuccess: (res) => {
        setIsLoading(false);
        toast.success(res?.data?.message, {
          position: 'top-center',
          className: 'mt-12 text-[14px]',
        });
      },
      onError: (err) => {
        setIsLoading(false);
        toast.error(err?.response?.data?.error, {
          position: 'top-center',
          className: 'mt-12 text-[14px]',
        });
      },
    });
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: handleSubmit,
  });
  let path = usePathname();
  return (
    <div
      className={`grid lg:grid-cols-2 grid-cols-1  gap-7 py-2 ${
        path === '/contact' ? 'mt-20 mb-44 items-start' : 'items-center'
      }`}
    >
      <div className="info flex flex-col text-[#76192D]  gap-y-5 lg:mx-auto mx-5 ">
        <div className="title">
          <h1 className="font-bold text-[24px] mb-2">Contact Us</h1>
          <p className="text-[14px] font-medium">
            Have questions or need help with your booking? <br /> Reach out to
            our support team.
          </p>
        </div>
        <div className="links flex flex-col md:flex-wrap gap-3">
          <Link href="" className="email flex gap-x-2 items-center">
            <i className="fa-solid fa-envelope text-[#FCA311]"></i>
            <p className="font-medium">info@noblestay.com</p>
          </Link>

          <Link
            href="tel:+1 234 567 8901"
            className="number flex gap-x-2 items-center"
          >
            <i className="fa-solid fa-phone text-[#FCA311]"></i>
            <p className="font-medium">+1 234 567 8901</p>
          </Link>

          <Link href="" className="address flex gap-x-2 items-center">
            <i className="fa-solid fa-location-dot text-[#FCA311]"></i>
            <p className="font-medium">123 Main Street, City, Country</p>
          </Link>
        </div>
      </div>

      <div className="form">
        <div
          className={`${
            path === '/contact' ? 'h-[450px] justify-center gap-y-9 ' : ''
          } w-[95%] mx-auto  lg:w-[500px] h-fit  md:mx-auto p-5 contact-shadow flex flex-col gap-y-3 rounded-2xl`}
        >
          <div className="title">
            <h1 className="tetx-[#14213D] font-semibold text-[20xp]">
              Send a Message
            </h1>
          </div>
          <form onSubmit={formik.handleSubmit}>
            <div
              className={`${
                path === '/contact' ? 'gap-y-7' : ''
              } inputs flex flex-col gap-y-3`}
            >
              <input
                className="outline-none border border-[#14213D33] rounded-lg h-[42px] px-3 focus:border-[#76192D]"
                type="text"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                placeholder=" Your Name"
              />
              <input
                className="outline-none border border-[#14213D33] rounded-lg h-[42px] px-3 focus:border-[#76192D]"
                type="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                placeholder=" Your Email"
              />
              <input
                className="outline-none border border-[#14213D33] rounded-lg h-[42px] px-3 focus:border-[#76192D]"
                type="text"
                name="subject"
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                required
                placeholder=" Your subject"
              />
              <textarea
                className="outline-none border border-[#14213D33] rounded-lg h-[114px] p-2 focus:border-[#76192D]"
                required
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder=" Your Message"
              ></textarea>
              <button
                type="submit"
                className="text-[#E5E7EB] bg-[#7B193F] rounded-lg h-[52px] text-[18px] font-semibold"
              >
                {isloading ? (
                  <span className="loaderChange"></span>
                ) : (
                  'Send Message'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

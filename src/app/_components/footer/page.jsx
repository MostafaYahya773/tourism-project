import Link from 'next/link';

import React from 'react';
export default function Footer() {
  return (
    <div className="mt-10 px-2 md:px-10 bg-[#00234D] w-full left-0 sticky right-0 h-fit p-5">
      <div className="flex flex-col gap-y-10 mx-auto max-w-[2000px]">
        <div className="subscribe font-bold text-[#FBFCFF] bg-[#14213D5E] -mt-40 w-full rounded-xl h-[305px] p-2 hidden md:flex">
          <div className="flex flex-col gap-y-2 w-full lg:w-1/2">
            <h1 className="text-[44px] ">
              Subscribe
              <br /> Newsletter
            </h1>
            <h4 className="text-[20px]">The Travel</h4>
            <p className="font-medium opacity-70">
              Get inspired! Receive travel discounts, tips and behind the scenes
              stories.
            </p>
            <form>
              <div className="input flex gap-x-3 ">
                <input
                  className="border-none outline-none text-black font-normal p-3 min-w-[200px] w-2/3 h-[60px] rounded-sm"
                  type="text"
                  placeholder="Your email address"
                />
                <button
                  className="h-[60px] bg-[#FCA311] px-5 rounded-sm"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
          <div className="img lg:pe-10 md:hidden lg:block w-1/2">
            <img
              className="ms-auto"
              src="/TURISM-AIG-WEB-PIC/footerimg.png"
              alt="img"
            />
          </div>
        </div>
        <div className="info grid grid-cols-2 lg:grid-cols-6 md:grid-cols-3 gap-y-10  text-[#FEF2F2]">
          <div className="socail flex gap-x-3 text-[25px]">
            <Link href="">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link href="">
              <i className="fa-brands fa-youtube"></i>
            </Link>
            <Link href="">
              <i className="fa-brands fa-square-instagram"></i>
            </Link>
          </div>
          <div className="Destinations flex flex-col gap-y-3">
            <h1 className="font-bold">Our Destinations</h1>
            <div className="links opacity-70 text-[14px] flex gap-y-3 flex-col">
              <Link href="">Canada</Link>
              <Link href="">Alaksa</Link>
              <Link href="">France</Link>
              <Link href="">Iceland</Link>
            </div>
          </div>
          <div className="Activities flex flex-col gap-y-3">
            <h1 className="font-bold">Our Activities</h1>
            <div className="links opacity-70 text-[14px] flex gap-y-3 flex-col">
              <Link href="">Northern Lights</Link>
              <Link href="">Cruising & sailing</Link>
              <Link href="">Multi-activities</Link>
              <Link href="">Kayaing</Link>
            </div>
          </div>
          <div className="Blogs flex flex-col gap-y-3">
            <h1 className="font-bold">Travel Blogs</h1>
            <div className="links opacity-70 text-[14px] flex gap-y-3 flex-col">
              <Link href="">Bali Travel Guide</Link>
              <Link href="">Sri Lanks Travel Guide</Link>
              <Link href="">Peru Travel Guide</Link>
              <Link href="">Bali Travel Guide</Link>
            </div>
          </div>
          <div className="About flex flex-col gap-y-3">
            <h1 className="font-bold">About Us</h1>
            <div className="links opacity-70 text-[14px] flex gap-y-3 flex-col">
              <Link href="">Our Story</Link>
              <Link href="">Work with us</Link>
            </div>
          </div>
          <div className="contacts flex flex-col gap-y-3">
            <h1 className="font-bold">Contact Us</h1>
            <div className="links opacity-70 text-[14px] flex gap-y-3 flex-col">
              <Link href="">Our Story</Link>
              <Link href="">Work with us</Link>
            </div>
          </div>
        </div>
        <div className="md:hidden mobile">
          <form>
            <div className="input flex flex-wrap  gap-3  ">
              <input
                className="border-none outline-none text-black font-normal p-3 min-w-[200px] w-full h-[60px] rounded-sm"
                type="text"
                placeholder="Your email address"
              />
              <button
                className="h-[60px] bg-[#FCA311] px-5 rounded-sm w-full"
                type="submit"
              >
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

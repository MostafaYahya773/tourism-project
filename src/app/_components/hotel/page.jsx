'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import HotelInfo from '../hotelInfo/page';
export default function Hotel() {
  return (
    <div className="flex flex-col gap-y-5">
      <HotelInfo />
      <button className="w-full bg-[#00234D] text-center text-white rounded-md py-3">
        Show More Result
      </button>
    </div>
  );
}

'use client';
import React, { useEffect, useState } from 'react';

export default function ToUp() {
  return (
    <button
      onClick={() => window.scrollTo(0, 0)}
      className="w-[35px] h-[35px] rounded-full flex justify-center bg-white toUpShadow items-center fixed z-[99999] bottom-5 right-4"
    >
      <i className="fa-solid fa-chevron-up font-bold"></i>
    </button>
  );
}

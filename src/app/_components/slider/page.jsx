'use client';
import React from 'react';
import dynamic from 'next/dynamic';

const SlickSlider = dynamic(() => import('react-slick'), {
  ssr: false,
});

export default function CustomSlider({ children, className, ...settings }) {
    
  return (
    <SlickSlider {...settings} className={className}>
      {children}
    </SlickSlider>
  );
}

'use client';
import { addCard } from '@/app/context/showcart';
import React, { useContext, useState } from 'react';
import AddNewCard from '../addNewCard/page';

export default function PaymentMethoud() {
  // use context
  let { isAddCard, setIsAddCard } = useContext(addCard);
  //payment type
  const [payment, setPayment] = useState({
    cardNumber: '1234567893256489',
    type: 'visa',
    date: '02 / 27',
  });
  return (
    <div className="flex gap-x-3 overflow-auto">
      <div className="card  min-w-[378px]  bg-[#FCA311] h-[212px] p-3 rounded-lg text-white flex flex-col justify-between">
        <div className="cardNumber flex justify-between items-start">
          <div className="number flex flex-col gap-y-0">
            <span className="text-[16px] md:text-[25px] lg:text-[30px]">
              **** **** ****
            </span>
            <p className="text-[16px] md:text-[25px] lg:text-[30px] font-semibold md:-mt-4">
              {payment.cardNumber.slice(-4)}
            </p>
          </div>
          <button className="mt-2">delete</button>
        </div>
        <div className="flex justify-between items-center">
          <div className="end flex flex-col gap-y-2">
            <p className="text-[12px] md:text-[20px] font-medium">Valid Thru</p>
            <p className="text-[16px] md:text-[20px] font-semibold -mt-2">
              {payment?.date}
            </p>
          </div>
          <div className="visa bg-white w-[52px] h-[32px] flex justify-center items-center rounded-sm text-[#FCA311] font-bold">
            Visa
          </div>
        </div>
      </div>
      <button
        onClick={() => setIsAddCard(true)}
        className="addCard  min-w-[378px] h-[212px] border-2 border-dotted border-[#00234D] rounded-md"
      >
        <span className="text-[40px]">+</span>
        <p className="font-semibold">Add New Card</p>
      </button>
      <div>
        <AddNewCard />
      </div>
    </div>
  );
}

'use client';
import React, { useContext, useState } from 'react';
import AddNewCard from '../addNewCard/page';
import { addCard } from '@/app/context/showcart';
export default function PaymentOption() {
  // hide and show add card component
  let { isAddCard, setIsAddCard } = useContext(addCard);

  //payment type
  const [paymentType, setPaymentType] = useState([
    {
      type: 'Pay in full',
      CardName: 'Mostafa yahya',
      name: 'payment1',
      cardNumber: '1234567893256489',
      id: 0,
    },
  ]);
  // check select
  let [selectedId, setSelectedId] = useState(0);

  return (
    <div className="payment">
      <div className="flex flex-col  gap-y-3 payment-shadow p-3 rounded-md">
        <div className="paymentOption">
          {paymentType?.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedId(item.id)}
              className={`${
                item?.id === selectedId ? 'bg-[#FCA311] ' : ''
              } fullpay flex justify-between items-center md:p-5 p-2 rounded-md gap-5`}
            >
              <label
                className="w-full flex flex-col gap-y-1"
                htmlFor={item?.id}
              >
                <h1 className="font-bold">{item.CardName}</h1>
                <div className="font-normal text-[10px] md:text-[14px] flex gap-x-1 items-center">
                  <span className="mt-2 text-[20px]">**** **** ****</span>
                  <p className="text-[14px] font-bold">
                    {item?.cardNumber.slice(-4)}
                  </p>
                </div>
              </label>
              <input
                id={item?.id}
                name={item.name}
                checked={selectedId === item.id}
                onChange={() => setSelectedId(item.id)}
                type="radio"
              />
            </div>
          ))}
        </div>
        <button
          onClick={() => setIsAddCard(true)}
          className="border border-dotted border-black h-fit py-3 rounded-md"
        >
          <span className="text-[40px]">+</span>
          <p className="font-semibold">Add New Card</p>
        </button>
      </div>
      <div className="overflow-auto">
        <AddNewCard />
      </div>
    </div>
  );
}

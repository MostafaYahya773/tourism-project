'use client';
import React, { useContext } from 'react';
import { contextProvider } from '@/app/context/contextProvider';
export default function AddNewCard() {
  // hide and show add card component
  const { isAddCard, setIsAddCard } = useContext(contextProvider);
  return (
    <div
      className={`fixed flex justify-center items-center bg-[#0000008c] z-[10000000] w-full h-screen top-0 right-0 left-0 ${
        isAddCard ? 'block' : 'hidden'
      }`}
    >
      <div className="form">
        <form>
          <div className="max-w-[700px] h-fit bg-white rounded-md flex flex-col gap-y-5 p-5 mx-7">
            <div className="title__hide flex justify-between items-center">
              <h1 className=" text-[18px] md:text-[20px] lg:text-[25px] font-semibold">
                Add a new Card
              </h1>
              <span
                onClick={() => setIsAddCard(false)}
                className="text-[30px] rotate-[45deg] cursor-pointer"
              >
                +
              </span>
            </div>

            <div className="cardNum flex flex-col relative">
              <label
                htmlFor="cardnum"
                className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
              >
                Card Number
              </label>
              <input
                className="border outline-none text-black border-[#79747E] rounded-md  h-[50px] px-2"
                type="number"
                id="cardnum"
                placeholder="Enter Your Card Number"
                required
              />
            </div>
            <div className="exp_cvv grid grid-cols-1 lg:grid-cols-2 gap-5 ">
              <div className="exp relative ">
                <label
                  htmlFor="exp"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Exp. Date
                </label>
                <input
                  className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2 w-full"
                  type="text"
                  id="exp"
                  placeholder="Enter Your Exp Date"
                  maxLength={4}
                  pattern="^\d{3,4}$"
                  inputMode="numeric"
                  required
                />
              </div>
              <div className="cvv relative">
                <label
                  htmlFor="lname"
                  className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
                >
                  Cvv
                </label>
                <input
                  className="border outline-none text-black border-[#79747E] rounded-md h-[50px] px-2  w-full"
                  type="text"
                  id="exp"
                  placeholder="Enter Your cvv"
                  maxLength={3}
                  pattern="^\d{3,4}$"
                  inputMode="numeric"
                  required
                />
              </div>
            </div>
            <div className="cardName flex flex-col relative">
              <label
                htmlFor="cardname"
                className="absolute font-normal text-[14px] text-[#00234D] bg-white left-2 -top-[9px] px-1 "
              >
                Card Name
              </label>
              <input
                className="border outline-none text-black border-[#79747E] rounded-md  h-[50px] px-2"
                type="text"
                id="cardname"
                placeholder="Enter Your Card Name"
                required
                maxLength={30}
              />
            </div>
            <div className="remember text-[#5D0207] flex gap-x-1">
              <input type="checkbox" className="cursor-pointer" id="rem" />
              <label
                htmlFor="rem"
                className="cursor-pointer text-[12px] md:text-[14px]  font-normal"
              >
                Securely save my information for 1-click checkout
              </label>
            </div>
            <button
              className="bg-[#00234D] mt-5 text-white md:text-[18px] py-3 rounded-sm"
              type="submit"
            >
              Add Card
            </button>
            <p className="text-[#5D0207] text-[12px] text-center font-normal">
              By confirming your subscription, you allow The Outdoor Inn Crowd
              Limited to charge your card for this payment and future payments
              in accordance with their terms. You can always cancel your
              subscription.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

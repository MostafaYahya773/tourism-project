'use client';
import React, { useContext, useEffect, useState } from 'react';
import AccountSetting from '../_components/account/page';
import PaymentMethoud from '../_components/paymentMethoud/page';
import UseAccount from '../hook/(auth)/useAccount';
import ChangeInfo from '../_components/ChangeInfo/page';
import { contextProvider } from '../context/contextProvider';
import UseImage from '../hook/useImage';

export default function AccountLayout() {
  // show and hide topic
  const { setshowChangeTopic } = useContext(contextProvider);

  let { mutate } = UseImage();

  //handle change page

  const handleChangePage = (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append('profileImage', file);
    mutate(formData);
  };

  // change page
  let [changePage, setChangePage] = useState('Account');
  // favourate department
  const [depart, setDepart] = useState([
    {
      name: 'Account',
    },
    {
      name: 'Payment Methouds',
    },
  ]);
  let [account, setAccount] = useState({
    img: 'TURISM-AIG-WEB-PIC/aswan-egy.jpg',
  });
  // get data from api
  let { data, isLoading } = UseAccount();
  //check data
  if (!data) return;
  return (
    <div className="flex flex-col md:gap-y-48 gap-y-0 mx-auto relative mb-36">
      <div className=" h-[580px] md:h-[480px] ">
        <div
          className="top bg-cover bg-center  h-[350px] md:h-[480px]   flex justify-center items-end relative "
          style={{
            backgroundImage: 'url("/TURISM-AIG-WEB-PIC/mainpage1.jpg")',
          }}
        >
          <div className="img_gmail flex flex-col gap-3 absolute -bottom-36">
            <div className="img relative">
              <div className=" icon absolute bottom-0 right-3 bg-[#FF8682] w-[45px] h-[45px] flex justify-center items-center rounded-full">
                <label htmlFor="file">
                  <i className="fa-solid cursor-pointer fa-user-pen text-[20px] ms-2"></i>
                </label>
                <input
                  type="file"
                  id="file"
                  className="hidden "
                  onChange={handleChangePage}
                />
              </div>
              <img
                className="md:w-[200px] md:h-[200px] w-[150px] h-[150px] rounded-full mx-auto border-[#FF8682] border-2"
                src={data?.user?.profileImage || account?.img}
                alt="account img"
              />
            </div>
            <div className="flex flex-col gap-y-0">
              <h1 className="name  text-center md:text-[24px] font-semibold">
                {data?.data?.name}
              </h1>
              <p className="gmail text-center opacity-75 text-[14px]">
                {data?.data?.email}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-y-7 mx-auto w-[95%]">
        <div className="departments grid grid-cols-2 gap-4">
          {depart?.map((depart, index) => (
            <div
              onClick={() => {
                setChangePage(depart?.name);
              }}
              key={index}
              className={`${
                changePage === depart.name && 'border-[#FCA311]'
              } border-b-4  p-3 shadow-lg text-[#00234D] cursor-pointer`}
            >
              <h1 className="font-semibold text-[12px] md:text-[18px]">
                {depart.name}
              </h1>
            </div>
          ))}
        </div>

        <div className="showresult mb-[100px]">
          {changePage === 'Account' && <AccountSetting data={data?.data} />}
          {changePage === 'Payment Methouds' && <PaymentMethoud />}
        </div>
      </div>
      <ChangeInfo />
    </div>
  );
}

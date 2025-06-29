'use client';
import React from 'react';
import { createContext, useState } from 'react';
import { boolean } from 'yup';
export let contextProvider = createContext();
export default function ShowCartProvider(props) {
  // is add card or not
  let [isAddCard, setIsAddCard] = useState(false);
  // updte sign up tocken
  let [tokenValue, setTokenValue] = useState(null);
  // change Topic
  const [showChangeTopic, setshowChangeTopic] = useState({
    boolean: true,
    type: null,
    name: null,
  });
  // load animations
  const [isloading, setIsLoading] = useState(false);
  //save forget email
  const [forgetEmail, setForgetEmail] = useState(null);
  //save code send to my email
  const [code, setCode] = useState(null);
  //favourate places count
  const [favourateCount, setFavourateCount] = useState(null);
  return (
    <>
      <contextProvider.Provider
        value={{
          isAddCard,
          setIsAddCard,
          tokenValue,
          setTokenValue,
          showChangeTopic,
          setshowChangeTopic,
          isloading,
          setIsLoading,
          forgetEmail,
          setForgetEmail,
          code,
          setCode,
          favourateCount,
          setFavourateCount,
        }}
      >
        {props.children}
      </contextProvider.Provider>
    </>
  );
}

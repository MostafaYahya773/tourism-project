'use client';
import React from 'react';
import { createContext, useState } from 'react';
export let addCard = createContext();
export default function ShowCartProvider(props) {
  // is add card or not
  let [isAddCard, setIsAddCard] = useState(false);
  return (
    <>
      <addCard.Provider value={{ isAddCard, setIsAddCard }}>
        {props.children}
      </addCard.Provider>
    </>
  );
}

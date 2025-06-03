'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

export default function UseWether() {
  // create the function to use fetch
  const getData = async () => {
    return await axios
      .get(
        'https://api.weatherapi.com/v1/current.json?key=20fa392ce0fa402c9b4203041251202&q=cairo'
      )
      .then((response) => response)
      .catch((reject) => reject);
  };
  const data = useQuery({
    queryKey: ['wether'],
    queryFn: getData,
    select: (data) => data.data,
  });
  return data;
}

'use client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';

export default function UseGetFavourate() {
  let queryQlient = useQueryClient();
  // create the function to use fetch
  const getData = () => {
    return axios
      .get('https://tourism-api-u2as.onrender.com/api/favorites', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        console.log(response);
        return response;
      })
      .catch((reject) => {
        console.log(reject);
        return reject;
      });
  };
  const data = useQuery({
    queryKey: ['favourite'],
    queryFn: getData,
    select: (data) => data.data,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
  return data;
}

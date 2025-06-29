'use client';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function UseHotel(endpoint, type, id = '') {
  const getData = () => {
    const url = id
      ? `https://tourism-api-u2as.onrender.com/api/${endpoint}/${id}`
      : `https://tourism-api-u2as.onrender.com/api/search/${endpoint}?type=${type}`;
    return axios
      .get(url)
      .then((response) => {
        return response;
      })
      .catch((reject) => {
        throw reject;
      });
  };

  let data = useQuery({
    queryKey: ['getHotel', endpoint, id],
    queryFn: getData,
    select: (data) => data.data,
  });

  return data;
}

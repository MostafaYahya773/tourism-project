'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseContact() {
  const getData = (userData) => {
    return axios
      .post('https://tourism-api-u2as.onrender.com/api/contact', userData, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      })
      .then((response) => {
        return response;
      })
      .catch((reject) => {
        throw reject;
      });
  };

  let data = useMutation({
    mutationKey: ['contact'],
    mutationFn: getData,
  });

  return data;
}

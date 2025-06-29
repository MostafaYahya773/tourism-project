'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseVerify() {
  const getData = (userData) => {
    return axios
      .post(
        'https://tourism-api-u2as.onrender.com/api/auth/verify-code',
        userData
      )
      .then((response) => {
        return response;
      })
      .catch((reject) => {
        throw reject;
      });
  };

  let data = useMutation({
    mutationKey: ['verify'],
    mutationFn: getData,
  });

  return data;
}

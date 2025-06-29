'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseForget() {
  const getData = (userData) => {
    return axios
      .post(
        'https://tourism-api-u2as.onrender.com/api/auth/forgot-password',
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
    mutationKey: ['forget'],
    mutationFn: getData,
  });

  return data;
}

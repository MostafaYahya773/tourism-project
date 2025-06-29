'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseLogin() {
  const getData = (userData) => {
    return axios
      .post('https://tourism-api-u2as.onrender.com/api/auth/login', userData)
      .then((response) => {
        //set token to local storage
        localStorage.setItem('token', response?.data?.token);
        // return response to use it in error
        return response;
      })
      .catch((reject) => {
        throw reject;
      });
  };

  let data = useMutation({
    mutationKey: ['login'],
    mutationFn: getData,
  });

  return data;
}

'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
export default function UseRegister() {
  const queryClient = useQueryClient();
  const getData = (userData) => {
    return axios
      .post('https://tourism-api-u2as.onrender.com/api/auth/register', userData)
      .then((response) => {
        //save token to local storage
        localStorage.setItem('token', response?.data?.token);
        return response;
      })
      .catch((reject) => {
        throw reject;
      });
  };

  let data = useMutation({
    mutationKey: ['register'],
    mutationFn: getData,
  });

  return data;
}

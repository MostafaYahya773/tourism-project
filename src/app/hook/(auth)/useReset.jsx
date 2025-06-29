'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseReset() {
  const queryClient = useQueryClient();
  const getData = (userData) => {
    return axios
      .post(
        'https://tourism-api-u2as.onrender.com/api/auth/reset-password',
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
    mutationKey: ['reset-password'],
    mutationFn: getData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] });
    },
  });

  return data;
}

'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseEdit() {
  const queryClient = useQueryClient();
  const getData = (userData) => {
    return (
      axios
        .put(
          'https://tourism-api-u2as.onrender.com/api/user/profile',
          userData,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        // return response to use it in error
        .then((response) => {
          return response;
        })
        .catch((reject) => {
          throw reject;
        })
    );
  };

  let data = useMutation({
    mutationKey: ['account'],
    mutationFn: getData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] });
    },
  });
  return data;
}

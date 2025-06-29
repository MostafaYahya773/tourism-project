'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseImage() {
  const queryClient = useQueryClient();
  const getData = (userData) => {
    return (
      axios
        .post(
          'https://tourism-api-u2as.onrender.com/api/user/upload-image',
          userData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
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
    mutationKey: ['upload-image'],
    mutationFn: getData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['account'] });
    },
  });
  return data;
}

'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseDelete() {
  let queryQlient = useQueryClient();
  const getData = (hotelId) => {
    //check if hotel id send or not
    if (!hotelId) return;

    return (
      axios
        .delete(
          `https://tourism-api-u2as.onrender.com/api/favorites/${hotelId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('token')}`,
            },
          }
        )
        // return response to use it in error
        .then((response) => {
          console.log(response);
          return response;
        })
        .catch((reject) => {
          console.log(reject);
          throw reject;
        })
    );
  };

  let data = useMutation({
    mutationKey: ['delete'],
    mutationFn: getData,
    refetchOnMount: true,
    onSuccess: () => {
      queryQlient.invalidateQueries({ queryKey: ['favourite'] });
    },
  });
  return data;
}

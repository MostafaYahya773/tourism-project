'use client';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseFavourate() {
  let queryQlient = useQueryClient();
  const getData = (hotelId) => {
    //check if hotel id send or not
    if (!hotelId) return;
    return (
      axios
        .post(
          'https://tourism-api-u2as.onrender.com/api/favorites',
          { hotelId },
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
    mutationKey: ['add-to-favourate'],
    mutationFn: getData,
    onSuccess: () => {
      queryQlient.invalidateQueries({ queryKey: ['favourite'] });
    },
  });
  return data;
}

'use client';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export default function UseAccount() {
  const getData = () => {
    return (
      axios
        .get(`https://tourism-api-u2as.onrender.com/api/user/profile `, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        })
        // return response to use it in error
        .then((response) => {
          return response;
        })
        .catch((reject) => {
          throw reject;
        })
    );
  };

  let data = useQuery({
    queryKey: ['account'],
    queryFn: getData,
  });
  return data;
}

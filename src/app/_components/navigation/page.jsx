'use client';
import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../navbar/page';
import NavbarW from '../navbarw/page';
import { contextProvider } from '@/app/context/contextProvider';

export default function Navigation() {
  let { tokenValue, setTokenValue } = useContext(contextProvider);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getToken = localStorage.getItem('token');
    if (getToken) {
      setTokenValue(getToken);
    }
    setLoading(false);
  }, []);
  if (loading) return null;
  return <>{tokenValue ? <Navbar /> : <NavbarW />}</>;
}

'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Navbar from './Navbar';

export default function LayoutClient({ children }) {
  const pathname = usePathname();
  const shouldHideNavbar = ['/', '/Login', '/Register'].includes(pathname);

  return (
    <>
      {!shouldHideNavbar && <Navbar />}
      {children}
    </>
  );
}
<<<<<<< HEAD
'use client';

import { NAV_ITEMS } from '@/lib/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavItems = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';

    return pathname.startsWith(path);
  };

=======
'use client'

import { NAV_ITEMS } from '@/lib/constants'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavItems = () => {
  const pathname = usePathname()
  
  const isActive = (path: string) => {
    if (path === '/') return (pathname === '/')

    return pathname.startsWith(path)
  }
  
>>>>>>> 92c5a0bf6d4db08dec68fdb76d13e1d3f4a89c47
  return (
    <ul className='flex flex-col sm:flex-row p-2 gap-3 sm:gap-10 font-medium'>
      {NAV_ITEMS.map((item: NAV_ITEMS) => (
        <li key={item.href}>
<<<<<<< HEAD
          <Link
            href={item.href}
            className={`hover:text-yellow-500 transition-colors ${
              isActive(item.href) ? 'text-gray-100' : ''
            }`}
          >
=======
          <Link href={item.href} className={`hover:text-yellow-500 transition-colors ${isActive(item.href)? 'text-gray-100': ''}`}>
>>>>>>> 92c5a0bf6d4db08dec68fdb76d13e1d3f4a89c47
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
<<<<<<< HEAD
  );
};

export default NavItems;
=======
  )
}

export default NavItems
>>>>>>> 92c5a0bf6d4db08dec68fdb76d13e1d3f4a89c47

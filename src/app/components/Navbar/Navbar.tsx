import React from 'react';
import style from './Navbar.module.css';
import SearchReportIcon from '@/svgs/SearchReportIcon.svg';
import AddReportIcon from '@/svgs/AddReportIcon.svg';
import HomeIcon from '@/svgs/HomeIcon.svg';
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <HomeIcon />
      </Link>
      <button type='button'>
        Informes
        <SearchReportIcon />
      </button>
      <button type='button'>
        Agregar Informes
        <AddReportIcon  />
      </button>
    </nav>
  )
}

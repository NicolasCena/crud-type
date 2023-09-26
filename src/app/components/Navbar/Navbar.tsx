import React from 'react';
import styles from './Navbar.module.css';
import SearchReportIcon from '@/svgs/SearchReportIcon.svg';
import AddReportIcon from '@/svgs/AddReportIcon.svg';
import HomeIcon from '@/svgs/HomeIcon.svg';
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/" className={`${styles.link} openSansBold`}>
        <HomeIcon />
      </Link>
      <Link href="/informes" className={`${styles.link} openSansBold`}>
        <SearchReportIcon />
        Informes
      </Link>
      <Link href="/new" className={`${styles.link} openSansBold`}>
        <AddReportIcon  />
        Agregar Informes
      </Link>
    </nav>
  )
}

'use client'
import React, { useState } from 'react'
import styles from './ReportBox.module.css';
import { Report } from './ReportBox.type';
import ChevronIcon from '@/svgs/ChevronIcon.svg';

interface Props {
  report: Report | null;
  orden: number
}

export const ReportBox = ({ report, orden }: Props) => {

  const [ isCollapse, setIsCollapse ] = useState(false)

  return (
    <div className={ styles.report }>
      <div className={styles.firstBlock}>
        <p>{orden}</p>
        <p>{report?.title}</p>
        <p>{report?.createdAt}</p>
        <p></p>
        <button onClick={() => setIsCollapse(!isCollapse)} className={styles.verDetalle}>
          <p className={styles.text}>Ver detalle</p>
          <ChevronIcon className={styles.icon} />
        </button>
      </div>
      <div className={`${styles.secondBlock} ${isCollapse ? styles.active : styles.noActive }`}>
        <div className={styles.description}>
          <p>Descripción</p>
          <p>{report?.description}</p>
        </div>
      </div>
    </div>
  )
}

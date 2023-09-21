'use client'
import React, { useState } from 'react'
import styles from './ReportBox.module.css';
import { Report } from './ReportBox.type';
import ChevronIcon from '@/svgs/ChevronIcon.svg';

interface Props {
  report: Report | null;
}

export const ReportBox = ({ report }: Props) => {

  const [ isCollapse, setIsCollapse ] = useState(false)
  return (
    <div className={ styles.pepe }>
      <div>
        <p>{report?.title}</p>
        <p>{report?.initDate}</p>
        <div>
          <p>Ver detalle</p>
          <ChevronIcon />
        </div>
      </div>
      <div >
        <p></p>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  )
}

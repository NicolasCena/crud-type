'use client'
import { useEffect, useMemo } from 'react';
import { ReportBox } from "./components/ReportBox/ReportBox";
import axios from "axios";
import { URL_BASE } from "./utils/constants";
import AddReportIcon from '@/svgs/AddReportIcon.svg';
import SearchReportIcon from '@/svgs/SearchReportIcon.svg';
import { Box } from './components/Box/Box';

export default function Home() {

  const Boxes = [
    {icon: <AddReportIcon />, title: 'Agregar informe', link: '/new', id: 1 },
    {icon: <SearchReportIcon />, title: 'Ver informes', link: '/informes', id: 2 },
  ]

  const getReports = async () => {
    try {
      const response = await axios.get(`${URL_BASE}/api/report`)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReports()
  }, [])
  

  return (
    <>
      <main>
        <ReportBox report={null} />
        {
          Boxes.map( item => {
            return <Box key={item.id} title={item.title} icon={item.icon} link={item.link} />
          })
        }
      </main>
    </>
  );
}

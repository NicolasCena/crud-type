'use client'
import { useEffect, useMemo, useRef } from 'react';
import AnimatedCanvas from "./components/AnimatedCanvas"; // Ajusta la ruta según la ubicación de tu componente
import AddReportIcon from '@/svgs/AddReportIcon.svg';
import SearchReportIcon from '@/svgs/SearchReportIcon.svg';
import { Box } from './components/Box/Box';

export default function Home() {
  const canvasRef = useRef(null);

  const Boxes = [
    { icon: <AddReportIcon />, title: 'Agregar informe', link: '/new', id: 1 },
    { icon: <SearchReportIcon />, title: 'Ver informes', link: '/informes', id: 2 },
  ];

  // ...

  return (
    <>
      <header>
        <AnimatedCanvas />
        <h1>Informes personales</h1>
      </header>
      <main>
        {
          Boxes.map( (item, index) => {
            return <Box 
                    key={item.id} 
                    title={item.title} 
                    icon={item.icon} 
                    link={item.link} 
                  />
          })
        }
      </main>
    </>
  );
}

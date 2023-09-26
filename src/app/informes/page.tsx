"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../utils/constants";
import { ReportBox } from "../components/ReportBox/ReportBox";
import styles from './Informes.module.css';
import { Navbar } from "../components/Navbar/Navbar";

const page = () => {
  const [reports, setReports] = useState([]);

  const getReports = async () => {
    try {
      const response = await axios.get(`${URL_BASE}/api/report`);
      setReports(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getReports();
  }, []);

  return (
    <div>
      <Navbar />
      <div className={styles.reports}>
        <div>Número</div>
        <div>Título</div>
        <div>Fecha del documento</div>
        <div>Opciones</div>
        <div></div>
      </div>
      <div>
        {reports.map((item, index) => {
          return <ReportBox report={item} orden={index + 1} />;
        })}
      </div>
    </div>
  );
};

export default page;

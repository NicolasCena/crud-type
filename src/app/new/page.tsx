"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { Navbar } from "../components/Navbar/Navbar";
import styles from "./new.module.css";
import axios from "axios";
import { URL_BASE } from "../utils/constants";

const page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit(async data => {
      const res = await axios.post(`${URL_BASE}/api/report`, data)
      console.log(res);
  });

  return (
    <>
      <Navbar />
      <form onSubmit={onSubmit} className={styles.form}>
        <div className={styles.box}>
          <p className={styles.title}>Titulo</p>
          <p>Máximo 20 letras</p>
          <input
            {...register("title", { required: true, maxLength: 20 })}
            className={styles.input}
          />
          { errors.title && <span>Este campo es requerido</span>}
        </div>

        <div className={styles.box}>
          <p className={styles.title}>Descripción</p>
          <textarea
            {...register("description", { required: true, maxLength: 100 })}
            className={styles.input}
          />
          {errors.description && (
            <span className={`${styles.messageError} openSansBold`}>
              Debes colocar una descripcion
            </span>
          )}
        </div>

        <button type="submit" className={`${styles.submit} openSansBold`}>
          Agregar informe
        </button>
      </form>
    </>
  );
};

export default page;

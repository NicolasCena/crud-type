import React from "react";
import Link from "next/link";
import style from "./Box.module.css";

type Props = {
  icon: JSX.Element;
  title: string;
  link: string;
};

export const Box = ({ icon, title, link }: Props) => {
  return (
    <div className={style.box}>
      <Link href={link} className={style.enlace}>
        <div className={style.icon}>{icon}</div>
        <h2 className={style.title}>{title}</h2>
      </Link>
    </div>
  );
};

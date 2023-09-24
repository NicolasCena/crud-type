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
    <div className="box">
      <Link href={link}>
        {icon}
        <h2>{title}</h2>
      </Link>
    </div>
  );
};

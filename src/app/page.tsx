import Image from "next/image";
import HomeIcon from "@/svgs/HomeIcon.svg";
import { ReportBox } from "./components/ReportBox/ReportBox";

export default function Home() {
  return (
    <div className="foo">
      <h1 className="bar">hola</h1>
      <ReportBox report={null} />
      <HomeIcon />
    </div>
  );
}

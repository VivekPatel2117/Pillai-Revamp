import React from "react";
import PageHead from "../components/PageHead/page";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <PageHead tab={"Programs"}/>
      <div className="bg-BlueDark content h-screen flex flex-col items-center justify-center text-white">
        {/* Row 1 */}
        <div className="flex justify-center gap-8 w-10/12 mb-8">
          <div className="box h-32 w-1/3 flex justify-center items-center ">
            <Link href={"/Programs/BCom"}>B.Com</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">
            <Link href={"/Programs/BCom.Af"}>B.Com.A.F</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">
            <Link href={"/Programs/BCom.Fm"}>B.Com.F.M</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">
            <Link href={"/Programs/BBA-Honors"}>BBA-Honors</Link>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-8 w-10/12 mb-8">
          <div className="box h-32 w-1/3 flex justify-center text-center items-center ">
            <Link href={"/Programs/Bsc.IT"}>BSc.IT</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">
            <Link href={"/Programs/Bsc.CS"}>Bsc.CS</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">
            <Link href={"/Programs/Bsc.Eco"}>Bsc.Economics</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">
            <Link href={"/Programs/BCA"}>BCA</Link>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-center gap-8 w-10/12">
          <div className="box h-32 w-1/3 flex justify-center text-center items-center ">
            <Link href={"/Programs/Bammc"}>B.A.M.M.C</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center rounded-lg"><Link href={"/Programs/BBA-DM"}>BBA Digital Marketing</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center rounded-lg">
            <Link href={"/Programs/BMS"}>BMS</Link>
          </div>
          <div className="box h-32 w-1/3 flex justify-center items-center rounded-lg">
            <Link href={"/Programs/BBA-FDT"}>
              BBA Fashion Design & Technology
            </Link>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

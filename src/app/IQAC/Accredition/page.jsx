import React from "react";
import PageHead from "../../components/PageHead/page";
import Link from "next/link";
export default function Page() {
  return (
    <div>
      <PageHead tab={"IQAC"} nestedTab={"Accredition"} />
      <div className="bg-mapBg content h-screen flex flex-col items-center justify-center">
        {/* Row 1 */}
        <div className="flex justify-center gap-8 w-10/12 mb-8">
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg">
          <Link href={"/IQAC/Accredition/NIRF-Report"}>
          NIRF Report
          </Link>
          </div>
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg"><Link href={"/IQAC/Accredition/ISO-Report"}>ISO Report
          </Link></div>
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg"><Link href={"/IQAC/Accredition/NAAC-Visit"}>NAAC Visits</Link></div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-8 w-10/12 mb-8">
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center text-center items-center rounded-lg"><Link href={"/IQAC/Accredition/NAAC-Reaccrediation"}>NAAC Reaccreditation Report</Link></div>
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg"><Link href={"/IQAC/Accredition/Academic-Audit"}>Academic Audit</Link></div>
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg"><Link href={"/IQAC/Accredition/Annexures"}>Annexures</Link></div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-center gap-8 w-10/12">
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center text-center items-center rounded-lg"><Link href={"/IQAC/Accredition/Addendum-Self-Study-Report"}>Addendum Self Study Report</Link></div>
        </div>
      </div>
    </div>
  );
}

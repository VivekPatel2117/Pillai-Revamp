import React from "react";
import PageHead from "../../components/PageHead/page";

export default function Page() {
  return (
    <div>
      <PageHead tab={"IQAC"} nestedTab={"Accreditation"} />
      <div className="bg-mapBg content h-screen flex flex-col items-center justify-center">
        {/* Row 1 */}
        <div className="flex justify-center gap-8 w-10/12 mb-8">
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg">NIRF Report</div>
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg">ISO Report</div>
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg">NAAC Visits</div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-8 w-10/12 mb-8">
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center text-center items-center rounded-lg">NAAC Reaccreditation Report</div>
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg">Academic Audit</div>
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center items-center rounded-lg">Annexures</div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-center gap-8 w-10/12">
          <div className="box bg-beigeLight h-32 w-1/3 flex justify-center text-center items-center rounded-lg">Addendum Self Study Report</div>
        </div>
      </div>
    </div>
  );
}

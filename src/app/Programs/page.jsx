import React from "react";
import PageHead from "../components/PageHead/page";

export default function Page() {
  return (
    <div>
      <PageHead tab={"Programs"} nestedTab={""} />
      <div className="bg-BlueDark content h-screen flex flex-col items-center justify-center text-white">
        {/* Row 1 */}
        <div className="flex justify-center gap-8 w-10/12 mb-8">
          <div className="box h-32 w-1/3 flex justify-center items-center ">B.Com</div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">B.Com.A.F</div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">B.Com.F.M</div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">BBA Honors</div> 
        </div>

        {/* Row 2 */}
        <div className="flex justify-center gap-8 w-10/12 mb-8">
          <div className="box h-32 w-1/3 flex justify-center text-center items-center ">Bsc.IT</div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">Bsc.CS</div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">Bsc.Economics</div>
          <div className="box h-32 w-1/3 flex justify-center items-center ">BCA</div>    
        </div>

        {/* Row 3 */}
        <div className="flex justify-center gap-8 w-10/12">
          <div className="box h-32 w-1/3 flex justify-center text-center items-center ">B.A.M.M.C</div>
          <div className="box h-32 w-1/3 flex justify-center items-center rounded-lg">BBA Digital Marketing</div>
          <div className="box h-32 w-1/3 flex justify-center items-center rounded-lg">BMS</div>
          <div className="box h-32 w-1/3 flex justify-center items-center rounded-lg">BBA Fashion Design & Technology</div>
        </div>
      </div>
    </div>
  );
}

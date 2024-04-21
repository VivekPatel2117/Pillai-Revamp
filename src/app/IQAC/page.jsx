// import React from "react";
// import { RiSurveyLine } from "react-icons/ri";
// import { MdOutlinePendingActions } from "react-icons/md";
// import { AiOutlineAudit } from "react-icons/ai";
// import { BiSolidInstitution } from "react-icons/bi";
// import { FaUserGraduate } from "react-icons/fa6";
// import PageHead from '../components/PageHead/page';
// import Link from 'next/link';

// export default function Page() {
//   return (
//     <>
//      <PageHead tab={"IQAC"} />
//       <div className="body w-screen bg-mapBg">
//         <div className="description bg-blue-800 text-white h-40 m-10 rounded-3xl p-8 text-center">
//           <p>
//             IQAC (Internal Quality Assurance Cell) is a crucial internal
//             committee in educational institutions that focuses on ensuring and
//             improving the quality of education and administrative processes. It
//             monitors, evaluates, and enhances teaching methods, curriculum
//             design, infrastructure, and student support services. IQAC plays a
//             key role in accreditation, compliance with standards, continuous
//             improvement, documentation, stakeholder engagement, and fostering a
//             culture of excellence.
//           </p>
//         </div>
//         <div className="options">
//           <div className="bg-beigeLight h-44 m-10 rounded-3xl p-4">
//             <div className="bg-beigeDark content h-full flex justify-evenly items-center">
//               <div className="flex flex-col items-center">
//                 <Link href="/IQAC/StudentSurveyReport">
//                 <RiSurveyLine size={100} />
//                 <p className="text-center">Student Survey <br /> Report</p>
//                 </Link>
//               </div>
//               <div className="flex flex-col items-center">
//                 <Link href={"/IQAC/ActionTakenReport"}>
//                 <MdOutlinePendingActions size={100} />
//                 <p className="text-center">Action Taken <br /> Report</p>
//                 </Link>
//               </div>
//               <div className="flex flex-col items-center">
//                 <Link href={"/IQAC/AuditReport"}>
//                 <AiOutlineAudit size={100} />
//                 <p className="text-center">Audit Report</p>
//                 </Link>
//               </div>
//               <div className="flex flex-col items-center">
//                 <Link href={"/IQAC/BestPractices"}>
//                 <BiSolidInstitution size={100} />
//                 <p className="text-center">Best Practices <br /> of Institution</p>
//                 </Link>
//               </div>
//               <div className="flex flex-col items-center">
//                 <Link href={"/IQAC/VisionandMission"}>
//                 <RiSurveyLine size={100} />
//                 <p className="text-center">Vision & Mission</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//           <div className="bg-beigeLight h-44 m-10 rounded-3xl p-4">
//             <div className="bg-beigeDark content h-full flex justify-evenly items-center">
//               <div className="flex flex-col items-center">
//                 <Link href={"/IQAC/Composition"}>
//                 <RiSurveyLine size={100} />
//                 <p className="text-center">IQAC Composition</p>
//                 </Link>
//               </div>
//               <div className="flex flex-col items-center">
//                 <Link href={"/IQAC/AnnualQualityAssurance"}>
//                 <RiSurveyLine size={100} />
//                 <p className="text-center">Annual Quality
//                 <br /> Assurance</p>
//                 </Link>
//               </div>
//               <div className="flex flex-col items-center">
//                 <Link href={"/IQAC/ProgramSpecific&CourseOutcome"}>
//                 <FaUserGraduate size={100} />
//                 <p className="text-center">Program Specific<br /> & Course Outcome</p>
//                 </Link>
//               </div>
//               <div className="flex flex-col items-center">
//                 <Link href="/IQAC/InstitutionalDistinctiveness">
//                 <RiSurveyLine size={100} />
//                 <p className="text-center">Institutional <br /> Distinctiveness</p>
//                 </Link>
//               </div>
//               <div className="flex flex-col items-center">
//                 <Link href="/IQAC/Accredition">
//                   <RiSurveyLine size={100} />
//                   <p className="text-center">Accredition</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
import React from "react";
import { RiSurveyLine } from "react-icons/ri";
import { MdOutlinePendingActions } from "react-icons/md";
import { AiOutlineAudit } from "react-icons/ai";
import { BiSolidInstitution } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa6";
import PageHead from '../components/PageHead/page';
import Link from 'next/link';

export default function Page() {
  return (
    <>
     <PageHead tab={"IQAC"} />
      <div className="body w-screen bg-mapBg">
        <div className="description bg-blue-800 text-white h-auto md:h-40 m-5 md:m-10 rounded-3xl p-8 text-center">
          <p>
            IQAC (Internal Quality Assurance Cell) is a crucial internal
            committee in educational institutions that focuses on ensuring and
            improving the quality of education and administrative processes. It
            monitors, evaluates, and enhances teaching methods, curriculum
            design, infrastructure, and student support services. IQAC plays a
            key role in accreditation, compliance with standards, continuous
            improvement, documentation, stakeholder engagement, and fostering a
            culture of excellence.
          </p>
        </div>
        <div className="options">
          <div className="bg-beigeLight h-auto md:h-44 m-5 md:m-10 rounded-3xl p-4">
            <div className="bg-beigeDark content h-full flex flex-wrap md:flex-nowrap justify-evenly items-center">
              <div className="flex flex-col items-center">
                <Link href="/IQAC/StudentSurveyReport">
                  <RiSurveyLine size={100} />
                  <p className="text-center">Student Survey <br /> Report</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link href={"/IQAC/ActionTakenReport"}>
                  <MdOutlinePendingActions size={100} />
                  <p className="text-center">Action Taken <br /> Report</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link href={"/IQAC/AuditReport"}>
                  <AiOutlineAudit size={100} />
                  <p className="text-center">Audit Report</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link href={"/IQAC/BestPractices"}>
                  <BiSolidInstitution size={100} />
                  <p className="text-center">Best Practices <br /> of Institution</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link href={"/IQAC/VisionandMission"}>
                  <RiSurveyLine size={100} />
                  <p className="text-center">Vision & Mission</p>
                </Link>
              </div>
            </div>
          </div>
          <div className="bg-beigeLight h-auto md:h-44 m-5 md:m-10 rounded-3xl p-4">
            <div className="bg-beigeDark content h-full flex flex-wrap md:flex-nowrap justify-evenly items-center">
              <div className="flex flex-col items-center">
                <Link href={"/IQAC/Composition"}>
                  <RiSurveyLine size={100} />
                  <p className="text-center">IQAC Composition</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link href={"/IQAC/AnnualQualityAssurance"}>
                  <RiSurveyLine size={100} />
                  <p className="text-center">Annual Quality
                  <br /> Assurance</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link href={"/IQAC/ProgramSpecific&CourseOutcome"}>
                  <FaUserGraduate size={100} />
                  <p className="text-center">Program Specific<br /> & Course Outcome</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link href="/IQAC/InstitutionalDistinctiveness">
                  <RiSurveyLine size={100} />
                  <p className="text-center">Institutional <br /> Distinctiveness</p>
                </Link>
              </div>
              <div className="flex flex-col items-center">
                <Link href="/IQAC/Accredition">
                  <RiSurveyLine size={100} />
                  <p className="text-center">Accreditation</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

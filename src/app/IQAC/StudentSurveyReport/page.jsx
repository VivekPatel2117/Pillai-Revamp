import React from 'react';
import PageHeader from '../../components/PageHead/page';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="body bg-mapBg">
      <PageHeader tab={"IQAC"} nestedTab={"StudentSurveyReport"}/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl p-8 text-center font-bold">Student Survey Report</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="pdf w-full sm:w-9/12 h-full mb-8 sm:mb-0">
            <Link href="https://pcacs.ac.in/wp-content/uploads/2023/04/SSS-2021-22.pdf" target='_blank' className='text-blue-500'>Student Survey Report</Link>
            <embed src="https://pcacs.ac.in/wp-content/uploads/2023/04/SSS-2021-22.pdf" type="application/pdf" width="100%" height="400px" />
          </div>
          <div className="years w-auto sm:w-1/5 sm:ml-8 bg-beigeLight text-center p-8 ">
            <ul>
              <li className="hover:underline cursor-pointer">2021-22</li>
              <li className="hover:underline cursor-pointer">2020-21</li>
              <li className="hover:underline cursor-pointer">2019-20</li>
              <li className="hover:underline cursor-pointer">2018-18</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

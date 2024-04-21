import React from 'react';
import PageHeader from '../../components/PageHead/page';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="body bg-mapBg">
      <PageHeader tab={"IQAC"} nestedTab={"Annual Quality Assurance Report"}/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl p-8 text-center font-bold">Annual Quality Assurance Report</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="pdf w-full sm:w-9/12 h-full mb-8 sm:mb-0">
            <Link href="https://pcacs.ac.in/wp-content/uploads/2022/12/NAAC-AQAR-2021-22.pdf" target='_blank' className='text-blue-500'>view Annual Quality Assurance Report</Link>
            <embed src="https://pcacs.ac.in/wp-content/uploads/2022/12/NAAC-AQAR-2021-22.pdf" type="application/pdf" width="100%" height="600px" />
          </div>
          <div className="years w-full sm:w-1/5 sm:ml-8 bg-beigeLight text-center p-8 text-2xl">
            <ul>
              <li className="hover:underline cursor-pointer">2022-23</li>
              <li className="hover:underline cursor-pointer">2021-22</li>
              <li className="hover:underline cursor-pointer">2020-21</li>
              <li className="hover:underline cursor-pointer">2019-20</li>
              <li className="hover:underline cursor-pointer">2018-19</li>
              <li className="hover:underline cursor-pointer">2017-18</li>
              <li className="hover:underline cursor-pointer">2016-17</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

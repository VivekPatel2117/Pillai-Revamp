import React from 'react';
import PageHeader from '../../components/PageHead/page';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="body bg-mapBg">
      <PageHeader tab={"IQAC"} nestedTab={"Composition"}/>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl p-8 text-center font-bold">IQAC Composition</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="pdf w-full sm:w-9/12 mb-8 sm:mb-0">
            <Link href="https://pcacs.ac.in/wp-content/uploads/2023/04/IQAC-Composition-2022-23.pdf" target='_blank' className='text-blue-500'>IQAC Composition</Link>
            <embed src="https://pcacs.ac.in/wp-content/uploads/2023/04/IQAC-Composition-2022-23.pdf" type="application/pdf" width="100%" height="400px" />
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
              <li className="hover:underline cursor-pointer">2015-16</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

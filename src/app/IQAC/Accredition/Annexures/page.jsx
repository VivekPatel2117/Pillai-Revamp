import React from 'react'
import PageHeader from '../../../components/PageHead/page';
import Link from 'next/link';

export default function page() {
  return (
    <div>
        <PageHeader tab={"IQAC"} nestedTab={"Accredition"} nestedTab2={"Annexures"}/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl p-8 text-center font-bold">Annexures</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="pdf w-full sm:w-9/12 h-full mb-8 sm:mb-0">
            <Link href="https://pcacs.ac.in/wp-content/uploads/2023/04/SSS-2021-22.pdf" target='_blank' className='text-blue-500'>Annexure</Link>
            <embed src="https://pcacs.ac.in/wp-content/uploads/2023/04/SSS-2021-22.pdf" type="application/pdf" width="100%" height="400px" />
          </div>
          <div className="years w-auto sm:w-1/5 sm:ml-8 bg-beigeLight text-center p-8 ">
            <ul>
              <li className="hover:underline cursor-pointer">2017-18</li>
              <li className="hover:underline cursor-pointer">2015-16</li>
              <li className="hover:underline cursor-pointer">2014-15</li>
              <li className="hover:underline cursor-pointer">2013-14</li>
              <li className="hover:underline cursor-pointer">2012-13</li>
              <li className="hover:underline cursor-pointer">2011-12</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

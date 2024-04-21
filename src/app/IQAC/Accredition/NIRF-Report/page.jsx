import React from 'react'
import PageHead from '../../../components/PageHead/page';
import Link from 'next/link';
export default function page() {
  return (
    <div>
        <PageHead tab={"IQAC"} nestedTab={"Accredition"} nestedTab2={"NIRF-Report"}/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl p-8 text-center font-bold">NIRF Report</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="pdf w-full sm:w-9/12 h-full mb-8 sm:mb-0">
            <Link href="https://pcacs.ac.in/wp-content/uploads/2024/02/NIRF-2024-College.pdf" target='_blank' className='text-blue-500'>NIRF Report</Link>
            <embed src="https://pcacs.ac.in/wp-content/uploads/2024/02/NIRF-2024-College.pdf" type="application/pdf" width="100%" height="400px" />
          </div>
          <div className="years w-auto sm:w-1/5 sm:ml-8 bg-beigeLight text-center p-8 ">
            <ul>
              <li className="hover:underline cursor-pointer">2024</li>
              <li className="hover:underline cursor-pointer">2023</li>
              <li className="hover:underline cursor-pointer">2022</li>
              <li className="hover:underline cursor-pointer">2021</li>
              <li className="hover:underline cursor-pointer">2020</li>
              <li className="hover:underline cursor-pointer">2019</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import PageHeader from '../../../components/PageHead/page';
import Link from 'next/link';
export default function page() {
  return (
    <div>
        <PageHeader tab={"IQAC"} nestedTab={"Accredition"} nestedTab2={"Addendum Self Study Report"}/>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl p-8 text-center font-bold">Addendum Self Study Report</h1>
        <div className="flex flex-col sm:flex-row">
          <div className="pdf w-full sm:w-9/12 h-full mb-8 sm:mb-0">
            <Link href="https://pcacs.ac.in/wp-content/uploads/2023/04/SSS-2021-22.pdf" target='_blank' className='text-blue-500'>Addendum Self Study Report</Link>
            <embed src="https://pcacs.ac.in/wp-content/uploads/2023/04/SSS-2021-22.pdf" type="application/pdf" width="100%" height="400px" />
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import PageHead from '../../components/PageHead/page';
import Link from 'next/link';
export default function page() {
  return (
    <>
    <PageHead
    tab={"IQAC"}
    nestedTab={"Vision and Mission of IQAC"}/>
    <div className="body bg-mapBg">
      <h1 className="text-3xl p-8 text-center font-bold">Vision and Mission of IQAC (2020-2021)</h1>
    <div className="pdf w-9/12 h-full ml-8">
     <Link href="https://pcacs.ac.in/wp-content/uploads/2021/12/strategic-plan.pdf" target='_blank' className='text-blue-500'>view Vision and Mission of IQAC (2020-2021)</Link> 
     <embed src="https://pcacs.ac.in/wp-content/uploads/2021/12/strategic-plan.pdf" type="application/pdf" width="100%" height="400px" />
    </div>
    </div>
    </>
  )
}

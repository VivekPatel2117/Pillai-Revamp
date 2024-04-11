import React from 'react'
import PageHeader from '../../components/PageHead/page';
import Link from 'next/link';
export default function page() {
  return (
    <div>
      <PageHeader tab={"IQAC"} nestedTab={"Composition"}/>
      <div className="body bg-mapBg">
      <h1 className="text-3xl p-8 text-center font-bold">IQAC Composition</h1>
      <div className="content flex">
    <div className="pdf w-9/12 h-full ">
     <Link href="https://pcacs.ac.in/wp-content/uploads/2023/04/IQAC-Composition-2022-23.pdf" target='_blank' className='text-blue-500'>IQAC Composition</Link> 
     <embed src="https://pcacs.ac.in/wp-content/uploads/2023/04/IQAC-Composition-2022-23.pdf" type="application/pdf" width="100%" height="600px" />
    </div>
    <div className="years m-8 bg-beigeLight w-1/5  text-center p-8 text-2xl">
      <ul>
        <li className="hover:underline">2022-23</li><li><br /></li>
        <li className="hover:underline">2021-22</li><li><br /></li>
        <li className="hover:underline">2020-21</li><li><br /></li>
        <li className="hover:underline">2019-20</li><li><br /></li>
        <li className="hover:underline">2018-19</li><li><br /></li>
        <li className="hover:underline">2017-18</li><li><br /></li>
        <li className="hover:underline">2016-17</li><li><br /></li>
        <li className="hover:underline">2015-16</li><li><br /></li>
      </ul>
    </div>
      </div>
    </div>
    </div>
  )
}

"use client"
import React,{useState,useEffect} from 'react'
import PageHead from '../../components/PageHead/page';
import Link from 'next/link';
import Loader from '../../components/Loader/page';
export default function page() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
      const handleLoad = () => {
          setIsLoading(false);
      };

      window.addEventListener('load', handleLoad);

      return () => {
          window.removeEventListener('load', handleLoad);
      };
  }, []);
  return (
    <>
    <PageHead
    tab={"IQAC"}
    nestedTab={"Action Taken Report"}/>
    <div className="body bg-mapBg">
      <h1 className="text-3xl p-8 text-center font-bold">Audit Report (2020-2021)</h1>
      {isLoading ? (
        <Loader/>
      ) : (
    <div className="pdf w-9/12 h-full ml-8">
     <Link href="https://pcacs.ac.in/wp-content/uploads/2021/12/Gender-Audit-Report-2020-21.pdf" target='_blank' className='text-blue-500'>view Audit Report (2020-2021)</Link> 
     <embed src="https://pcacs.ac.in/wp-content/uploads/2021/12/Gender-Audit-Report-2020-21.pdf" type="application/pdf" width="100%" height="400px" />
    </div>
      )}
    </div>
    </>
  )
}

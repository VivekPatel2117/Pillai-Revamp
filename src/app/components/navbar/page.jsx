"use client";
import React,{useState} from 'react'
import Link from 'next/link';
function page() {
    const [isClick, setIsClick] = useState(false);
    const toggleNavbar = ()=>{
        setIsClick(!isClick);
    }
  return (
   
    <>
    <nav className="bg-marronDark">
        <div className="max-m-7xl mx-auto px-4 sm:px-6 lg:px:8">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <Link href="/"><h1 className='text-white p-2'>Pillai</h1></Link>
                    </div>
                </div>
                <div className="hidden text-white md:block">
                    <div className="ml-4 flex items-center space-x-4">
                        <Link href="/IQAC">
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            IQAC
                        </p>
                        </Link>
                        <Link href={"/Programs"}>
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            PROGRAMS
                        </p>
                        </Link>
                        <Link href={"/Admission"}>
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            ADMISSIONS
                        </p>
                        </Link>
                        <Link href="https://sore-pear-parrot-wig.cyclic.app/">
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            COMMUNITY
                        </p>
                        </Link>
                        <Link href={"/Contact"}>
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            CONTACT US
                        </p>
                        </Link>
                        <Link href={"/About"}>
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            ABOUT US
                        </p>
                        </Link>
                    </div>
                </div>
                <div className="md:hidden flex
                 items-center">
                    <button className='inline-flex items-center justify-center p-2 rounded-md  hover: focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white' onClick={toggleNavbar}>
                        {isClick ? (
                            <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            >
                                <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M6 18L18 6M6 6l12 12'
                                />
                            </svg>
                        ):(
                            <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            >
                                <path 
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16m-7 6h7'
                                />
                            </svg>
                        )}

                    </button>
                 </div>
            </div>
        </div>
        {isClick && (
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-2 space-y-1 sm:px-3">
                <Link href="/IQAC">
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            IQAC
                        </p>
                        </Link>
                        <Link href={"/Programs"}>
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            PROGRAMS
                        </p>
                        </Link>
                        <Link href={"/Admission"}>
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            ADMISSIONS
                        </p>
                        </Link>
                        <Link href="https://sore-pear-parrot-wig.cyclic.app/">
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            COMMUNITY
                        </p>
                        </Link>
                        <Link href={"/Contact"}>
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            CONTACT US
                        </p>
                        </Link>
                        <Link href={"/About"}>
                        <p className=" hover:bg-white hover:text-black rounded-lg p-2">
                            ABOUT US
                        </p>
                        </Link>
                </div>
            </div>
        )}
    </nav>
    </>
  )
}

export default page
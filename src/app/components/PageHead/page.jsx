import React from "react";
import Link from 'next/link';
export default function page({tab,nestedTab}) {
  return (
    <div className="head bg-marronDark h-16 w-full">
      <div className="content flex justify-between w-9/12 p-4 text-white">
        <h1 className="text-3xl font-bold">IQAC</h1>
        <p className="p-1 font-thin tracking-widest"><Link href="/">Home</Link> / <Link href={`/${tab}`}>{tab}</Link> / <Link href={`/${nestedTab}`}>{nestedTab}</Link></p>
      </div>
    </div>
  );
}

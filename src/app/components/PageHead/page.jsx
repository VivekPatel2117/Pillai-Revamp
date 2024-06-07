import React from "react";
import Link from "next/link";

export default function Page({ tab, nestedTab, nestedTab2, nestedTab3 }) {
  return (
    <div className="head bg-marronDark sm:h-16 h-20 w-full">
      <div className="content flex flex-col sm:flex-row justify-between w-full px-4 sm:px-6 lg:px-8 py-2 sm:py-4 text-white">
        <h1 className="text-3xl font-bold">IQAC</h1>
        <p className="p-1 font-thin tracking-widest sm:text-base">
          <Link href="/">Home</Link> / 
          {tab &&(
            <>
          <Link href={`/${tab}`}>{tab}</Link> /{" "}
            </>
          )}
          {nestedTab &&(
            <>
          <Link href={`/${tab}/${nestedTab}`}>{nestedTab}</Link> /{" "}
            </>
          )}
          {nestedTab2 &&(
            <>
          <Link href={`/${nestedTab}/${nestedTab2}`}>{nestedTab2}</Link>{" "}
            </>
          )}
          {nestedTab3 &&(
            <>
          <Link href={`/${nestedTab2}/${nestedTab3}`}>{nestedTab3}</Link>{" "}
            </>
          )}
        </p>
      </div>
    </div>
  );
}

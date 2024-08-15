import React from "react";
import PageHead from "../components/PageHead/page";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <PageHead tab={"Programs"} />
      <div className="bg-BlueDark content h-screen flex flex-col items-center justify-center text-white">
        <div className="programs grid grid-rows-2 grid-cols-3 gap-40">
          <div className="box"><Link href={"/Programs/Media"}>
            <p className="text-center">Department of Media</p>
          </Link>
          </div>
          <div className="box"><Link href={"/Programs/Commerce-Ac"}>
            <p className="text-center">Department of Commerce & Accountancy</p>
          </Link>
          </div>
          <div className="box"><Link href={"/Programs/Finance-Eco"}>
            <p className="text-center">Department of Finance and Economics</p>
          </Link>
          </div>
          <div className="box"><Link href={"/Programs/Business"}>
            <p className="text-center">Department of Business</p>
          </Link>
          </div>
          <div className="box"><Link href={"/Programs/Computer"}>
            <p className="text-center">Department of Computer Science</p>
          </Link>
          </div>
          <div className="box"><Link href={"/Programs/Life-Sciences"}>
            <p className="text-center">Department of Life Sciences</p>
          </Link>
          </div>
          <div className="box">
            <p></p>
          </div>
          <div className="box"><Link href={"/Programs/Design"}>
            <p className="text-center">Department of Design</p>
          </Link>
          </div>
          <div className="box">
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
}

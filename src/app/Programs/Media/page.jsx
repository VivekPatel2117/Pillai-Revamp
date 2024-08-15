import React from "react";
import PageHead from "@/app/components/PageHead/page";
import mediaGirl from "../../../images/media-girl.png";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="w-screen h-screen bg-mapBg">
      <PageHead tab={"Programs"} nestedTab={"Media"}></PageHead>
      <div className="wrapper flex justify-center items-center gap-10 h-screen">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <div className="relative h-48 w-full">
            <Image
              src={mediaGirl}
              alt={"media"}
              fill={true}
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h2 className="font-bold text-xl mb-2">
              {" "}
              Bachelor of Arts in Multimedia and Mass Communication
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur pariatur blanditiis exercitationem laboriosam eaque
              enim, neque deleniti in necessitatibus perspiciatis quas ea sit
              laudantium eum beatae et recusandae sequi minus.
            </p>
            <Link href={"/Programs/BAMMC"}>
            <button className="bg-BlueDark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-marronDark">
              Learn More
            </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
          <div className="relative h-48 w-full">
            <Image
              src={mediaGirl}
              alt={"media"}
              fill={true}
              objectFit="cover"
              className="rounded-t-lg"
            />
          </div>
          <div className="p-6">
            <h2 className="font-bold text-xl mb-2">
              {" "}
              Masters of Arts in Multimedia and Mass Communication
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur pariatur blanditiis exercitationem laboriosam eaque
              enim, neque deleniti in necessitatibus perspiciatis quas ea sit
              laudantium eum beatae et recusandae sequi minus.
            </p>
            <Link href={"/Programs/MAMMC"}>
            <button className="bg-BlueDark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-marronDark">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

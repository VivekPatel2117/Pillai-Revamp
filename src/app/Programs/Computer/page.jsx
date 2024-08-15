import React from "react";
import PageHead from "@/app/components/PageHead/page";
import mediaGirl from "../../../images/media-girl.png";
import Image from "next/image";
import Link from "next/link";
export default function page() {
  return (
    <div className="w-screen h-screen bg-mapBg">
      <PageHead tab={"Programs"} nestedTab={"Computers"}></PageHead>
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
              Bachelor of Science in Information Technology
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur pariatur blanditiis exercitationem laboriosam eaque
              enim, neque deleniti in necessitatibus perspiciatis quas ea sit
              laudantium eum beatae et recusandae sequi minus.
            </p>
            <Link href={"/Programs/BSC-IT"}>
            <button className="bg-BlueDark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-marronDark">
              Learn More
            </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm h-4/5 rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
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
              Bachelor of Science in Computer Science
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link href={"/Programs/BSC-CS"}>
            <button className="bg-BlueDark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-marronDark">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>
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
              Bachelor of Computer Applications
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur pariatur blanditiis exercitationem laboriosam eaque
              enim, neque deleniti in necessitatibus perspiciatis quas ea sit
              laudantium eum beatae et recusandae sequi minus.
            </p>
            <Link href={"/Programs/BCA"}>
            <button className="bg-BlueDark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-marronDark">
              Learn More
            </button>
            </Link>
          </div>
        </div>
        <div className="max-w-sm h-4/5 rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
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
              Masters of Science in Information Technology
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link href={"/Programs/MSC-IT"}>
            <button className="bg-BlueDark text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-marronDark">
              Learn More
            </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="wrapper flex justify-center items-center gap-10 h-screen">
        <div className="max-w-sm h-4/5 rounded overflow-hidden shadow-lg bg-white m-4 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl">
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
              Masters of Science in Data Analytics
            </h2>
            <p className="text-gray-700 text-base mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <Link href={"/Programs/MSC-DA"}>
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

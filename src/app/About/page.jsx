"use client";
import React, { useEffect, useState } from "react";
import Splash from "../../images/splash.png";
import Image from "next/image";
import PageHeader from "../components/PageHead/page";
import About1 from "../../images/About1.png";
import About2 from "../../images/About2.png";
import About3 from "../../images/About3.png";
import About4 from "../../images/About4.png";
import About5 from "../../images/About5.png";
import About6 from '../../images/About6.png';
import About7 from '../../images/About7.png';
import About8 from '../../images/About8.png';

export default function Page() {
  const [showContent, setShowContent] = useState(false);

  // Simulating loading time with setTimeout
  useEffect(() => {
    setTimeout(() => {
      setShowContent(true);
    }, 1000); // Adjust the delay time as needed (in milliseconds)
  }, []);

  return (
    <div className="flex justify-center items-center">
      {!showContent && (
        <div
          className={`bg-black Ssplash-photo ${showContent ? "fade-out" : ""}`}
        >
          {/* Your splash photo goes here */}
          <Image
            src={Splash}
            height={500}
            alt="Splash Photo"
            className="w-full sm:w-auto h-auto"
          />
        </div>
      )}

      {showContent && (
        <div className="content w-full overflow-x-hidden flex flex-col">
          <PageHeader tab={"About Us"}/>
          <div className="section h-screen w-full overflow-hidden bg-mapBg">
            <div className="image h-2/3 w-screen overflow-hidden">
              <Image src={About1} alt="About1" />
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="content">
                <h1 className="pb-2 text-xl lg:text-4xl font-bold">
                  A Perfect Blend of Nature and Architecture
                </h1>
                <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-1/3 w-11/12" />
                <p className="pt-2 text-sm lg:text-2xl font-bold">
                  Makes the PCACS Campus one of the most edifying and enriching
                  cosmopolitan of knowledge. It is a home to over 50,000+
                  students from the most unique diversities of the world, coming
                  together to experience the vibrancy of PCACS Institute
                  academic journey. Take Your First Step towards this journey
                  and experience the vibrancy.
                </p>
              </div>
              <div className="box bg-marronDark lg:h-40 lg:w-16 h-4 w-screen mt-4"></div>
            </div>
          </div>
          <div className="section h-screen w-full lg:overflow-hidden bg-mapBg">
            <div className="image h-1/3 lg:h-2/3 lg:w-screen overflow-hidden">
              <Image
                src={About2}
                alt="About1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="content">
                <h1 className="pb-2 text-xl lg:text-4xl font-bold">
                  Passion for Education
                </h1>
                <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-1/3 w-11/12" />
                <p className="pt-2 text-sm lg:text-2xl font-bold">
                  The PCACS Campus is an expression of love and affection. Our
                  affection towards you, towards education and towards your
                  future is created when the two come together in perfect
                  harmony. The PCACS Institute campus ambiance creates that
                  perfect harmony, between your position and your passion,
                  taking you from where you are, to where you aspire to be.
                </p>
              </div>
              <div className="box bg-marronDark lg:h-40 lg:w-16 h-4 w-screen mt-4"></div>
            </div>
          </div>
          <div className="section h-screen w-full lg:overflow-hidden bg-mapBg">
            <div className="image h-1/3 lg:h-2/3 lg:w-screen overflow-hidden">
              <Image
                src={About3}
                alt="About1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="content">
                <h1 className="pb-2 text-xl lg:text-4xl font-bold">
                  PCACS Library
                </h1>
                <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-1/3 w-11/12" />
                <p className="pt-2 text-sm lg:text-2xl font-bold">
                  To complement your learning journey,our libraries are the
                  fountains of knowledge,overflowing with knowledge resources
                  which will edify your mind.Equipped with the most student
                  friendly facilities,every reading experience,does not only
                  guarantee you the finest comfort,but the most enriching
                  encounter with knowledge.To ensure your convenience,our
                  digital resources and libraries,are always with you whenever
                  you are.
                </p>
              </div>
              <div className="box bg-marronDark lg:h-40 lg:w-16 h-4 w-screen mt-4"></div>
            </div>
          </div>
          <div className="section h-screen w-full lg:overflow-hidden bg-mapBg">
            <div className="image h-1/3 lg:h-2/3 lg:w-screen overflow-hidden">
              <Image
                src={About4}
                alt="About1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="content">
                <h1 className="pb-2 text-xl lg:text-4xl font-bold">
                  PCACS Sports Ground
                </h1>
                <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-1/3 w-11/12" />
                <p className="pt-2 text-sm lg:text-2xl font-bold">
                  To provide students with the most engaging and energetic
                  learning experience, our well refined and fully equipped
                  sporting facilities provide students with a worthwhile outdoor
                  experience. campus is equipped with two designated basketball
                  courts, two volleyball courts, two tennis courts, two
                  badminton courts, two kabaddi grounds, along with two soccer
                  fields and a state of the art cricket ground.{" "}
                </p>
              </div>
              <div className="box bg-marronDark lg:h-40 lg:w-16 h-4 w-screen mt-4"></div>
            </div>
          </div>
          <div className="section h-screen w-full lg:overflow-hidden bg-mapBg">
            <div className="image h-1/3 lg:h-2/3 lg:w-screen overflow-hidden">
              <Image
                src={About5}
                alt="About1"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="content">
                <h1 className="pb-2 text-xl lg:text-4xl font-bold">
                PCACS  Halls and Auditorium
                </h1>
                <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-1/3 w-11/12" />
                <p className="pt-2 text-sm lg:text-2xl font-bold">
                  From the finest dramatists expressing their theatrical
                  essence, to the musical prodigies creating a resounding echo
                  of melody and with the ignited words of some the most renowned
                  speakers, PCACS auditoriums provide you with the finest
                  ambiance of expression. The stage spotlight, illuminates the
                  brilliant talent and creativity, hidden within you. So take
                  the center stage and express your talent.
                </p>
              </div>
              <div className="box bg-marronDark lg:h-40 lg:w-16 h-4 w-screen mt-4"></div>
            </div>
          </div>
          <div className="section h-screen w-full lg:overflow-hidden bg-mapBg">
            <div className="image h-1/3 lg:h-2/3 lg:w-screen overflow-hidden">
              <Image src={About6} alt="About1" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="content">
                <h1 className="pb-2 text-xl lg:text-4xl font-bold">Technical Lab</h1>
                <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-1/3 w-11/12" />
                <p className="pt-2 text-sm lg:text-2xl font-bold">PCACS  technical lab facilities  are characterized by their advanced equipment, multidisciplinary approach, emphasis on hands-on learning, commitment to safety, industry partnerships, and continuous upgradation. These labs play a crucial role in shaping the next generation of technical professionals and innovators. </p>
              </div>
              <div className="box bg-marronDark lg:h-40 lg:w-16 h-4 w-screen mt-4"></div>
            </div>
          </div>
          <div className="section h-screen w-full lg:overflow-hidden bg-mapBg">
            <div className="image h-1/3 lg:h-2/3 lg:w-screen overflow-hidden">
              <Image src={About7} alt="About1" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="content">
                <h1 className="pb-2 text-xl lg:text-4xl font-bold">PCACS  Biological Lab</h1>
                <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-1/3 w-11/12" />
                <p className="pt-2 text-sm lg:text-2xl font-bold">PCACS  biological laboratory provides an enriching environment where students can explore, experiment, and excel in their biological studies, preparing them for future endeavors in academia, research, or industry. </p>
              </div>
              <div className="box bg-marronDark lg:h-40 lg:w-16 h-4 w-screen mt-4"></div>
            </div>
          </div>
          <div className="section h-screen w-full lg:overflow-hidden bg-mapBg">
            <div className="image h-1/3 lg:h-2/3 lg:w-screen overflow-hidden">
              <Image src={About8} alt="About1" className="w-full h-full object-cover" />
            </div>
            <div className="p-4 flex flex-col md:flex-row">
              <div className="content">
                <h1 className="pb-2 text-xl lg:text-4xl font-bold">PCACS  Shotting Range</h1>
                <hr className="border-t-2 border-gray-500 lg:w-1/2 md:w-1/3 w-11/12" />
                <p className="pt-2 text-sm lg:text-2xl font-bold">PCACS  having a shooting range  signifies a commitment to holistic education and the promotion of sportsmanship, skill development, and community engagement. It provides students with opportunities to explore their interests, develop talents, and excel in both academic and extracurricular pursuits.</p>
              </div>
              <div className="box bg-marronDark lg:h-40 lg:w-16 h-4 w-screen mt-4"></div>
            </div>
          </div>
          
        </div>
      )}
    </div>
  );
}

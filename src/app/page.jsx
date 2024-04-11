import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/navbar/page";
import FlowingText from "./components/FlowingText/page";
import PillaiLogo from "../images/pillai-logo.png"
import PillaiLogo1 from "../images/pillai-logo-1.png"
import Component1 from "../images/Component-1.png"
import Rectangle1 from "../images/Rectangle1.png";
import Rectangle2 from "../images/Rectangle2.png";
import Rectangle3 from "../images/Rectangle3.png";
import News1 from "../images/news-1.png";
import News2 from "../images/news-2.png";
import News3 from "../images/news-3.png";
import Workshop from "../images/workshops.png";
import { FaInstagram,FaLinkedin,FaFacebook,FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ImageWithHoverText from "./components/ImageWithHoverText/page";
export default function Home() {
  return (
    <>
    <div className="bg-background h-screen bg-cover">
    <Navbar/>
    <div className="w-full bg-marron mt-3 overflow-hidden">
      <FlowingText/>
    </div>
    <div className="sm:h-auto sm:w-auto flex justify-center items-center mt-40">
      <Image
      className="sm:h-auto sm:w-auto"
        src={PillaiLogo}
        sizes="(max-width: 250px)"
        // className="w-full h-auto"
      />
      <Image
      className="sm:h-auto sm:w-auto"
        src={PillaiLogo1}
        sizes="(max-width: 250px)"
        height={250}
        // className="w-full h-auto"
      />
    </div>
    
    </div>
    <div className="bg-component text-white sm:text-black sm:bg-mapBg bg-cover">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="left">
        <h1 className="text-sm sm:text-5xl text-center font-bold">The Beginning</h1>
        <br />
        <ul className="list-disc pl-4 text-sm sm:text-2xl">
          <li>Established legacy of over 25 years</li>
          <br />
          <li>Premier institution for higher education</li>
          <br />
          <li>Rigorous curriculum delivered by passionate faculty</li>
          <br />
          <li>High-tech learning environment</li>
          <br />
          <li>Holistic development emphasized</li>
          <br />
          <li>Vibrant clubs, sports, and cultural activities</li>
          <br />
          <li>Industry-oriented programs</li>
          <br />
          <li>Strong placement support</li>
          <br />
          <li>Supportive network of peers and mentors</li>
          
        </ul>
       
      </div>
    <div className="hidden sm:flex sm:mb-8 sm:justify-end">
      <Image 
      src={Component1}
      sizes="(max-width: 250px)"
      alt="Old Picture"
      className="sm:h-auto w-auto"
      />
         </div>
       </div>
    </div>
    <div className="bg-feature bg-cover h-full">
      <h1 className="sm:text-5xl sm:p-28 p-12 font-mono text-xl text-white font-extrabold">Inspire and Excel at Pillai</h1>
      <div className="mb-40">

      <div className="sm:pl-28 grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        <div className="bg-white">
          <Image 
          className="p-4"
          src={Rectangle1}
          alt="Features"
          />
          <div className="content p-2 mb-6">
          <h1 className="font-bold sm:text-2xl">Professional Development Program</h1>
          <p>Description of excellent facility about classes</p>
          </div>
        </div>
        <div className="bg-white">
          <Image 
          className="p-4"
          src={Rectangle2}
          alt="Features"
          />
          <div className="content p-2 mb-6">
          <h1 className="font-bold sm:text-2xl">Modern In-house facilities</h1>
          <p>In-house facilities like a hotel, a restaurant, a café, a culinary, a travel bureau, a state of the art computer laboratory & training centers were built to maximize learning and provide a wholistic approach to education.     </p>
          </div>
        </div>
        <div className=" bg-white">
          <Image 
          className="p-4"
          src={Rectangle3}
          // height={100}
          // width={150}
          alt="Features"
          />
          <div className="content p-2 mb-6">
          <h1 className="font-bold sm:text-2xl">Sports Champions</h1>
          <p>Some text description according to the article can be posted here.</p>
          </div>
        </div>
      </div>
      </div>
     </div>
     <div className="academics">
      <h1 className="text-5xl font-bold p-8 text-marronDark">Academics And Facility ----------</h1>
    <div className="grid grid-cols-1 p-4 gap-6 md:grid-cols-3 mb-10">
    <div className="col1 h-auto bg-orange-50">
      <h1 className="p-2 bg-marronDark  font-bold">Bachelor's Program</h1>
      <ul className="pl-8 list-disc">
        <li className="hover:underline">B.Com</li>
        <li className="hover:underline">B.Com.A&F</li>
        <li className="hover:underline">B.Com.F.M</li>
        <li className="hover:underline">B.C.A</li>
        <li className="hover:underline">B.M.S</li>
        <li className="hover:underline">B.A.M.M.C</li>
        <li className="hover:underline">B.Sc.C.S</li>
        <li className="hover:underline">B.Sc.I.T</li>
        <li className="hover:underline">B.Sc.B.T</li>
        <li className="hover:underline">B.Sc.Economics</li>
        <li className="hover:underline">B.B.A.(Honors)</li>
        <li className="hover:underline">B.B.A.(Digital Marketing)</li>
        <li className="hover:underline">B.Sc.(Honors) Fashion Design & Technology</li>
      </ul>
    </div>
    <div className="col2 h-auto bg-orange-50">
      <div className="row1 mb-2 h-auto">
        <h1 className="p-2 bg-marronDark font-bold">Ph.D Program</h1>
        <ul className="pl-8 list-disc">
          <li className="hover:underline">Business Policy & Administration</li>
          <li className="hover:underline">Accountancy</li>
          <li className="hover:underline">Business Economics</li>
        </ul>
      </div>
      <hr /><hr /><hr /><hr /><hr /><hr /><hr /><hr />
      {/* <br /> */}
      <div className="row2">
        <h1 className="p-2 bg-marronDark font-bold">PG Diploma</h1>
        <ul className="pl-8 list-disc">
          <li className="hover:underline">PG Diploma in HR Analytics</li>
          <li className="hover:underline">PG Diploma in Event Management</li>
          <li className="hover:underline">PG Diploma in Film Making</li>
          <li className="hover:underline">PG Diploma in Health Care Management</li>
          <li className="hover:underline">PG Diploma in Data Science</li>
        </ul>
      </div>
    </div>
    <div className="col3 h-auto bg-orange-50">
      <h1 className="p-2 bg-marronDark font-bold">Masters Program</h1>
      <ul className="pl-8 list-disc">
        <li className="hover:underline">M.A. M.C.J</li>
        <li className="hover:underline">M.Com</li>
        <li className="hover:underline">M.Sc.I.T</li>
        <li className="hover:underline">M.Sc.B.T</li>
        <li className="hover:underline">M.Sc.Data Analytics</li>
      </ul>
    </div>
    </div>
  </div>
  <div className="news-events">
    <div className="head font-bold text-3xl p-8 bg-marronDark">NEWS AND EVENTS</div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
    <div className="bg-red-50 sm:bg-none">
    <ImageWithHoverText
        imageUrl={News1}
        hoverText="National Service Scheme (NSS) Event for Blood Donation"
      />
       <div className="block sm:hidden content">
          <h1 className="font-bold sm:text-2xl">National Service Scheme (NSS) is a youth-focused initiative aimed at promoting social responsibility and community service among students. One of the most impactful activities organized under NSS is blood donation camps. These camps play a crucial role in addressing the constant need for blood in medical emergencies and surgeries.</h1>
          </div>
        </div>
        <div className="sm:bg-none bg-blue-50">
        <ImageWithHoverText
        imageUrl={News2}
        hoverText="Celebrating Every National Event"
      />
          <div className="block sm:hidden content">
          <h1 className="font-bold sm:text-2xl">Celebrating national functions in college is a wonderful way to foster patriotism, cultural diversity, and a sense of unity among students and faculty members. These celebrations provide opportunities for learning, reflection, and participation in various activities that highlight the rich heritage and values of the nation</h1>
          </div>
        </div>
        <div className="sm:bg-none bg-orange-50">
        <ImageWithHoverText
        imageUrl={News3}
        hoverText="Encouraging Students with Internship Fair's and Exhibition"
      />
          <div className="block sm:hidden content p-2 mb-6">
          <h1 className="font-bold sm:text-2xl">Encouraging students through internship fairs and exhibitions in college is a proactive approach to preparing them for the professional world. These events provide invaluable opportunities for students to explore career options, gain practical experience, and connect with potential employers.</h1>
          </div>
        </div>
    </div>
  </div>
  <div className="text-black">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="left">
        <Image 
      src={Workshop}
      sizes="(max-width: 250px)"
      alt="Old Picture"
      className="ml-10 sm:h-auto sm:ml-40 w-auto"
      />
       
      </div>
    <div className="sm:justify-end">
      <h1 className="mb-4 sm:mt-40 text-xl sm:text-5xl font-bold">Workshops and Seminars for Life long Learning</h1>
      <p className=" text-base sm:text-2xl">We're inviting the top creatives in the world leaders of industry from all over the world to come learn,grow,scrape their knees,try new things,to be vulnerable,and to have epic adventures</p>
     
         </div>
       </div>
    </div>
    <div className="footer text-white bg-marronDark">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 mb-20">
    <div className="div-1">
          <div className="content p-2 ">
            <h1 className="text-2xl">Contact</h1>
            <hr />
            <h1 className="mt-2">Pillai College of Arts Commerce and Science</h1>
          <ul className="leading-8">
            <li>Dr. K. M. Vasudevan Pillai Campus</li>
            <li>Plot No. 10, Sector 16</li>
            <li>New Panvel</li>
            <li>Navi Mumbai - 410 206</li>
            <li>Maharashtra,India</li>
            <li>022-2745 1700/ 6100/ 6030/ <br /> 2748 1764</li>
            <li className="hover:underline">www.pcacs.ac.in</li>
            <li className="Hover:underline">pcacs@mes.ac.in</li>
            <li className="hover:underline">admissions@mes.ac.in</li>
          </ul>
          </div>
        </div>
        <div className="div-2">
          <div className="content p-2">
            <h1 className="text-2xl">Online Portals</h1>
            <hr />
            <ul className="mt-4 leading-10">
              <li className="hover:underline">Online Railway Concession</li>
              <li className="hover:underline">Online Student Portal</li>
              <li className="hover:underline">Online Attendance Portal</li>
              <li className="hover:underline">Online Library Portal</li>
            </ul>
          </div>
        </div>
        <div className="div-3">
          <div className="content p-2">
            <h1 className="text-2xl">Quick Links</h1>
            <hr />
            <ul className="leading-10">
              <li className="hover:underline">About Us</li>
              <li className="hover:underline">Programs Offered</li>
              <li className="hover:underline">Admissions</li>
              <li className="hover:underline">IQAC</li>
              <li className="hover:underline">Community</li>
            </ul>
          </div>
        </div>
    </div>
    <div className="flex justify-center">
    <div className="icons flex justify-between w-1/3">
      <FaInstagram
      size={75}/>
      <FaLinkedin
      size={75}/>
      <FaFacebook
      size={75}/>
      <FaSquareXTwitter
      size={75}/>
      <FaYoutube
      size={75}/>
    </div>
    </div>
  </div>
    </>
  );
}

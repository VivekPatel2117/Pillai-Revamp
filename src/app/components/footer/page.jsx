import React from "react";
import { FaInstagram,FaLinkedin,FaFacebook,FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import Link from "next/link";
export default function page() {
  return (
    <div>
      <div className="footer text-white bg-marronDark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2 mb-20">
          <div className="div-1">
            <div className="content p-2 ">
              <h1 className="text-2xl">Contact</h1>
              <hr />
              <h1 className="mt-2">
                Pillai College of Arts Commerce and Science
              </h1>
              <ul className="leading-8">
                <li>Dr. K. M. Vasudevan Pillai Campus</li>
                <li>Plot No. 10, Sector 16</li>
                <li>New Panvel</li>
                <li>Navi Mumbai - 410 206</li>
                <li>Maharashtra,India</li>
                <li>
                  022-2745 1700/ 6100/ 6030/ <br /> 2748 1764
                </li>
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
                <li className="hover:underline"><Link to={"/Admin/AdminLogin/"}>Admin Login</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="icons flex justify-between w-1/3">
            <FaInstagram size={75} />
            <FaLinkedin size={75} />
            <FaFacebook size={75} />
            <FaSquareXTwitter size={75} />
            <FaYoutube size={75} />
          </div>
        </div>
      </div>
    </div>
  );
}

import {  FaHome, FaUser, FaAtom, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-scroll/modules";


export function Navbar() {
  return (
    <div className="fixed top-[30%] sm:left-6 left-3">
      <ul className="flex flex-col gap-6">
        <li className="relative text-2xl sm:text-3xl bg-indigo-600 text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer group">
          <div className="hidden lg:block absolute left-14 bottom-1 group-hover:opacity-100 duration-300 opacity-0 py-2 px-3 bg-indigo-600 rounded-full">
            <p className="text-base">Home</p>
          </div>
          <Link to="home" smooth= {true} duration={500}>
            <FaHome />
          </Link>
        </li>
        <li className="relative text-2xl sm:text-3xl bg-indigo-600 text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer group">
          <div className="hidden lg:block absolute left-14 bottom-1 group-hover:opacity-100 duration-300 opacity-0 py-2 px-3 bg-indigo-600 rounded-full">
            <p className="text-base">About</p>
          </div>
          <Link to="about"  smooth= {true}   duration={500}>
            <FaUser />
          </Link>
        </li>
        <li className="relative text-2xl sm:text-3xl bg-indigo-600 text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer group">
          <div className="hidden lg:block absolute left-14 bottom-1 group-hover:opacity-100 duration-300 opacity-0 py-2 px-3 bg-indigo-600 rounded-full">
            <p className="text-base">Projects</p>
          </div>
          <Link to="project"   smooth= {true} duration={500}>
            <FaAtom />
          </Link>
        </li>
        <li className="relative text-2xl sm:text-3xl bg-indigo-600 text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer group">
          <div className="hidden lg:block absolute left-14 bottom-1 group-hover:opacity-100 duration-300 opacity-0 py-2 px-3 bg-indigo-600 rounded-full">
            <p className="text-base">Contact</p>
          </div>
          <Link to="contact" smooth= {true}   duration={500}>
            <FaRegEnvelope />
          </Link>
        </li>
      </ul>
    </div>
  );
}

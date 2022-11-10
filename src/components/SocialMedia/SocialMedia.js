import { useContext } from "react";
// import { Link } from "react-router-dom";


import {
  FaHome,
  FaUser,
  FaRegEnvelope,
  FaAtom,
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";


export function SocialMedia() {
  return (
    <div className="fixed top-[30%] sm:right-6 right-3">
    <ul className="flex flex-col gap-6">
  
   
      <li className="relative group text-2xl sm:text-3xl bg-blue-600 text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
        <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-blue-600 rounded-full">
          <p className="text-base">Linkedin</p>
        </div>
        <a
          href="https://www.linkedin.com/in/zimarlen-silva/"
          target={"_blank"}
        >
          <FaLinkedin />
        </a>
      </li>
      <li className="relative group text-2xl sm:text-3xl bg-[#171515] text-white p-2 rounded-full hover:scale-125 duration-300 cursor-pointer">
        <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3 bg-[#171515] rounded-full">
          <p className="text-base">Github</p>
        </div>
        <a href="https://github.com/ZihSilva" target={"_blank"}>
          <FaGithub />
        </a>
      </li>
    </ul>
  </div>
  );
}



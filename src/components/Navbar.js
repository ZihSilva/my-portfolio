import { FaHome, FaUser, FaAtom, FaRegEnvelope } from "react-icons/fa";
import { Link } from "react-scroll/modules";

export function Navbar() {
  return (
    <div className="fixed top-[30%] sm:left-6 left-3">
      <ul className="flex flex-col gap-4 lg:gap-10">
        <li className="relative text-xl sm:text-2xl md:text-4xl bg-transparent text-green text-opacity-75  dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer group">
          <div className="hidden lg:block absolute left-14 bottom-1 group-hover:opacity-100 duration-300 opacity-0 py-2 px-3 rounded-full">
            <p className="text-base">Home</p>
          </div>
          <Link to="home" smooth={true} duration={500}>
            <FaHome />
          </Link>
        </li>
        <li className="relative text-xl sm:text-2xl md:text-4xl  bg-transparent text-green text-opacity-75  dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer group">
          <div className="hidden lg:block absolute left-14 bottom-1 group-hover:opacity-100 duration-300 opacity-0 py-2 px-3 bg-dark-green rounded-full">
            <p className="text-base">About</p>
          </div>
          <Link  to="about" smooth={true} duration={500}>
            <FaUser/>
          </Link>
        </li>
        <li className="relative text-xl sm:text-2xl md:text-4xl  bg-transparent text-green text-opacity-75  dark:text-white p-3  rounded-full hover:scale-125 duration-300 cursor-pointer group">
          <div className="hidden lg:block absolute left-14 bottom-1 group-hover:opacity-100 duration-300 opacity-0 py-2 px-3 bg-dark-green rounded-full">
            <p className="text-base">Projects</p>
          </div>
          <Link  to="project" smooth={true} duration={500}>
            <FaAtom  className="hover:spin" />
          </Link>
        </li>
        <li className="relative text-xl sm:text-2xl md:text-4xl bg-transparent text-green text-opacity-75  dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer group">
          <div className="hidden lg:block absolute left-14 bottom-1 group-hover:opacity-100 duration-300 opacity-0 py-2 px-3 bg-dark-green rounded-full">
            <p className="text-base">Contact</p>
          </div>
          <Link to="contact" smooth={true} duration={500}>
            <FaRegEnvelope  className="hover:pulse" />
          </Link>
        </li>
      </ul>
    </div>
  );
}

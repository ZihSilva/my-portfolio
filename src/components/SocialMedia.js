import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { Link } from "react-router-dom";

export function SocialMedia() {
  return (
    <div className="fixed top-[35%] sm:right-4 right-3 lg:mt-10">
      <ul className="flex flex-col ml-3 gap-6 lg:gap-10">
        <li className="relative group text-xl sm:text-2xl md:text-4xl lg:text-4xl bg-bg-transparent text-green text-opacity-75  dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80 duration-300 opacity-0 py-2 px-3  rounded-full">
            <p className="text-base">Linkedin</p>
          </div>
          <a
            href="https://www.linkedin.com/in/zimarlen-silva/"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaLinkedin  className="hover:socialMedia"/>
          </a>
        </li>
        <li className="relative group text-xl sm:text-2xl md:text-4xl lg:text-4xl  bg-bg-transparent text-green text-opacity-75   dark:text-white p-3 rounded-full hover:scale-125 duration-300 cursor-pointer">
          <div className="hidden lg:block absolute right-14 bottom-1 group-hover:opacity-80  duration-300 opacity-0 py-2 px-3 rounded-full">
            <p className="text-base">Github</p>
          </div>
          <a
            href="https://github.com/ZihSilva"
            target={"_blank"}
            rel="noreferrer"
          >
            <FaGithub className="hover:socialMedia"/>
          </a>
        </li>
      </ul>
    </div>
  );
}


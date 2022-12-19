import profilePhoto from "../../images/profilePhoto.jpeg";
import { Link } from "react-scroll";

export function HomePage() {
  return (
    <div
  
      className="bg-indigo-300 dark:bg-slate-900 dark:text-white  w-full h-96 flex-col flex items-center font-myfont"
    >
      <div className="w-2/3 mx-auto flex  justify-center items-center flex-row md:w-full h-full">
        <div className="sm:flex gap-2 items-center">
          <div className=" w-40 h-40 mt-14 mb-8 sm:w-60 md:w-70 lg:w-60 sm:mr-4">
            <img
              src={profilePhoto}
              alt="profile"
              className="rounded-full w-full justify-center object-cover h-full shadow-md ring-8 ring-blue-200 ring-offset-8  sm:rounded-full md:rounded-full lg:rounded-full sm:mx-4 sm:mr-2 md:ml-2"
            />
          </div>
          <div className="mt-8 pl-4 sm:pl-6 sm:pt-8 md:pl-4">
            <p className="text-white text-xl sm:text-xl mb-1">My Name is</p>
            <h1 className="text-white  text-3xl sm:text-3xl md:text-5xl lg:text-6xl mb-1 font-bold">
              Zimarlen Silva
            </h1>
            <p className="text-white text-md sm:text-2xl mb-1">
              I'm a Front-End Web Developer
            </p>
            <Link to="contact" smooth={true} duration={500}>
            <button
              className="py-1 px-1 mb-10 mt-2 border-2 border-indigo-700 bg-indigo-700 rounded-lg text-white font-bold uppercase hover:bg-transparent hover:text-indigo-700 duration-300">
             Hire Me
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

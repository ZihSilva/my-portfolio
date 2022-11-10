import * as Scroll from 'react-scroll';
import image1 from "../../images/profilephoto.jpeg"
// import { Link } from 'react-router-dom';



export function HomePage() {
  return (
 
    <div
    name="home"
    className="bg-gradient-to-r from-indigo-300 to-indigo-500 dark:bg-slate-900 dark:text-white h-screen w-full flex-col flex items-center font-myfont xs:pl-8"
  >
    <div className="w-2/3 mx-auto h-full flex flex-col justify-center items-center sm:flex-row">
      <div className="sm:flex gap-4 items-center">
        <div className="h-50 w-60  xs:w-50 sm:w-70 md:w-70 lg:w-60 sm:mr-4 sm:ml-6">
          <img
            src={image1}
            alt="profile"
            className="rounded-full w-full object-cover h-full shadow-md ring-8 ring-blue-200 ring-offset-8  xm:rounded-ful sm:rounded-full md:rounded-full lg:rounded-full sm:mx-4 sm:mr-2 md:ml-2"
          />
        </div>
        <div className="mt-6 pl-2 sm:pl-6 md:pl-4">
          <p className="text-white text-4xl sm:text-xl mb-1">My Name is</p>
          <h1 className="text-white  text-6xl sm:text-4xl md:text-5xl lg:text-6xl mb-1 font-bold">Zimarlen Silva</h1>
          <p className="text-white text-xl sm:text-2xl mb-1">I'm a Front-End Web Developer</p>
          <a href="work" duration={500}>
            <button className="ml-20 mt-5 py-3 px-5 sm:p-2 xs:p-2 border-2 border-blue-200 bg-blue-300 rounded-lg text-white text-l font-bold uppercase hover:bg-transparent hover:text-indigo-700 duration-300">
             Projects
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}



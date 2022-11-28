import image2 from "../../images/VIL.png";
import image3 from "../../images/TSW.png";
import image4 from "../../images/Tranquili-Tea.png";
import image5 from "../../images/danceschool.png";
import { FaDownload } from "react-icons/fa";

export function Project() {

  return (
    <div
      name="project"
      className="bg-indigo-300 dark:bg-slate-900 dark:text-white min-h-screen py-20 max-h-full w-full flex-col flex items-center font-myfont justify-center"
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="text-white sm:text-6xl text-3xl border-b-4 border-indigo-700 inline">
          Projects
          </h1>
        </div>
        <div className="mt-20 md:mt-8 grid md:grid-cols-2 gap-6">
        <div
            style={{
              backgroundImage:
              `url(${image2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Vancouver Island Life</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                A blog about life in Vancouver Island
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://travelsite.zihsilva.com/"
                    className="cursor-pointer block"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-indigo-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
              `url(${image3})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>TSW-Travel Safety for Women</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                  A website for solo travelers
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://tsw.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-indigo-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{
              backgroundImage:
              `url(${image4})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Tranquili-Tea</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                  An e-commerce and forum about teas for well-being
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://tranquili-tea.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-indigo-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        <div
            style={{
              backgroundImage:
              `url(${image5})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Dance School</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                  A landing page for a dance school
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://leapforwarddanceschool.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                    rel="noreferrer"
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-indigo-600 border-4 bg-white border-white text-indigo-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

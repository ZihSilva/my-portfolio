import { FaDownload } from "react-icons/fa";
import image1 from  '../../images/whoIsTheVillain.png'


export function Project() {
return (
    <div name="project"
    className="bg-gradient-to-r from-indigo-300 to-indigo-500 min-h-screen py-20 max-h-full flex-clo flex items-center front-myfont justify-center ">
    <div
    className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <h1 className="sm:text-6xl text-3xl border-b-4 border-indigo-700 inline">
            My projects
        </h1>
    </div>
    <div className="mt-5 md:mt-8 grid md:grid-cols-2 gap-6">
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:{image1},
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-indigo-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Villain Quiz</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                 A Quiz About Movie Villains
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.gandhi_quotes"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-indigo-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:
                'url("https://tsw.netlify.app/")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-indigo-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>TSW</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                  A Travel Website For Solo Women
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.igCapApp"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-indigo-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:
                'url(")',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-indigo-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Tranquili-Tea</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                  A tea e-commerce and a forum to talk about teas.
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                  href="https://tranquili-tea.netlify.app/"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-indigo-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
          {/* Works Container Starts */}
          <div
            style={{
              backgroundImage:
                'url()',
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="w-full md:h-60 h-48 group rounded-md shadow-lg overflow-hidden shadow-[#040c16]"
          >
            <div className="w-full h-full bg-indigo-700 opacity-0 hover:opacity-100 duration-300">
              <div className="relative p-2 md:p-8 h-full w-full text-2xl text-white font-bold">
                <p>Ballet Website</p>
                <p className="text-xl font-normal text-gray-200 mt-2">
                  A ballet landing page
                </p>
                <div className="absolute right-2 bottom-2">
                  <a
                    href="https://play.google.com/store/apps/details?id=com.hanuman.chalisa.app.with.meaning"
                    className="cursor-pointer block"
                    target={"_blank"}
                  >
                    <FaDownload className="cursor-pointer text-5xl rounded-full p-1 hover:bg-transparent hover:text-white border-4 bg-white border-white text-indigo-700 duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Works Container Ends */}
        </div>
      </div>
    
)
}
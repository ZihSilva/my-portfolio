import React from "react";
import Skills from "./Skills";


export function AboutMe() {
  return (
    <div
      name="about"
      className="bg-beige dark:bg-slate-900 dark:text-white flex w-full justify-center flex-col items-center "
    >
      <div className="w-2/3 sm:w-3/5 lg:w-9/12 mt-10 flex flex-col justify-center">
        <div className="text-center font-bold">
          <h1 className="text-slate-600 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            About Me
          </h1>
        </div>
        <div className="grid sm:ml-3 md:gap-2 mt-6 md:pt-3 ">
          <div className="text-slate-400 dark:text-white md:flex-cols-2 px-6 pb-2 text-md sm:text-lg md:text-xl lg:text-2xl "></div>
          <div className="relative tada bg-rose rounded border-rose h-12 w-2/5 sm:w-28 ml-3 lg:ml-20">
            <span className="flex  justify-center mt-1 text-white text-xl sm:text-2xl">
              hello.
            </span>
            <div className="left-[39px] absolute bg-rose bottom-0 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-5 h-5  border-r border-b border-rose"></div>
          </div>
           
          <div className="px-3 pt-6 lg:px-6 lg:pt-8 pb-8 text-slate-600">
            <h2 className=" dark:text-white ml-2 lg:ml-14 text-2xl  md:text-3xl lg:text-4xl font-semibold">
              I'm Zimarlen, a front-end web developer.
            </h2>
            <div block>
              <p className="font-light dark:text-white mt-8 text-lg lg:px-14 lg:text-xl lg:mt-4">
                I specialize in creating{" "}
                <span className="text-xl font-bold text-blue-200">
                  beautiful, usable, and professional{" "}
                </span>
                websites. A year ago, I made a career transition from teaching in
                a lively preschool to becoming a web developer. I'm thrilled to
                be working in an industry that marries my two passions: logic
                and creative design.
              </p>
              <p className="font-light dark:text-white text-lg mt-4 lg:text-xl lg:px-14">
                Today, I'm proficient in{" "}
                <span className="font-bold text-blue-200">
                  HTML, CSS, JavaScript, React, and Tailwind,
                </span>{" "}
                and I'm always eager to learn more.
                <p>
                  When I'm not coding, I love being in nature and I'm also a big
                  fan of mindfulness practices like yoga and meditation, as well
                  as diverse music genres.
                </p>
                <p>
                  I'm always looking for creative people to vibe with, let's
                  connect through my social channels.
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Skills />
    </div>
  );
}
import React from "react";

export function AboutMe() {


  return (
    <div
      name="about"
      className="bg-indigo-400 dark:bg-slate-900 dark:text-white h-screen w-full  flex-col flex items-center font-myfont "
    >
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
          <h1 className="text-white sm:text-4xl text-3xl border-b-4 border-indigo-600 inline">
            About Me
          </h1>
        </div>
        <div className="grid md:grid-cols-2 md:gap-6 mt-5 md:pt-3">
          <div className="text-white sm:text-xl md:text-2xl text-3xl font-bold md:text-right">
            <p>Hi, I'm Zimarlen Silva. Welcome to my portfolio.</p>
          </div>
          <div className="text-base md:text-lg mt-2 md:mt-0">
            <p className="md:text-md md:text-left text-white">
            I’m a web developer working to build clean, readable and accessible
            code using HTML, CSS and React. My background in Education and Law has
            helped me develop a set of soft skills beyond coding, including:
            problem-solving, critical thinking, strong interpersonal and
            communication skills. I enjoy putting my ideas into digital form and
            bringing them to life.  Currently, I’m seeking
            opportunities that will allow me to grow professionally and
            personally.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

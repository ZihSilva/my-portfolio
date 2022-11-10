import React from "react";

export function AboutMe() {
  return (
    <div
      name="about"
      className="bg-gradient-to-r from-indigo-300 to-indigo-500 h-screen w-full flex-col flex items-center font-myfont">
      <div className="w-2/3 mx-auto h-full flex flex-col justify-center"></div>
      <div className="md:text-center font-bold">
        <h1 className="sm:text-6xl text-3xl border-b-4 border-blue-200 inline">
          ABout Me
        </h1>
      </div>
      <div className="grid md:grid-cols-2 md:gap-8 mt-5 md:mt-8">
        <div className="text-white md:text-2xl text-2xl font-bold md:text-right">
          <p>
            Welcome to my portfolio.
          </p>
        </div>
        <div className="text-white text-base md:text-xl mt-4 md:mt-0">
          <p className="md:text-left">
            I’m a web developer working to build clean, readable and accessible
            code using HTML, CSS, React. My background in Education and Law has
            helped me develop a set of soft skills beyond coding, including:
            problem-solving, critical thinking, strong interpersonal and
            communication skills. I enjoy putting my ideas into digital form and
            bringing them to life. My colleagues would describe me as a
            positive, hardworking individual who maintains a positive, proactive
            attitude when faced with adversity. Currently, I’m seeking
            opportunities that will allow me to grow professionally and
            personally.
          </p>
        </div>
      </div>
    </div>
  );
}

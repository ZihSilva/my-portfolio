import { useState } from "react";

export function Contact() {
  const [name, setName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [message, setMessage] = useState(" ");

  const handleSubmit = (event) => {
    console.log("handleSubmit ran");
    event.preventDefault();

    setName(" ");
    setEmail(" ");
    setMessage(" ");
  };

  return (
    <div
      name="contact"
      className="bg-beige dark:bg-slate-900 py-4 dark:text-white w-full h-auto flex-col flex items-center font-myfont  justify-center"
    >
      <div className="w-2/3  lg:w-9/12 px-4 h-full flex flex-col justify-center">
        <div className="text-center mt-4 font-bold">
        <h1 className="text-slate-600  dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5x">
            Contact Me
          </h1>
        </div>
        <div className="mt-8 w-full  sm:mx-auto md:text-lg md:w-[35rem] mx-auto lg:max-w-xl ">
          <form
            className=""
            // onSubmit={handleSubmit}
            action="https://getform.io/f/91a24ebd-c8c9-4011-a23a-20ec57fa09d4"
            method="POST"
          >
            <div className="relative">
              <input
                type="email"
                className="block w-full text-slate-300 h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-slate-700 bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                onChange={(event) => setName(event.target.value)}
                value={name}
                name="name"
                placeholder="Name"
                required
              />
            </div>

            <div className="relative mt-6">
              <input
                type="email"
                className="block w-full text-slate-300 h-12 sm:h-14 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-slate-700 bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                name="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="relative mt-6">
              <input
                type="email"
                className="placeholder:-translate-y-14 w-full h-auto text-slate-300 min-h-[10rem] max-h-[20rem] sm:h-14 py-2 px-4 text-xl sm:text-2xl font-mono outline-none border-2 border-slate-700 bg-transparent rounded-[0.6rem] transition-all duration-200 focus:bg-gray-dark-5  active:bg-gray-dark-5"
                onChange={(event) => setMessage(event.target.value)}
                value={message}
                name="message"
                placeholder="Message"
                required
              />
            </div>
            <button
              type="submit"
              onSubmit={handleSubmit}
              className="text-slate-800  w-full h-12 p-1 mb-6 mt-6 border-2 bg-white b-6 border-midnight dark:bg-slate-400 text-lg font-bold border-md rounded-lg  focus: hover:bg-slate-400 hover:text-slate-900 cursor-pointer duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

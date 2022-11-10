import React from 'react'



export function Contact() {
  return (
  <div 
    name="contact"
    className="bg-gradient-to-r from-indigo-300 to-indigo-500 min-h-screen max-h-full  w-full flex-col flex items-center font-myfont justify-center">
    <div className="w-2/3 mx-auto h-full flex flex-col justify-center">
        <div className="md:text-center font-bold">
            <h1 className="sm:text-6xl text-3xl border-b-4 border-indigo-700 inline"></h1>
        </div>
        <div className="mt-8 w-full md:w-3/4 md:mx-auto">
            <form
            action="https://getform.io/f/bc3f508c-cf89-410c-9534-d4a5ec147206"
            method="POST"
          >
            <input
              type="text"
              placeholder="Enter Your Full Name"
              name="name"
              className="w-full p-2 text-base mb-4 focus:outline-pink-700"
              required
            />
            <input 
            type="email"
            placeholder="Enter Your Email Address"
            name="email"
            className="w-full p-2 text-base mb-4 focus:outline-indigo-700 required"/>
            <input
            type="email"
            placeholder="Enter your Subject"
            name="subject"
            className="w-full p-2 text-base md-4 focus:outline-indigo-700"
            required
            />
            <textarea 
            name="message"
            className="w-full p-2 text-base mb-4 h-40 resize-none focus:outline-indigo-700"
            required
            placeholder="Enter Your Message"></textarea>
            <button 
            type="submit"
            className="w-full p-2 bg-indigo-700 text-white text-lg font-bold border-2 border-indigo-700 hover:bg-white hover:text-indigo-700 cursor-pointer duration-300">
            Send Message
            </button>
            </form>
        </div>
    </div>
</div>
  );
}
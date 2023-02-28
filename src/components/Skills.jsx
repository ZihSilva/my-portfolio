import React from 'react'

function Skills() {
    return (
        <div>

            <div
                // name="skills"
                className="bg-mainblue dark:bg-slate-900 pb-4 dark:text-white w-full flex justify-center  font-myfont"
            >
                <div className="w-full md:w-10/12 xl:w-full  flex-col lg:mr-20 md:flex-wrap">
                    <div className="text-center mt-8 font-bold">
                        <h1 className="text-slate-600 dark:text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                            Skills
                        </h1>
                    </div>
                    <ul className="grid grid-cols-2 w-50% mt-8 pr-5 sm:grid-cols-4 md:grid-cols-6 md:pr-0 lg:w-max lg:gap-10 lg:pr-0 xl">

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-slate-500 text-md">
                            <img className="h-10 flex justify-center self-center" src="https://www.svgrepo.com/show/452228/html-5.svg" alt="HTML" />
                            <p className="flex justify-center items-center mt-2">HTML</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                        <img className="h-10  contain flex justify-center self-center" src="https://www.svgrepo.com/show/452185/css-3.svg" alt="CSS3" />
                            <p className="flex justify-center items-center mt-2">CSS</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                        <img className="h-10 flex justify-center self-center" src="https://www.svgrepo.com/show/349419/javascript.svg" alt="javascript" />
                            <p className="flex justify-center items-center mt-2">Javascript</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                        <img className="h-10 flex justify-center self-center bg-white" src="https://www.svgrepo.com/show/473768/react.svg" alt="React" />
                            <p className="flex justify-center items-center mt-2">React</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                        <img className="h-10 flex justify-center self-center bg-white" src="https://seeklogo.com/images/G/github-logo-7880D80B8D-seeklogo.com.png" alt="Github" />
                            <p className="flex justify-center items-center mt-2">Github</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                        <img className="h-10 flex justify-center self-center bg-white" src="https://www.svgrepo.com/show/503445/nodejs.svg" alt="NodeJs" />  
                    <p className="flex justify-center items-center mt-2">NodeJs</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                        <img className="h-10 flex justify-center self-center" src="https://www.svgrepo.com/show/439231/mongodb.svg" alt="MongoDb" /> 
                            <p className="flex justify-center items-center mt-2">MongoDb</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                        <img className="h-10 flex justify-center self-center bg-white" src="https://www.svgrepo.com/show/353724/express.svg" alt="react" />
                        <p className="flex justify-center items-center mt-2">Express</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                            <img className="h-10 flex justify-center self-center bg-white" src="https://www.svgrepo.com/show/333609/tailwind-css.svg" alt="tailwind" />
                            <p className="flex justify-center items-center mt-2">Tailwind</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                            <img className="h-10 flex justify-center self-center" src="https://seeklogo.com/images/J/json-logo-265700B506-seeklogo.com.jpg" alt="json" />
                            <p className="flex justify-center items-center mt-2">JSON</p>
                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                            <img className="h-10 flex justify-center self-center" src="https://seeklogo.com/images/C/canva-logo-B4BE25729A-seeklogo.com.png" alt="Canva" />
                            <p className="flex justify-center items-center mt-2">Canva</p>

                        </li>

                        <li className="flex-wrap space-around w-full text-center m-3 flex-col flex justify-center  text-stone-500 text-md">
                            <img className="h-10 flex justify-center self-center bg-white" src="https://logodownload.org/wp-content/uploads/2022/12/figma-logo-0.png" alt="Figma" />
                            <p className="flex justify-center items-center mt-2">Figma</p>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Skills
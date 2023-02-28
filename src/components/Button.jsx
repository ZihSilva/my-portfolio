import { Link } from "react-scroll"


function Button() {
    return (
        <Link to="contact" smooth={true} duration={500} className="relative px-6 py-3 font-bold ml-2 mb-10 xs:px-3 xs:py-2 md:px-4 md:py-3 md:mt-4 lg:px-10 lg:py-4 mt-2 text-slate-900 group">
            <span className="absolute rounded inset-0 w-full h-full bg-white dark:bg-white"></span>
            <span className="absolute rounded inset-0 w-full h-full border-2 transition-none duration-300 ease-out transform border-midnight group-hover:translate-x-2 group-hover:translate-y-2"></span>
            <span className="relative text-slate-900 dark:text-slate-600">Hire Me</span>
        </Link>
  
    )
}
export default Button;
import logo from "../assets/logo-text.png";


const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b-1 border-slate-200 bg-white/50 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-20 py-1">

        {/* Logo */}
        <div >
        <img
             src={logo}
             alt="Tech Stack Logo"
             className="h-30 w-30 object-contain"/>
             
         </div>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex">

          {[
            "Home",
            "Technologies",
            "Projects",
            "About",
            "Contact",
          ].map((item) => (
            <a
              key={item}
              href="#"
              className="text-black transition duration-300 hover:text-pink-500"
            >
              {item}
            </a>
          ))}

        </div>

        {/* Button */}
        <button
           className=" text-black transition duration-300 hover:bg-gray-300">
                          
              Sign In
        </button>


        {/* Button */}
        <button
           className="rounded-full bg-pink-500 px-5 py-2 font-semibold text-white transition duration-300 hover:bg-pink-300">
                          
              Sign Up
        </button>

      </div>

    </nav>
  );
};

export default Navbar;
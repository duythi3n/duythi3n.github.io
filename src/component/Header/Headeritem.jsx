import { useState } from "react";
import { TfiAlignJustify, TfiClose } from "react-icons/tfi";

const Headeritem = ({ image, home, about, projects, contact, className }) => {
  // const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // đảo trạng thái khi bấm nút
  };

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          menuOpen ? "newClass" : ""
        }  ${className}`}
      >
        <div className="mx-auto px-[5%] sm:px-[5%] lg:px-[10%]">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <a href="#home">
                <img src={image} alt="Logo" className="h-20 w-auto" />
              </a>
            </div>

            {/* Menu Desktop */}
            <div className="hidden md:block">
              <div className="ml-8 flex items-center space-x-8">
                {/* Home */}
                <a
                  href="#home"
                  className="group relative px-1 py-2 text-xl font-medium transition-all md:hover:translate-y-1 md:active:scale-95 duration-300 ease-in-out"
                >
                  <span className="relative z-10 bg-gradient-to-r from-[#800d0d] to-[#910b0b] bg-clip-text text-transparent font-semibold">
                    {home}
                  </span>
                  {/* Underline effect on hover */}
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#f75555] transition-all duration-300 md:group-hover:w-full"></span>
                </a>

                {/* About */}
                <a
                  href="#about"
                  className="group relative px-1 py-2 text-xl font-medium transition-all md:hover:translate-y-1 md:active:scale-95 duration-300 ease-in-out"
                >
                  <span className="relative z-10 bg-gradient-to-r from-[#800d0d] to-[#910b0b] bg-clip-text text-transparent font-semibold">
                    {about}
                  </span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#f75555] transition-all duration-300 md:group-hover:w-full"></span>
                </a>

                {/* Projects */}
                <a
                  href="#projects"
                  className="group relative px-1 py-2 text-xl font-medium transition-all md:hover:translate-y-1 md:active:scale-95 duration-300 ease-in-out"
                >
                  <span className="relative z-10 bg-gradient-to-r from-[#800d0d] to-[#910b0b] bg-clip-text text-transparent font-semibold">
                    {projects}
                  </span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#f75555] transition-all duration-300 md:group-hover:w-full"></span>
                </a>

                {/* Contact */}
                <a
                  href="#contact"
                  className="group relative px-1 py-2 text-xl font-medium transition-all md:hover:translate-y-1 md:active:scale-95 duration-300 ease-in-out"
                >
                  <span className="relative z-10 bg-gradient-to-r from-[#800d0d] to-[#910b0b] bg-clip-text text-transparent font-semibold">
                    {contact}
                  </span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-[#f75555] transition-all duration-300 md:group-hover:w-full"></span>
                </a>
              </div>
            </div>

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className={`relative p-2 text-[#e2d3fd] hover:text-white transition-all duration-300 transform ${
                  menuOpen ? "rotate-90" : "rotate-0"
                }`}
              >
                {menuOpen ? (
                  <TfiClose size={22} />
                ) : (
                  <TfiAlignJustify size={22} />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden`}
        >
          <div className="px-4 py-6 space-y-4 bg-transparent">
            <div className="flex flex-col">
              <a
                href="#home"
                className={` px-4 py-3 text-lg font-bold bg-gradient-to-r from-[#800d0d] to-[#910b0b] bg-clip-text text-transparent hover:text-white transform transition-all duration-500 ease-in-out ${
                  menuOpen
                    ? "translate-x-0 opacity-100 delay-100"
                    : "translate-x-12 opacity-0 delay-0"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {home}
              </a>
              <a
                href="#about"
                className={` px-4 py-3 text-lg font-bold bg-gradient-to-r from-[#800d0d] to-[#910b0b] bg-clip-text text-transparent hover:text-white transform transition-all duration-500 ease-in-out ${
                  menuOpen
                    ? "translate-x-0 opacity-100 delay-200"
                    : "translate-x-12 opacity-0 delay-0"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {about}
              </a>
              <a
                href="#projects"
                className={` px-4 py-3 text-lg font-bold bg-gradient-to-r from-[#800d0d] to-[#910b0b] bg-clip-text text-transparent hover:text-white transform transition-all duration-500 ease-in-out ${
                  menuOpen
                    ? "translate-x-0 opacity-100 delay-300"
                    : "translate-x-12 opacity-0 delay-0"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {projects}
              </a>
              <a
                href="#contact"
                className={` px-4 py-3 text-lg font-bold bg-gradient-to-r from-[#800d0d] to-[#910b0b] bg-clip-text text-transparent hover:text-white transform transition-all duration-500 ease-in-out ${
                  menuOpen
                    ? "translate-x-0 opacity-100 delay-400"
                    : "translate-x-12 opacity-0 delay-0"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {contact}
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Headeritem;

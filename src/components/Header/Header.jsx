import { useState } from "react";
import { BsSunFill } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <header>
      <section
        className="relative flex items-center px-4 py-6 z-10
      bg-white"
      >
        {/* Name */}
        <div className="flex items-center">
          <div className="text-2xl font-bold text-cyan-400 mr-2">
            HUY NGUYEN
          </div>
          <BsSunFill
            size={"24px"}
            color="e9c46a"
            className="cursor-pointer"
          />
        </div>
        {/* Hamburger menu */}
        <ul className=" ml-auto text-16">
          {openMenu ? (
            <MdOutlineClose
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          ) : (
            <FiMenu
              size={"24px"}
              className="cursor-pointer"
              onClick={handleMenu}
            />
          )}
          {openMenu && (
            <div
              className="absolute w-[250px] h-screen
              flex flex-col 
              items-center justify-center    
              top-full
              shadow-neutral-50
              bg-neutral-50
              right-[-10px] 
              text-center text-stone-500"
            >
              <ul className="">
                <li className="py-4">
                  <a href="#about">Home</a>
                </li>
                <li className="py-4">
                  <a href="#skills">Skills</a>
                </li>
                <li className="py-4">
                  <a href="#projects">Projects</a>
                </li>
                <li className="py-4">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>
          )}
        </ul>
      </section>
    </header>
  );
};

export default Header;

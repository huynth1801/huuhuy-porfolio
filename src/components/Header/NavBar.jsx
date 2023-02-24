import { BsSunFill } from "react-icons/bs";
import { useState } from "react";
import "./Navbar.css";

const NavBar = () => {
  const [toggle, setToggle] = useState(false);
  const handleMenu = () => {
    setToggle(!toggle);
  };
  return (
    <header class="sticky top-0 z-10 bg-gradient-to-r from-[#6a82fb] to-[#fc5c7d] text-white">
      <section class="mx-auto flex max-w-4xl items-center justify-between p-8 md:p-6">
        <h1 class="text-3xl font-medium flex flex-row text-center items-center">
          <a href="#hero" className="mr-2">
            HUY NGUYEN
          </a>
          <BsSunFill size={"30px"} color="e9c46a" className="cursor-pointer" />
        </h1>
        {/* Hamburger menu */}
        <div>
          {toggle ? (
            <button
              id="hamburger-button"
              class="toggle-btn relative h-8 w-8 cursor-pointer text-3xl md:hidden"
              onClick={handleMenu}
            >
              <div class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            </button>
          ) : (
            <button
              id="hamburger-button"
              class="relative h-8 w-8 cursor-pointer text-3xl md:hidden"
              onClick={handleMenu}
            >
              <div class="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
            </button>
          )}
          <nav class="hidden space-x-8 text-xl md:block" aria-label="main">
            <a href="#about" class="md: hovers hover:text-[#3dc3f0]">
              About
            </a>
            <a href="#skills" class="md: hovers hover:text-[#3dc3f0]">
              Skills
            </a>

            <a href="#projects" class="md: hovers hover:text-[#3dc3f0]">
              Projects
            </a>

            <a href="#contact" class="md: hovers hover:text-[#3dc3f0]">
              Contact
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        onClick={handleMenu}
        class="top-68 justify-center 
        absolute w-full 
        origin-top flex-col 
        bg-slate-200 text-zinc-500 
        shadow-xl backdrop-sepia text-3xl"
      >
        {toggle && (
          <nav
            class="flex min-h-screen flex-col items-center py-8 animate-open-menu"
            aria-label="mobile"
          >
            <a
              href="#about"
              class="w-full py-6 text-center hover:bg-neutral-300"
            >
              About
            </a>
            <a
              href="#skills"
              class="w-full py-6 text-center hover:bg-neutral-300"
            >
              Skills
            </a>
            <a
              href="#projects"
              class="w-full py-6 text-center hover:bg-neutral-300"
            >
              Projects
            </a>
            <a
              href="#contact"
              class="w-full py-6 text-center hover:bg-neutral-300"
            >
              Contact
            </a>
          </nav>
        )}
      </section>
    </header>
  );
};

export default NavBar;

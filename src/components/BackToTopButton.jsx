import { TfiArrowCircleUp } from "react-icons/tfi";
import { useState, useEffect } from "react";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      } else {
        setBackToTopButton(false);
      }
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTopButton && (
        <button
          className="fixed bottom-8 right-4 z-20
            text-5xl font-bold text-sky-400 rounded-full 
            dark:text-white md:bottom-8 md:right-8
            opacity-50 hover:opacity-100 
            hover:bg-purple-300 dark:hover:bg-purple-500
            hover:text-white
           "
          onClick={scrollUp}
        >
          <TfiArrowCircleUp />
        </button>
      )}
    </div>
  );
};

export default BackToTopButton;

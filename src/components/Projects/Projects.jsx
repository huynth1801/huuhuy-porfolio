import theband from "../../assets/img/theband.png";
import food from "../../assets/img/food.png";
import nike from "../../assets/img/nike.png";
import "./projects.css";

const Projects = () => {
  return (
    <section id="projects" className="mt-12 mx-4">
      <div>
        <div className="text-[36px] font-bold text-center">
          <span>MY PROJECTS</span>
        </div>
        {/* projects */}
        <div className="my-12 mx-4">
          {/* food */}
          <div
            className="recent__project-card
            flex 
            flex-col 
            text-center 
            items-center 
            justify-center
            duration-300
            my-12"
          >
            <img
              src={food}
              alt="Food order website"
              className="w-full rounded-t-lg"
            />
            <div className="px-5 pt-6">
              <div className="text-xl font-semibold">Grab food</div>
              <div className="text-zinc-500 pt-4">
                A simple demo landing page website, i did this project to study
                TailwindCSS and responsive layout.
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-8">
              <a
                href="https://github.com/huynth1801/landing-page-tailwind"
                target="_blank"
                className="btn__link py-2 px-4 mx-4"
              >
                <button className="text-sm text-slate-600 hover">
                  View source
                </button>
              </a>
              <a
                href="https://comforting-daifuku-846607.netlify.app/"
                target="_blank"
                className="btn__link py-2 px-4"
              >
                <button className="text-sm text-slate-600 hover">
                  Visit website
                </button>
              </a>
            </div>
          </div>
          {/* Nike */}
          <div
            className="recent__project-card
            flex 
            flex-col 
            text-center 
            items-center 
            justify-center
            duration-300
            my-12"
          >
            <img
              src={nike}
              alt="Nike clone website"
              className="w-full rounded-t-lg"
            />
            <div className="px-5 pt-6">
              <div className="text-xl font-semibold">Nike</div>
              <div className="text-zinc-500 pt-4">
                Nike clone website, not responsive yet.
              </div>
            </div>
            <div className="flex flex-row justify-center items-center mt-8">
              <a
                href="https://github.com/huynth1801/NikeWebsite"
                target="_blank"
                className="btn__link py-2 px-4 mx-4"
              >
                <button className="text-sm text-slate-600 hover">
                  View source
                </button>
              </a>
              <a
                href="https://huynth1801.github.io/NikeWebsite/"
                target="_blank"
                className="btn__link py-2 px-4"
              >
                <button className="text-sm text-slate-600 hover">
                  Visit website
                </button>
              </a>
            </div>
          </div>
          {/* The band */}
          <div
            className="recent__project-card
            flex 
            flex-col 
            text-center 
            items-center 
            justify-between
            duration-300
            "
          >
            <img
              src={theband}
              alt="Food order website"
              className="w-full rounded-t-lg"
            />
            <div className="px-5 pt-3">
              <div className="text-xl font-semibold">The band</div>
              <div className="text-zinc-500 pt-4">
                A website when i studied how to build website with HTML, CSS.
              </div>
            </div>
            <div className="flex flex-row items-center justify-center mt-8">
              <a
                href="https://github.com/huynth1801/theband"
                target="_blank"
                className="btn__link py-2 px-4 mx-4"
              >
                <button className="text-sm text-slate-600 hover">
                  View source
                </button>
              </a>
              <a
                href="https://huynth1801.github.io/theband/"
                target="_blank"
                className="btn__link py-2 px-4"
              >
                <button className="text-sm text-slate-600 hover">
                  Visit website
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

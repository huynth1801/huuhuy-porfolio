import avatar from "../../assets/img/avatar.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="my-12 mx-4 justify-center items-center text-center"
    >
      <div className="text-[36px] font-bold text-center">ABOUT ME</div>
      <div className="py-8 bg-no-repeat ">
        <img src={avatar} className="rounded-xl" alt="Picture of me" />
      </div>
      <div className="mx-3 my-2">
        <p className="text-left">
          I am a hardworking and ambitious individual with a great passion for
          programming. I am currently studying website development. I have
          communication skils, self-study ability, like to study new
          technologies. I am eager to be challenged in order to grow and futher
          improve my front-end skils.
        </p>
      </div>
      <div className="py-4">
        <button
          className="transition ease-in-out delay-150 bg-red-500 
            rounded-full py-2 px-6 text-white font-semibold hover:-translate-y-1 hover:scale-110
         hover:bg-red-900 duration-300"
        >
          Download CV
        </button>
      </div>
    </section>
  );
};

export default About;

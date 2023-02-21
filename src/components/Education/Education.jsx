import "./education.css";

const Education = () => {
  return (
    <section className="">
      <div className="mt-12 mx-4">
        <div className="text-center py-4">
          <span className="text-[36px] font-bold">EDUCATION</span>
        </div>
        <div className="education my-8">
          <div className="education__time pl-6">
            <span className="time font-light text-zinc-400 ">2018 - 2022</span>
            <div className="text-[20px] font-semibold mb-4">
              Banchelor's Degree
            </div>
            <div className="">
              Electronics & Telecommunication - Ho Chi Minh City University of
              Technology
            </div>
          </div>
          <div className="education__time pl-6 pt-10">
            <span className="time font-light text-zinc-400">2023 - now</span>
            <div className="text-[20px] font-semibold mb-4">
              Banchelor's Degree
            </div>
            <div className="">Software Engineering - UEH University</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;

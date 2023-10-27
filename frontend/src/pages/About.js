import React from "react";

const About = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center">
      <p className="text-6xl w-4/5 mt-8">About the project</p>

      <div className="flex flex-col h-3/5 w-full justify-center items-center mt-5">
        <p className="text-4xl font-extrabold w-4/5 mb-4">Goals</p>
        <div className="flex justify-center">
          <div className="h-3/5 w-2/5 ">
            <p className="text-xl font-extrabold">Developers: </p> A challenge
            in developing advanced interactions (between virtual hands and lab
            equipment, steering wheelchair) and advanced graphics (vials, glass,
            fluids, mixing substances, fire/explosion, smoke, boiling)
            <p className="text-xl font-extrabold mt-5">Players: </p> A
            laboratory simulator where you get a first person experience of lab
            work. You may get to pick from a number of different substances and
            machines, and see what the true to life result will be. You can
            choose to follow instructions on actual laborations, like extracting
            caffeine from tea, or if you prefer just mess around and
            accidentally set the lab on fire with the sodium+water reaction.
          </div>
          <div className="h-3/5 w-2/5 ml-2">
            <p className="text-xl font-extrabold">For society: </p>
            General education of what it is like to work in a lab, packaged as a
            fun sandbox game. The lack of insight into research environments,
            like laboratories, might make research seem less like actual science
            and more like something that is agreed upon by a select elite. This
            could lead to a lack of trust for the scientific community. By
            presenting a somewhat true to life simulation of a laboratory, the
            users can experience and explore the lab by themselves, and even
            engage in dangerous experiments in a safe way.
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

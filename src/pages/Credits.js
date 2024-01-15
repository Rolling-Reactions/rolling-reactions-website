import React from "react";

const Credits = () => {
  return (
    <div id="credits" className="flex h-full w-screen flex-col items-center pt-[100px]  ">
      <p className="text-4xl font-extrabold w-4/5"> Lessons learned</p>
      <p className="w-4/5 px-5 lg:text-xl  py-4 italic">
        When working with VR in a team it can be really helpful to have access
        to more than one VR setup, as a lot of changes need to be tested in VR
        to see that they are actually compatible with VR and that they behave as
        expected. As just one person could work hands on with the computer that
        had a VR setup, we could mostly only work on the project from regular
        set ups, leading to a lot of compatibility issues piling up and some
        progress being lost.
      </p>
      <p className="text-4xl font-extrabold w-4/5 mt-5"> Related Work</p>
      <div className="flex w-full flex-col xl:w-4/5 h-[500px] justify-evenly px-5">
        <div className="flex w-fit justify-center flex-col">
          <p className="lg:text-2xl font-bold "> VR Wheelchair </p>
          <div className="flex flex-col w-fit">
            <p className="lg:text-2xl">
              Authors: Kok Siang Ng, Kajsa Buckart, Naffas Aeki, Laura Holst,
              Hugo Heyman
            </p>
            <a
              className="lg:text-2xl"
              href="https://github.com/justinmajetich/vr-wheelchair"
            >
              {" "}
              Link
            </a>
          </div>
        </div>
        <div className="flex w-fit justify-center flex-col">
          <p className="lg:text-2xl font-bold "> Flame</p>
          <div className="flex flex-col w-fit">
            <p className="lg:text-2xl">Author: Justin Majetich 2021</p>
            <a
              className="lg:text-2xl"
              href="https://agiflameproject.github.io/"
            >
              {" "}
             Link
            </a>
          </div>
        </div>
        <div className="flex w-full justify-center flex-col">
          <p className="lg:text-2xl font-bold">
            Using Virtual Reality to Demonstrate Glove Hygiene in Introductory
            Chemistry Laboratories
          </p>
          <div className="flex flex-col w-full">
            <p className="lg:text-2xl">
              Rebecca M. Broyer, Kenny Miller, Shalini Ramachandran, Sheree Fu,
              Karen Howell, Steven Cutchin
            </p>
            <a
              className="lg:text-2xl text-xs"
              href="https://pubs.acs.org/doi/epdf/10.1021/acs.jchemed.0c00137 "
            >
              Link
            </a>
          </div>
        </div>
      </div>
      <div className="h-[200px] w-screen bg-black flex justify-center items-center">
        <p className="text-4xl font-extrabold text-white">Rolling Reactions</p>
      </div>
    </div>
  );
};

export default Credits;

import React from "react";
import Nico from "../Nico.png";
import Jingyi from "../Jingyi.jpeg";
import Simon from "../Simon.jpeg";
import Aritra from "../Aritra.jpeg";
import Anna from "../Anna.jpeg";
import Adria from "../adri.jpg"

const Team = () => {
  const members = [
    {
      name: "Jingyi Hu",
      role: "Fluid simulation, Chemical experiment developer",
      photo: Jingyi,
      mail: "jingyihu@kth.se",
      linkedIn: "https://www.linkedin.com/in/jingyi-hu-3853a41a4",
    },
    {
      name: "Simon Hallak",
      role: "",
      photo: Simon,
      mail: "shallak@kth.se",
      linkedIn: "http://linkedin.com/in/simon-hallak-2738a318b",
    },
    {
      name: "Aritra Bhakat",
      role: "",
      photo: Aritra,
      mail: "aritra@kth.se",
      linkedIn: "https://www.linkedin.com/in/aritra-bhakat/",
    },
    {
      name: "Anna Kristiansson",
      role: "Interaction, Modelling and Scene Design",
      photo: Anna,
      mail: "annakris@kth.se",
      linkedIn: "https://www.linkedin.com/in/anna-kristiansson-79b505174/",
    },
    {
      name: "Nicolas Rollino",
      role: "Web Development and Fluid simulation",
      photo: Nico,
      mail: "nsrs@kth.se",
      linkedIn: "https://www.linkedin.com/in/nicolas-rollino-262527197/",
    },
    {
        name: "Adria Cruz",
        role: "Supervisor",
        photo: Adria,
        mail: "adria.cruz@ericsson.com",
        linkedIn: "https://www.linkedin.com/in/adriacruzcebrian/",
      },

  ];
  return (
    <div id="team" className="flex flex-col h-screen w-screen justify-center items-center">
      <div className="text-6xl w-4/5">Team</div>
      <div className="flex flex-wrap justify-center h-4/5">
        {members.map((member) => {
          return (
            <div
              className="flex flex-col mt-8 w-1/4 items-center mx-8"
              key={member.name}
            >
              <img
                className="h-56 w-56 rounded-full"
                src={member.photo}
                alt=""
              />
              <div className="mt-8 font-bold">{member.name}</div>
              <div className="font-bold">Primary role:  {member.role}</div>
              <div className=" font-bold">Mail: {member.mail}</div>
              <a className="hover:underline font-bold" href={member.linkedIn}>LinkedIn</a>
              <div>

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;

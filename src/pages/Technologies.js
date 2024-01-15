import React from "react";
import { Typography } from "@material-tailwind/react";

const Technologies = () => {
  return (
    <div className="flex h-full w-screen flex-col items-center">
      <p className="text-4xl font-extrabold w-4/5">
        {" "}
        Explanation and Justification of the graphics and interaction
        technologies used and developedFor Society
      </p>
      <div className="flex flex-col w-4/5 xl:flex-row mt-5  mb-5 xl:justify-between">
        <div className="xl:w-2/5">
          <div className="py-3">
            <p className="text-2xl font-bold w-4/5"> Unity:</p>
            Unity was the primary tool used to develop the VR experience as all
            team members were already familiar with it. Unity also provides
            excellent VR tools to develop the game, has a RigidBody physics
            system and supports Zibra Effects which we used for fluid
            simulation.
          </div>
          <div className="py-3">
            <p className="text-2xl font-bold w-4/5"> HTC Vive:</p>
            The Vive is one of the most powerful modern VR headsets, and was an
            obvious choice as our project is very computationally intensive.
          </div>
          <div className="py-3">
            <p className="text-2xl font-bold w-4/5"> UnityXR toolkit:</p>
            We used Unity XR Toolkit to program VR functionality and
            interaction. It suited our needs as it handle all the interactions
            we had in our projects well, including manipulating the wheelchair,
            pressing buttons and interacting with lab equipment.
          </div>
          <div className="py-3">
            <p className="text-2xl font-bold w-4/5"> Zibra Effects:</p>
            Zibra Effects allowed us to implement a performant VR compatible
            fluid simulation for the chemical reactions and smoke effects in the
            game.
          </div>
        </div>
        <div className="xl:w-2/5">
        <div className="py-3">
            <p className="text-2xl font-bold w-4/5"> Blender:</p>
            To create models that were a bit more advanced than what would be
            easy to do in Unity, like the wheelchair and glassware, we used
            Blender.
          </div>
          <div className="py-3">
            <p className="text-2xl font-bold w-4/5"> Github:</p>
            GitHub was used for version control, which was crucial as there were
            many different features in the project which different team members
            were working on.
          </div>
          <div className="py-3">
            <p className="text-2xl font-bold w-4/5"> Trello:</p>
            Trello was used to organize weekly Agile sprints and bring structure
            to the collaboration.
          </div>
          <div className="py-3">
            <p className="text-2xl font-bold w-4/5"> Discord:</p>
            Discord was used for daily communication between team members and
            our supervisor.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Technologies;

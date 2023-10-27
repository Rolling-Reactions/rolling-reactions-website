import React from 'react'
import Nico from "../Nico.png"
import Jingyi from "../Jingyi.jpeg"
import Simon from "../Simon.jpeg"
import Aritra from "../Aritra.jpeg"
import Anna from "../Anna.jpeg"

const Team = () => {

    const members = 
    [
        {
            name: "Jingyi Hu",
            photo: Jingyi,
            mail: "jingyihu@kth.se"

        },
        {
            name: "Simon Hallak",
            photo: Simon,
            mail: "shallak@kth.se"

        },
        {
            name: "Aritra Bhakat",
            photo: Aritra,
            mail: "aritra@kth.se"

        },
        {
            name: "Anna Kristiansson",
            photo: Anna,
            mail: "annakris@kth.se"

        },
        {
            name: "Nicolas Rollino",
            photo: Nico,
            mail: "nsrs@kth.se"

        },
    ]
  return (
    <div className='flex h-screen w-screen flex-wrap justify-center'>
        {members.map(member => {
            return(
                <div className='flex flex-col mt-8 w-1/4 items-center mx-8' key={member.name}>
                    <img  className='h-80 w-80 rounded-full' src={member.photo} alt=""/>
                    <div className='mt-8'>{member.name}</div>
                    <div>Mail: {member.mail}</div>
                    <div>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Team
import React from 'react'
import {Link} from "react-scroll"

const Header = () => {
  return (
    <div className='h-20 flex justify-between mx-10 items-center'>
        <div className=' font-extrabold text-2xl'> Rolling Reactions</div>
        <div className='flex justify-around w-1/5'> 
            <Link to="about" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'> About </Link>
            <Link to="team" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'> Team </Link>
            <Link to="media" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'> Media </Link>
            <Link to="credits" spy={true} smooth={true} offset={0} duration={500} className='cursor-pointer'> Credits </Link>
        </div>
    </div>
  )
}

export default Header
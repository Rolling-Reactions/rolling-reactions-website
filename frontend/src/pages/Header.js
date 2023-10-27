import React from 'react'

const Header = () => {
  return (
    <div className='h-20 flex justify-between mx-10 items-center'>
        <div className=' font-extrabold text-2xl'> Rolling Reactions</div>
        <div className='flex justify-around w-1/5'> 
            <div className=''> About </div>
            <div className=''> Team </div>
            <div className=''> Media </div>
            <div> Credits </div>
        </div>
    </div>
  )
}

export default Header
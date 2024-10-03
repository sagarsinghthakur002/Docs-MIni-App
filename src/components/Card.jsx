import React from 'react'
import import { FaFileAlt } from "react-icons/fa";

function Card() {
  return (
    <>
      <div>

       <div className='relative w-60 h-72 rounded-[50px] bg-zinc-900/90 text-white px-8 py-10 overflow-hidden'>
       <FaFileAlt />
       <p className='text-sm leading-tight mt-5 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam libero dolores veniam.</p>
       <div className='footer absolute bottom-0 bg-sky-200 w-full h-20 left-0'></div>

       </div>

    </div>

    </>
  )
}

export default Card

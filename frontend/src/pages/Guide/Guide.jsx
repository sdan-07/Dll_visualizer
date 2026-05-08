import React from 'react'
import Definition from './Definiton'
import Properties from './Properties'
import Rules from './Rules'
import Advantages from './Advantages'

const Guide = () => {
  return (
    <>
      <div className="w-full flex flex-col justify-center items-center  md:px-43">
        <h1 className="heading text-[30px]! sm:text-[42px]! font-semibold! mb-2 text-gray-800">
          Quick Guide
        </h1>
        <p className="text-sm sm:text-lg text-gray-600 mb-8 sm:mb-11">
          Understanding Doubly Linked Lists with ease
        </p>

        <Definition />
        <Properties />
        <Rules />
        <Advantages />

       </div> 

    </>
  )
}

export default Guide
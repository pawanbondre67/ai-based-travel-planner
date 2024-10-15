// import React from 'react'

import { Link } from "react-router-dom"
import { Button } from "../ui/button"



function Hero() {

  return (
    <div className="py-2 flex flex-col items-center gap-6 mx-6">
        <h1 className="font-extrabold text-lg mt-10">
            <span className="text-[#f56551]">Discover Your Next Adventure with Al: </span>
            Personalized Itineraries at Your Fingertips</h1>

            <p className="text-sm text-gray-500 text-center">Your personal trip planner and travel curator, creating custom itineraries tailored to your interests and budget.</p>
   <Link to={'/create-trip'}>
   <Button> Get Started, Its Free</Button>
   </Link>

    </div>
  )
}

export default Hero
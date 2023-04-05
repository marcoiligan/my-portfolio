import React from 'react';
import profile from '../assets/Marco-Profile.jpeg';
import {MdOutlineKeyboardArrowRight} from 'react-icons/md';
import {Link} from 'react-scroll';

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full w-full">
                <h3 className="text-lg sm:text-3xl font-bold text-green-300 w-fit">
                    Hi, my name is 
                </h3>
                <h2 className="text-4xl sm:text-7xl font-bold text-white w-full whitespace-nowrap">
                    Marco C. Iligan
                </h2>
                <h3 className="text-2xl sm:text-5xl font-bold text-white w-fit whitespace-nowrap">
                    <span className=" text-green-500">Application Developer</span>
                </h3>
                <p className="text-gray-500 py-4 max-w-md ">
                I have 4 years of experience building and designing softwares.
                The majority of my experience lies in backend development using technologies like Spring and Django
                </p>
                
                <div>
                    <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-green-800  cursor-pointer">
                        Portfolio
                        <span className="group-hover:rotate-90 duration-300">
                        <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className="px-20">
                <img src={profile} alt="my profile" className="rounded-full mx-auto md:w-full"/>
            </div>
        </div>
    </div>
  )
}

export default Home
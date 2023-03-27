import React from 'react'
import devSearch from '../assets/portfolio/DevSearch.jpg'
import notesapp from '../assets/portfolio/notesapp.jpg'
import pong from '../assets/portfolio/Pong.jpg'
import rewordle from '../assets/portfolio/ReWordle.jpg'
import tetris from '../assets/portfolio/Tetris.jpg'

const Portfolio = () => {
    const portfolios = [
        {
            id:1,
            src: devSearch,
            demo:"",
            code:""
        },
        {
            id:2,
            src: notesapp,
            demo:"",
            code:""
        },
        {
            id:3,
            src: pong,
            demo:"",
            code:""
        },
        {
            id:4,
            src: rewordle,
            demo:"",
            code:""
        },
        {
            id:5,
            src: tetris,
            demo:"",
            code:""
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({id,src}) => 
                <div id={id} className="shadow-md shadow-gray-600 rounder-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
                        <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
                    </div>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
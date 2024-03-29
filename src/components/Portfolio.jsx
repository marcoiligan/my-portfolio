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
            code:"https://github.com/marcoiligan/dev-socialnetwork"
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
            demo:"https://replit.com/@MarcoIligan/Pong",
            code:"https://github.com/marcoiligan/Pong"
        },
        {
            id:4,
            src: rewordle,
            demo:"https://rwordle-clone.pages.dev/",
            code:"https://github.com/marcoiligan/rwordle"
        },
        {
            id:5,
            src: tetris,
            demo:"https://replit.com/@MarcoIligan/Tetris",
            code:"https://github.com/marcoiligan/Tetris"
        },
    ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {portfolios.map(({id,src,demo,code}) => 
                <div id={id} className="shadow-md shadow-gray-600 rounder-lg">
                    <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                    <div className="flex items-center justify-center">
                        {demo ? 
                        <a href={demo} rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank">Demo</a> : <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >Demo</button>
                        }
                        {code ?
                        <a href={code} rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" target="_blank">Code</a> : <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" >Code</button>
                        }
                    </div>
                    <p className="p-5 items-center justify-end">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus ullam aspernatur facere voluptates sint temporibus. Atque, dolores quos. Culpa natus suscipit optio odio quibusdam voluptatum deleniti eum, rerum modi expedita beatae maiores distinctio dolorem. Totam ipsum magnam ad incidunt delectus accusantium maxime in, quos eligendi, animi minus alias praesentium inventore!
                    </p>
                </div>
            )}
            </div>
        </div>
    </div>
  )
}

export default Portfolio
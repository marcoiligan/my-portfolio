import React, { useState } from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
import {FaGithub, FaLinkedin} from 'react-icons/fa';
import {BsFillPersonLinesFill} from 'react-icons/bs'

const NavBar = () => {
    const [nav, setNav] = useState(false);

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'portfolio'
        },
        {
            id: 4,
            link: 'experience'
        },
        {
            id: 5,
            link: 'contact'
        },
    ];

    const sociallinks = [
        {
            id:1,
            child: (
                <>
                    LinkedIn <FaLinkedin size={30}/>
                </>
            ),
            href: 'https://www.linkedin.com/in/marco-iligan-055648188/',
            style: 'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                    Github <FaGithub size={30}/>
                </>
            ),
            href: 'https://github.com/marcoiligan'
        },
        {
            id:3,
            child: (
                <>
                    Resume <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href: '/miligan_resume.pdf',
            style: 'rounded-br-md',
            download: true,
        },
    ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <div> 
            <Link to={'home'} smooth duration={500} className="text-xl cursor-pointer font-bold ml-2">Portfolio.</Link>
        </div>
        
        <ul className="hidden md:flex">
            {links.map(({id, link}) => (
                <li key={id} className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                    <Link to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
        </ul>
        <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        
        {nav && (
            // <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            <ul className="fixed top-1 left-0 w-[60%] h-full border-r bg-gradient-to-b from-black to-gray-800 text-gray-500">
                <div className="p-4 text-xl font-bold ml-2 text-white">Portfolio.</div>
            {links.map(({id, link}) => (
                <li key={id} className="px-4 border-b border-gray-600 cursor-pointer capitalize py-3 text-2xl">
                    <Link onClick={() => setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
                </li>
            ))}
            {sociallinks.map(({id,child,href,download}) =>
                <li key={id} className="px-4 border-b border-gray-600 cursor-pointer capitalize py-3 text-2xl">
                <a href={href} rel="noopener noreferrer" className="flex justify-between items-center" download={download} target="_blank">
                    {child}
                    </a>
                </li>
            )}
            </ul>
        )}

        
    </div>
  )
}

export default NavBar
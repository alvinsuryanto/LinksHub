"use client";
import Image from 'next/image';
import {
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaGithubAlt,
} from "react-icons/fa";
    
export default function Home() {

  const links = [
{
      name: "LinkedIn",
      url: "www.linkedin.com/in/alvin-suryanto-a3a39b299",
      icon: <FaLinkedinIn />,
      target: "_blank",
    },
    {
      name: "SDBS Studio",
      url: "https://sdbsstudio.my.id/",
      icon: <FaGithubAlt />,
      target: "_blank",
    },
    {
      name: "Instagram",
      url: "http://instagram.com/bosincd",
      icon: <FaInstagram />,
      target: "_blank",
    },
  ];

  return (
    <main className=" pb-2 max-w-4xl mx-auto">
      <div class="flex flex-col mx-auto p-10 text-center">
        <span className='text-4xl text-orange-500'>⌘</span>
        <h1 className='font-bold pt-3 text-xl sm:text-4xl md:text-5xl'>Arjun Aditya</h1>
        <h2 className='text-slate-500 pt-2 font-medium text-md md:text-lg'>Full Stack Engineer</h2>
         <div className="mt-6 sm:mt-8 flex justify-center  gap-2">
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target={link.target}
            className="h-14 w-14 sm:h-16 sm:w-16 lg:h-20 lg:w-20 text-slate-500 bg-white shadow-sm hover:text-red-500 text-2xl sm:text-3xl rounded-xl flex items-center justify-center border border-slate-200 hover:shadow-md duration-200"
          >
            {link.icon}
          </a>
        ))}
        </div> 
          <span className="mt-12 mx-auto bg-white hover border-slate-200 p-4  font-medium text-sm md:text-lg max-w-xl text-gray-600 text-center rounded-xl shadow-sm hover:shadow-md duration-200">Hey 🫡, I'm Nermal, I'm a MERN Stack Programmer / Financial Market Trader 🤌</span>
        <div className='mt-8 md:mt-14'>
          <h2 className='text-md sm:text-2xl md:text-3xl lg:text-4xl font-semibold'> Join My <span className='text-white bg-orange-500 hover:bg-orange-600 duration-100 cursor-pointer p-1'>Discord</span> Server </h2>
          <div className='mx-auto max-w-md p-3 mt-6 md:mt-10 justify-center bg-white shadow-sm hover:shadow-md duration-200 rounded-xl '>
            <div className='flex items-center'>
              <span className='flex items-center'>
              <Image className='rounded-full'
                width="50"
                height="50"
                  src="/command.png"
                  alt="Command Discord Server"
                  draggable={false} 
              />
              <h3 className=' pl-2 text-xs sm:text-2xl lg:text-3xl self-center font-semibold  '>Command</h3>
              </span>
            <span className='flex flex-grow justify-end self-center '><a className=' bg-black hover:bg-gray-800 duration-100 py-2 px-2 sm:px-8 text-xs sm:text-2xl  rounded-3xl font-medium text-white ' target='_blank' href='https://discord.gg/ruFEzFfruX'>Join</a></span>
            </div>
          </div>
        </div>

        <div className='mt-6 max-w-md mx-auto'>
          <div className='embed-container'>
          <iframe className='rounded-2xl p-2' 
             width="100%" height="100%" src="https://open.spotify.com/embed/track/3vZk7OAUjMtVDNC852aNqi?utm_source=generator" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
        </div>
      </div>
    </div>
    </main>
  )
}

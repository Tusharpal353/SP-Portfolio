/* import React from 'react'

const TechStack = () => {
  return (
    <div >
        <h1 className='font-bold text-2xl m-4'>Technologies</h1>
        <ul className='flex flex-wrap '>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> ReactJS</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> Javascipt</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> TailwindCSS</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> NodeJS</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> Express</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> Redux</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> GSAP</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> PostgreSQL</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> MongoDB</li>
            <li className='bg-slate-300 m-2 p-2 rounded-xl '> Docker</li>
        </ul>
    </div>
  )
}

export default TechStack */
import React from 'react';

const TechStack = () => {
  const technologies = [
    "ReactJS", "JavaScript", "TailwindCSS", "NodeJS", "Express", 
    "Redux", "GSAP", "PostgreSQL", "MongoDB", "Docker"
  ];

  return (
    <div className="mt-8">
      <h2 className="text-3xl font-bold mb-4">Technologies</h2>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-200 text-gray-800 text-sm font-medium px-2.5 py-0.5 rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;


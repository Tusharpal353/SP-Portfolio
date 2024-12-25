/* import React from 'react'
import GithubResume from "../assets/GithubResume.png"
const Projects = () => {
  return (
    <div>
        <div className='flex'>
            

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
    <a href="#">
        <img className="rounded-t-lg fit " src={GithubResume} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img className="rounded-t-lg  object-cover " src={GithubResume} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        </div>
        <div className='flex'>
            

<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow  ">
    <a href="#">
        <img className="rounded-t-lg fit " src={GithubResume} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
    <a href="#">
        <img className="rounded-t-lg fit " src={GithubResume} alt="" />
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>

        </div>
    </div>
  )
}

export default Projects */
import React from 'react';
import GithubResume from "../assets/GithubResume.png";
import Netflix from "../assets/netflixgpt.png";
import Medium from "../assets/Medium.png";
import Eatease from "../assets/eatease.png";
import { link } from 'framer-motion/client';

const ProjectCard = ({ title, description, imageSrc,link }) => (
  <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden">
    <img className="w-full h-48 object-cover" src={imageSrc} alt={title} />
    <div className="p-5">
      <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h3>
      <p className="mb-3 font-normal text-gray-700">{description}</p>
      <a href={link} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
        Link
        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
        </svg>
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projectsData = [
    {
      title: "GitHub Resume Generator",
      description: "A tool that generates a resume from your GitHub profile.",
      imageSrc: GithubResume,
      link:"https://github-resume-tusharpal.vercel.app/"
    },
    {
      title: "Netflix-Gemini",
      description: "A Gemini based netflix web app.",
      imageSrc: Netflix,
      link:"https://github.com/Tusharpal353/Netflix-GPT"
    },
    {
      title: "Medium Blogging ",
      description: "A Blogging website with real time working backend",
      imageSrc: Medium,
      link:"https://medium-blog-ten-rosy.vercel.app/"
    },
    {
      title: "Eatease",
      description: "A Reastaurant table booking app with ADMIN access.",
      imageSrc: Eatease,
      link:"https://github.com/Tusharpal353/Eatease/tree/main"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} {...project} />

      ))}
      <div className='text-2xl font-bold'>
        A notion link to my other works - <span className='text-red-500'><a href="https://knotty-cardigan-f50.notion.site/Tushar-Pal-155a2e68a299801e8f67c2fdaf2ec597">LINK</a></span>
      </div>
    </div>
  );
};

export default Projects;


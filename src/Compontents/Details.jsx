/* import React from 'react'
import Projects from './Projects'
import TechStack from './TechStack'

const Details = () => {
  return (
    <div className='w-full h-screen'>
        <h1 className='text-3xl mt-6'>Experience</h1>
        <div className='shadow-xl m-b'>
            <h1  >MERNstack Trainee</h1>
            <h1>  Techlive Solutions (6 months)</h1>
            

            <ul className='list-disc'>
              <li>Designed a scalable data model in GoLang, reducing data retrieval time by 30% and improving system performance.</li>
              <li>Built efficient data processing pipelines in GoLang, improving query speed by 25%.</li>
              <li>Optimized database interactions using parallel processing, increasing efficiency by 20%.</li>
            </ul>
        </div>
        Recent work


        <div> 

<Projects/>
        </div>
        <div>
          <TechStack/>
        </div>
    </div>
  )
}

export default Details */
import React from 'react';
import Projects from './Projects';
import TechStack from './TechStack';

const Details = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold mb-6">Experience</h1>
      <div className="bg-white shadow-xl rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-2">MERNstack Trainee</h2>
        <h3 className="text-xl text-gray-600 mb-4">Techlive Solutions (6 months)</h3>
        <ul className="list-disc pl-5 space-y-2">
          <li>Designed a scalable data model in GoLang, reducing data retrieval time by 30% and improving system performance.</li>
          <li>Built efficient data processing pipelines in GoLang, improving query speed by 25%.</li>
          <li>Optimized database interactions using parallel processing, increasing efficiency by 20%.</li>
        </ul>
      </div>

      <h2 className="text-3xl font-bold mt-8 mb-4">Recent Work</h2>
      <Projects />

      <TechStack />
    </div>
  );
};

export default Details;

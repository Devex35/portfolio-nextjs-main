import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/Howard.png';
import cryptoImg from '../public/assets/projects/Pizzaria.png'
import netflixImg from '../public/assets/projects/Blog.png'
import twitchImg from '../public/assets/projects/Photo.png'
import ProjectItem from './ProjectItem';
import NewProjectItem from './NewProjectItem';


const projects = [
  {
    title: "Howard housing manufacturing",
    image: "/assets/projects/Howard.png",
    projectURL: "/property",
    tech: "HTML anf CSS",
  },
  {
    title: "Namibias National Teachers Union",
    image: "/assets/projects/Teacher.png",
    projectURL: "/crypto",
    tech: "HTML and CSS",
  },
  {
    title: "Photography Website",
    image: "/assets/projects/Photo.png",
    projectURL: "/netflix",
    tech: "Nextjs",
  },
  {
    title: "Blog Website",
    image: "/assets/projects/Blog.png",
    projectURL: "/twitch",
    tech: "Nextjs",
  }
]

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
         {projects.map((p, i) => (
           <NewProjectItem
           key={i}
           title={p.title}
           image={p.image}
           projectUrl={p.projectURL}
           tech={p.tech}
           
           />
         ))}
          {/* <ProjectItem
            title='Property Finder'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;

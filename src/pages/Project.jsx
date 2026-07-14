import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';


const ProjectCard = ({ project }) => {
  return (
    <div className="thin-border flex flex-col h-full hover:shadow-lg transition-shadow duration-300">

      {/* Logo Placeholder */}
      <div className="
  h-40
  bg-bg-alt
  flex
  items-center
  justify-center
  border-b
  border-border-color
">

  {
  project.logo ? (

    <img
      src={`${import.meta.env.BASE_URL}${project.logo.replace(/^\//,'')}`}
      alt={project.company}
      className="
        max-h-20
        max-w-[70%]
        object-contain
      "
    />

  ) : (

    <span className="text-2xl font-bold text-text-muted opacity-50">
      Logo
    </span>

  )
  }

</div>


      <div className="p-8 flex flex-col flex-grow">

        {/* Company Info */}
        <div className="mb-6">

          <h3 className="text-xl font-bold mb-2">
            {project.company}
          </h3>


          <p className="text-sm text-text-muted uppercase tracking-wider mb-4">
            {project.role}
          </p>


          <p className="text-text-main leading-relaxed mb-6">
            {project.cardDesc}
          </p>

        </div>


        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">

          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-bg-alt text-xs text-text-muted border border-border-color"
            >
              {tag}
            </span>
          ))}

        </div>


        {/* Detail Link */}
        <Link
          to={`/project/${project.id}`}
          className="
            mt-auto
            w-full
            py-3
            thin-border
            text-sm
            tracking-wide
            hover:bg-text-main
            hover:text-white
            transition-colors
            text-center
            block
          "
        >
          查看详情
        </Link>


      </div>

    </div>
  );
};



const Project = () => {
  return (
    <div className="pt-32 pb-20 px-6 max-w-6xl mx-auto">


      {/* Page Title */}
      <h2 className="text-3xl font-serif mb-16 text-center">
        Selected Projects
      </h2>



      {/* Project Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

        {projects.map((project) => (

          <ProjectCard
            key={project.id}
            project={project}
          />

        ))}

      </div>


    </div>
  );
};


export default Project;
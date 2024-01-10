import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Description",
        image: "/images/projects/PORT.png",
        tag: ["ALL", "WEB"],
        gitUrl: "/",
        previewUrl: "/",
    },
    {
        id: 2,
        title: "Date Night Delights Project",
        description: "Description",
        image: "/images/projects/DND.png",
        tag: ["ALL", "WEB"],
        gitUrl: "https://github.com/kevbrown404/Date-Night-Delights-Frontend.git",
        previewUrl: "/",
    },
    {
        id: 3,
        title: "Restaurant Website Project",
        description: "Description",
        image: "/images/projects/RST.png",
        tag: ["ALL", "WEB"],
        gitUrl: "https://github.com/kevbrown404/Capstone_Project.git",
        previewUrl: "/",
    },
    {
        id: 4,
        title: "BlackJack Game Project",
        description: "Description",
        image: "/images/projects/BJ.png",
        tag: ["ALL", "WEB"],
        gitUrl: "https://github.com/kevbrown404/Blackjack-Game.git",
        previewUrl: "/",
    },
]

const ProjectsSection = () => {
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-white">
            My Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {projectsData.map((project) => (
            <ProjectCard 
            key={project.id} 
            title={project.title} 
            description={project.description} 
            imgUrl={project.image} 
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
        />
        ))}
        </div>
    </>
  )
}

export default ProjectsSection
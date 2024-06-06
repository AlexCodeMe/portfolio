import ProjectCard from '@/components/project-card'
import React from 'react'

const projects = [
    {
        image: '/path/to/image1.jpg',
        title: 'Project 1',
        description: 'This is a description for Project 1.',
        link: '/project1'
    },
    {
        image: '/path/to/image2.jpg',
        title: 'Project 2',
        description: 'This is a description for Project 2.',
        link: '/project2'
    },
    {
        image: '/path/to/image3.jpg',
        title: 'Project 3',
        description: 'This is a description for Project 2.',
        link: '/project2'
    },
    {
        image: '/path/to/image2.jpg',
        title: 'Project 4',
        description: 'This is a description for Project 2.',
        link: '/project2'
    },
]

export default function ProjectsPage() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4 text-light-text dark:text-dark-text">My Projects</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={index}
                        image={project.image}
                        title={project.title}
                        description={project.description}
                        link={project.link}
                    />
                ))}
            </div>
        </div>
    )
}

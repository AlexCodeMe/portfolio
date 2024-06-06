import ProjectCard from '@/components/project-card'
import React from 'react'

const projects = [
    {
        image: '/path/to/image1.jpg',
        title: 'Podcast-r',
        description: 'AI SaaS for Creating Podcasts',
        link: 'https://podcast-r.vercel.app/'
    },
    {
        image: '/path/to/image2.jpg',
        title: 'Alex AI',
        description: 'AI Chatbot',
        link: '/project2'
    },
    {
        image: '/path/to/image3.jpg',
        title: 'Web(b)uild',
        description: 'Project Management SaaS',
        link: 'https://web-b-uild.vercel.app/'
    },
    {
        image: '/path/to/image2.jpg',
        title: 'Autopilot',
        description: 'Workflow Automation SaaS',
        link: 'https://autopilot-test.vercel.app/'
    },
    {
        image: '/path/to/image2.jpg',
        title: 'Alex Finance',
        description: 'Personal Finance Web App',
        link: 'https://alex-finance.vercel.app/'
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

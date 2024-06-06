'use client'

import Link from 'next/link'
import React from 'react'

type Props = {
    image: string
    title: string
    description: string
    link: string
}

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
    // Add more projects here
]

export default function ProjectCard({
    image,
    title,
    description,
    link,
}: Props) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-light-background dark:bg-dark-background">
            <img className="w-full" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-light-text dark:text-dark-text">{title}</div>
                <p className="text-gray-700 dark:text-gray-300 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <Link href={link}>
                    <span className="inline-block bg-blue-500 text-white rounded-full px-3 py-1 text-sm font-semibold hover:bg-blue-600">
                        View Project
                    </span>
                </Link>
            </div>
        </div>

    )
}
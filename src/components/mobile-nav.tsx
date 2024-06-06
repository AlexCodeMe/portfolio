import React from 'react';
import ThemeToggle from './theme-toggle';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function MobileNav({ onClose }: { onClose: () => void }) {

  return (
    <div className="fixed top-0 left-0 h-full w-[300px] bg-light-background dark:bg-dark-background p-4 border-r-2 border-light-secondary dark:border-dark-secondary">
      <div className="flex justify-between items-center">
        Logo
        <button className="text-light-text dark:text-dark-text" onClick={onClose}>
          X
        </button>
      </div>
      <ul className="space-y-4">
        <li><Link href="/" className="text-light-text dark:text-dark-text">Home</Link></li>
        <li><Link href="/about" className="text-light-text dark:text-dark-text">About</Link></li>
        <li><Link href="/projects" className="text-light-text dark:text-dark-text">Projects</Link></li>
        <li><Link href="/contact-me" className="text-light-text dark:text-dark-text">Contact</Link></li>
        <li>
          <a href="https://github.com/AlexCodeMe"
            target="_blank" rel="noopener noreferrer"
            className='text-light-text dark:text-dark-text'
          >
            <FaGithub size={24} />
          </a>
        </li>
        <li>
          <a href='https://www.linkedin.com/in/alexander-moyer-70139415a/'
            target="_blank" rel="noopener noreferrer"
            className='text-light-text dark:text-dark-text'
          >
            <FaLinkedin size={24} />
          </a>
        </li>
        <li><ThemeToggle /></li>
      </ul>
    </div>
  )
}

'use client'

import React, { useState } from 'react'
import ThemeToggle from './theme-toggle';
import MobileNav from './mobile-nav';
import Link from 'next/link';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <nav className="bg-light-background dark:bg-dark-background p-4 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-light-text dark:text-dark-text text-xl font-bold">My Portfolio</div>
        <div className="hidden md:flex justify-between items-center space-x-8">
          <Link href="/" className="text-light-text dark:text-dark-text">Home</Link>
          <Link href="/about" className="text-light-text dark:text-dark-text">About</Link>
          <Link href="/projects" className="text-light-text dark:text-dark-text">Projects</Link>
          <Link href="/contact-me" className="text-light-text dark:text-dark-text">Contact</Link>
          <Link href="/blog" className="text-light-text dark:text-dark-text">Blog</Link>
          <a href="https://github.com/AlexCodeMe"
            target="_blank" rel="noopener noreferrer"
            className='text-light-text dark:text-dark-text'
          >
            <FaGithub size={24} />
          </a>
          <a href='https://www.linkedin.com/in/alexander-moyer-70139415a/'
            target="_blank" rel="noopener noreferrer"
            className='text-light-text dark:text-dark-text'
          >
            <FaLinkedin size={24} />
          </a>
          <ThemeToggle />
        </div>
        <button
          className="md:hidden text-light-text dark:text-dark-text"
          onClick={toggleMobileNav}
        >
          {isMobileNavOpen ? '' : '☰'}
        </button>
      </div>
      {isMobileNavOpen && (
        <div className="md:hidden">
          <MobileNav onClose={toggleMobileNav} />
        </div>
      )}
    </nav>
  )
}

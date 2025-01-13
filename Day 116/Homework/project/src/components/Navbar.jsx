import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl">MyApp</h1>
        <ul className="flex space-x-4">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link to={link.path} className="text-white">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

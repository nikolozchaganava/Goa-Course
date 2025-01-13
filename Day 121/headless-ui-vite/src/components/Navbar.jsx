import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

export default function Navbar() {
  return (
    <div className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-xl font-bold">❤️ My Website</h1>
        <Menu as="div" className="relative">
          <Menu.Button className="bg-white text-blue-600 px-4 py-2 rounded-md">
            Menu
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`block px-4 py-2 ${active ? 'bg-blue-100' : ''}`}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/about"
                  className={`block px-4 py-2 ${active ? 'bg-blue-100' : ''}`}
                >
                  About
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/contact"
                  className={`block px-4 py-2 ${active ? 'bg-blue-100' : ''}`}
                >
                  Contact
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
}

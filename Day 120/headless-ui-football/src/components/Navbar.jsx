import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

const Navbar = () => {
  return (
    <div className="bg-red-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">Football Site</h1>
        <Menu as="div" className="relative">
          <Menu.Button className="bg-white text-blue-600 px-4 py-2 rounded-md">
            Menu
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md">
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/"
                  className={`block px-4 py-2 ${
                    active ? 'bg-blue-100' : ''
                  }`}
                >
                  Home
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  to="/teams"
                  className={`block px-4 py-2 ${
                    active ? 'bg-blue-100' : ''
                  }`}
                >
                  Teams
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;

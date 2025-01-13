import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  <div className="flex flex-col items-center justify-center h-screen bg-blue-100 text-center">
    <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to Football World</h1>
    <p className="text-lg text-gray-700 mb-8">Explore the best football teams and their details.</p>
    <Link
      to="/teams"
      className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
    >
      View Teams
    </Link>
  </div>
};

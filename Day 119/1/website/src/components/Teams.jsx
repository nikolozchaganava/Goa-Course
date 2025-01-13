import React from 'react';
import { Link } from 'react-router-dom';

const teams = [
  { id: 1, name: 'Team A' },
  { id: 2, name: 'Team B' },
  { id: 3, name: 'Team C' },
];

export default function Teams() {
  <div className="p-8 bg-green-100 min-h-screen">
    <h1 className="text-3xl font-bold text-green-600 mb-6">Teams</h1>
    <ul className="space-y-4">
      {teams.map(team => (
        <li key={team.id}>
          <Link
            to={`/teams/${team.id}`}
            className="text-lg text-green-500 hover:underline"
          >
            {team.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
};

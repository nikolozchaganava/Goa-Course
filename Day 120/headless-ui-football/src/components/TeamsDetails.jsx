import React from 'react';
import { useParams } from 'react-router-dom';

const teams = [
  { id: 1, name: 'Team A', details: 'This is Team A, known for its great defense.' },
  { id: 2, name: 'Team B', details: 'This is Team B, famous for its attacking play.' },
  { id: 3, name: 'Team C', details: 'This is Team C, the underdog with big surprises.' },
];

export default function TeamsDetails() {
  const { id } = useParams();
  const team = teams.find(t => t.id === parseInt(id));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-center">
      {team ? (
        <>
          <h1 className="text-4xl font-bold text-yellow-600 mb-4">{team.name}</h1>
          <p className="text-lg text-gray-700">{team.details}</p>
        </>
      ) : (
        <p className="text-lg text-red-500">Team not found</p>
      )}
    </div>
  );
};

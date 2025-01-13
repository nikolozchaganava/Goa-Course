import React from 'react';
import { useParams } from 'react-router-dom';

const teams = [
  { id: 1, name: 'Team A', info: 'Team A is amazing!' },
  { id: 2, name: 'Team B', info: 'Team B is awesome!' },
  { id: 3, name: 'Team C', info: 'Team C is fantastic!' },
];

export default function TeamsDetails() {
  const { id } = useParams();
  const team = teams.find(t => t.id === parseInt(id));

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 text-center">
      {team ? (
        <>
          <h1 className="text-4xl font-bold text-yellow-600 mb-4">{team.name}</h1>
          <p className="text-lg text-gray-700">{team.info}</p>
        </>
      ) : (
        <p className="text-lg text-red-500">Team not found</p>
      )}
    </div>
  );
};

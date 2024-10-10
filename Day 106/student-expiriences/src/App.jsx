import React from 'react';
import Students from './StudentsList';

function App() {
  return (
    <div className='flex justify-center h-[20rem] space-y-4 bg-gray-400 gap-4 items-center'>
      {Students.map((student, index) => {
        return (
          <div key={index} className='bg-white shadow-md rounded-md p-6 h-[70%] w-[30%]'>
            <img className="w-[5rem] rounded-[50%]" src={student.image} alt={student.name} />
            <h2 className='text-xl font-bold'>{student.name}</h2>
            <p>{student.role}</p>
            <p>{student.description}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App;
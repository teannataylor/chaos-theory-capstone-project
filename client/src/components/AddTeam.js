import React, { useState } from 'react';

function AddTeam() {
  const [teamName, setTeamName] = useState('');
  const [department, setDepartment] = useState('');
  const [size, setSize] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: teamName,
      department,
      size: parseInt(size),
    };
    console.log(formData);

  
    fetch('/teams', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Team added successfully!');
     
        } else {
          console.error('Failed to add team');
        
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-full">
      <div className="border border-orange-500 shadow-lg rounded-lg p-4">
        <h1 className="text-2xl font-bold mb-4">Add Team</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="teamName" className="block font-bold">
              Team Name:
            </label>
            <input
              type="text"
              id="teamName"
              value={teamName}
              onChange={(e) => setTeamName(e.target.value)}
              className="border border-orange-500 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="department" className="block font-bold">
              Department:
            </label>
            <input
              type="text"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              className="border border-orange-500 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="size" className="block font-bold">
              Size:
            </label>
            <input
              type="number"
              id="size"
              value={size}
              onChange={(e) => setSize(e.target.value)}
              className="border border-orange-500 rounded px-3 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:scale-105 duration-300 w-full"
          >
            Add Team
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddTeam;

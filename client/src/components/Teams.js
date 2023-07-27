import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import Display from './Display';
import AddTeam from './AddTeam';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchTeamsAndEmployees = async () => {
      try {
        const response = await fetch('/teams');
        if (response.ok) {
          const teamsData = await response.json();
          setTeams(teamsData);
        } else {
          console.error('Failed to fetch teams and employees');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTeamsAndEmployees();
  }, []);

  return (
    <div>
      <NavBar />
      <Display/>
      <div className="flex justify-center">
        <h1 className="text-3xl font-bold mb-4">Teams</h1>
      </div>
      <div className="grid grid-cols-3 gap-4">
        {teams.map((team) => (
          <div
            key={team.id}
            className="border border-orange-500 shadow-lg rounded-lg hover:scale-105 duration-300 p-4"
          >
            <h2 className="text-xl font-bold mb-2">{team.name}</h2>
            <ul>
              {team.employees.map((employee) => (
                <li key={employee.id} className="flex items-center">
                  <span className="mr-2">{employee.name}</span>
                  <span className="text-sm text-gray-600">{employee.email}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <br/>
      <AddTeam/>
    </div>
  );
}

export default Teams;

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import Display from './Display';

function MyProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchMyProjects = async () => {
      try {
        const response = await fetch('/projects/profile/my-projects');
        if (response.ok) {
          const projectsData = await response.json();
          setProjects(projectsData);
        } else {
          console.error('Failed to fetch my projects');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchMyProjects();
  }, []);

  return (
    <div>
      <NavBar />
      <Display />
      <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
      <ul className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="border border-orange-200 shadow-lg rounded-lg p-4 hover:scale-105 duration-300 flex flex-col"
          >
            <Link to={`/projects/${project.id}`}>
              <h2 className="text-xl font-bold mb-2">{project.name}</h2>
            </Link>
            <Link
              to={`/projects/${project.id}`}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg mt-auto"
            >
              View
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyProjects;

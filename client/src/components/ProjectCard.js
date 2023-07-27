import React, { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/user';
import { useParams } from 'react-router-dom';
import NavBar from './NavBar';
import AddTask from './AddTask';
import Display from './Display';

function ProjectCard() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(`/projects/${id}`);
        if (response.ok) {
          const projectData = await response.json();
          setProject(projectData);
        } else {
          console.error('Failed to fetch project details');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  const handleTaskAdded = (newTask) => {
    setProject((prevProject) => ({
      ...prevProject,
      tasks: [...prevProject.tasks, newTask],
    }));
  };

  if (!project) {
    return <div>Loading...</div>;
  }

  // Filter tasks that belong to the logged-in employee
  const userTasks = project.tasks.filter((task) => task.employee_id === user.id);

  return (
    <div>
      <NavBar />
      <Display />
      <div className="border border-orange-500 rounded-lg shadow-lg hover:scale-105 duration-300 p-4">
        <h1 className="text-xl font-bold mb-2">{project.name}</h1>
        <p>Due Date: {project.due_date}</p>
        <p>Team: {project.team.name}</p>
        <p>On Time: {project.on_time ? 'Yes' : 'No'}</p>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Tasks</h2>
        <ul>
          {userTasks.map((task) => (
            <li key={task.id} className="border p-4 my-2">
              <h3 className="text-lg font-bold">{task.name}</h3>
              <p>Due Date: {task.due_date}</p>
              <p>Status: {task.status}</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4">
        <AddTask projectId={id} onTaskAdded={handleTaskAdded} />
      </div>
    </div>
  );
}

export default ProjectCard;

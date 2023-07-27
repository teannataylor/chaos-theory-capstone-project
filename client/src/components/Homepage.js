import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { UserContext } from '../context/user';
import Display from './Display';

function Homepage() {
  const { user } = useContext(UserContext);

  const renderTasks = () => {
    if (!user || !user.tasks || user.tasks.length === 0) {
      return <p>No tasks found.</p>;
    }

    // Filter tasks where status is not 'Completed'
    const incompleteTasks = user.tasks.filter((task) => task.status !== 'Completed');

    return incompleteTasks.map((task) => (
      <div key={task.id} className="border shadow-lg rounded-lg hover:scale-105 duration-300 p-4 mb-4">
        <Link to={`/tasks/${task.id}`}>
          <h3>{task.name}</h3>
        </Link>
      </div>
    ));
  };

  const renderAddProjectButton = () => {
    // Check if the logged-in user is an admin
    if (user && user.is_admin) {
      return (
        <Link to="/projects/new">
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg">
            Add Project
          </button>
        </Link>
      );
    }
    return null;
  };

  return (
    <div>
        <NavBar />
      <Display />
    <div className="flex flex-col items-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Pending Tasks:</h1>
        {renderTasks()}
        {renderAddProjectButton()}
      </div>
      <div className="text-sm text-gray-500 mt-2">
        {user && user.is_admin ? 'Admin Access' : 'Non-Admin Access'}
      </div>
    </div>
    </div>
  );
}

export default Homepage;

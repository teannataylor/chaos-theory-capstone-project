import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';
import { UserContext } from '../context/user';
import Display from './Display';

function MyTasks() {
  const { user } = useContext(UserContext);

  const renderTasks = () => {
    if (!user || !user.tasks || user.tasks.length === 0) {
      return <p>No tasks found.</p>;
    }

    return user.tasks.map((task) => (
      <div
        key={task.id}
        className="max-w-md mx-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:scale-105 duration-300"
      >
        <Link to={`/tasks/${task.id}`}>
          <h3>{task.name}</h3>
        </Link>
      </div>
    ));
  };

  return (
    <div>
    <NavBar />
    <Display />
    <div className="text-center my-6">
      <h1 className="text-4xl text-black underline text-shadow">All Tasks:</h1>
    </div>
    <div>
      {renderTasks()}
    </div>
  </div>
);
}

export default MyTasks;

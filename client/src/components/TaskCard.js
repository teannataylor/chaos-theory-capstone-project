import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Display from './Display';

function TaskCard() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTaskDetails = async () => {
      try {
        const response = await fetch(`/tasks/${id}`);
        if (response.ok) {
          const taskData = await response.json();
          setTask(taskData);
        } else {
          console.error('Failed to fetch task details');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchTaskDetails();
  }, [id]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`/tasks/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
        navigate('/tasks');
      } else {
        console.error('Failed to delete task');
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <NavBar/>
      <Display/>
    <div className="border shadow-lg rounded-lg hover:scale-105 duration-300 p-4">
      <h2 className="text-xl font-bold mb-2">{task.name}</h2>
      <p>Due Date: {task.due_date}</p>
      <p>Status: {task.status}</p>
      <div className="mt-4">
        <Link to={`/tasks/${id}/edit`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg mr-2">
            Edit Task
          </button>
        </Link>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-lg" onClick={handleDelete}>
          Delete Task
        </button>
      </div>
    </div>
    </div>
  );
}

export default TaskCard;

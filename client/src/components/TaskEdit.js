import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import NavBar from './NavBar';
import Display from './Display';

function TaskEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState({
    name: '',
    due_date: '',
    status: '',
  });


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

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/tasks/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(task),
      });

      if (response.ok) {
        // Use navigate to go to the task details page after successful update
        navigate(`/tasks/${id}`);
      } else {
        console.error('Failed to update task');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <NavBar />
      <Display />
      <div className="border shadow-lg rounded-lg hover:scale-105 duration-300 p-4">
        <h2 className="text-xl font-bold mb-4">Edit Task</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={task.name}
              onChange={handleInputChange}
              className="border border-orange-500 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="due_date" className="block font-bold">
              Due Date:
            </label>
            <input
              type="text"
              id="due_date"
              name="due_date"
              value={task.due_date}
              onChange={handleInputChange}
              className="border border-orange-500 rounded px-3 py-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="status" className="block font-bold">
              Status:
            </label>
            <input
              type="text"
              id="status"
              name="status"
              value={task.status}
              onChange={handleInputChange}
              className="border border-orange-500 rounded px-3 py-2 w-full"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg shadow-lg hover:scale-105 duration-300"
          >
            Update Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskEdit;

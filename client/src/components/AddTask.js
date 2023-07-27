import React, { useState } from 'react';

function AddTask({ projectId, onTaskAdded }) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: taskName,
      due_date: dueDate,
      status: status,
      project_id: projectId,
    };

    try {
      const response = await fetch('/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const newTask = await response.json();
        onTaskAdded(newTask);
        setTaskName('');
        setDueDate('');
        setStatus('');
      } else {
        const errorData = await response.json();
        console.error(errorData.error);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center">
      <form className="border border-orange-300 rounded-lg p-4" onSubmit={handleSubmit}>
        <div className="mb-2">
          <h1>Add a Task:</h1>
          <label htmlFor="taskName" className="font-bold">
            Task Name:
          </label>
          <input
            type="text"
            id="taskName"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="dueDate" className="font-bold">
            Due Date:
          </label>
          <input
            type="date"
            id="dueDate"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <div className="mb-2">
          <label htmlFor="status" className="font-bold">
            Status:
          </label>
          <input
            type="text"
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            required
            className="border border-gray-300 rounded-md p-2 w-full"
          />
        </div>
        <button
          type="submit"
          className="bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600"
        >
          Add Task
        </button>
      </form>
    </div>
  );
}

export default AddTask;

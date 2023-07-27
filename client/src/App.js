import Homepage from './components/Homepage';
import WelcomePage from './components/WelcomePage';
import SignUp from './components/SignUp';
import React, { useEffect, useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { UserContext } from './context/user';
import TaskCard from './components/TaskCard';
import TaskEdit from './components/TaskEdit';
import AllProjects from './components/AllProjects';
import ProjectCard from './components/ProjectCard';
import Teams from './components/Teams';
import MyProjects from './components/MyProjects';
import MyTasks from './components/MyTasks';
import AddProject from './components/AddProject';

function App() {
  const { getCurrentUser, user } = useContext(UserContext);
  const [projects,setProjects] = useState([]);


  useEffect(() => {
    fetch("/projects")
    .then(r => r.json())
    .then(projects => setProjects(projects))
  }, [])
  
  console.log(projects)

  useEffect(() => {
    if (!user) {
      getCurrentUser();
    }
  }, [user, getCurrentUser]);

  return (
    <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Homepage projects={projects}/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/projects" element={<AllProjects projects={projects} />} />
          <Route path="/projects/profile/my-projects" element={<MyProjects />} />
          <Route path="/projects/:id" element={<ProjectCard />} />
          <Route path="/projects/new" element={<AddProject />} />
          <Route path="/tasks/:id" element={<TaskCard />} />
          <Route path="/tasks/" element={<MyTasks />} />
          <Route path="/tasks/:id/edit" element={<TaskEdit />} />
          <Route path="/tasks/new" element={<WelcomePage />} />
          <Route path="/teams" element={<Teams />} />

        </Routes>
    </div>
  );
}

export default App;
import Homepage from './components/Homepage';
import WelcomePage from './components/WelcomePage';
import SignUp from './components/SignUp';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/projects" element={<WelcomePage />} />
          <Route path="/projects/:id" element={<WelcomePage />} />
          <Route path="/projects/:id/edit" element={<WelcomePage />} />
          <Route path="/projects/new" element={<WelcomePage />} />
          <Route path="/tasks" element={<WelcomePage />} />
          <Route path="/tasks/:id" element={<WelcomePage />} />
          <Route path="/tasks/new" element={<WelcomePage />} />
          <Route path="/teams" element={<WelcomePage />} />
          <Route path="/teams/:id" element={<WelcomePage />} />

        </Routes>
    </div>
  );
}

export default App;
import WelcomePage from './components/WelcomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          {/* Add more routes here */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
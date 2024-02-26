import './App.css';
import { Routes, Route } from 'react-router-dom'  
import LandingPage from './components/LandingPage';

function App() {
  return (
    <div className="Holder">
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;

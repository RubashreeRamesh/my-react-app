import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Exercise from './pages/Exercise';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">

      <Navbar />
      
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<Exercise />} />
      </Routes>

      <Footer />

    </div>
  );
}

export default App;

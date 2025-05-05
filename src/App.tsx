import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Definitions from './pages/Definitions';
import Deliberation from './pages/Deliberation';
import RugCheck from './pages/RugCheck';
import Visuals from './pages/Visuals';
import Navbar from './components/Navbar';

const App: React.FC = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/definitions" element={<Definitions />} />
                <Route path="/deliberation" element={<Deliberation />} />
                <Route path="/rug-check" element={<RugCheck />} />
                <Route path="/visuals" element={<Visuals />} />
            </Routes>
        </>
    );
};

export default App;

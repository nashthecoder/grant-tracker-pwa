import React from 'react';
import { Routes, Route } from "react-router-dom"
import './App.css';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Cover from './pages/Cover';
import Financial from './pages/Financial';
import Narrative from './pages/Narrative';
import Submission from './pages/Submission';
import NoMatch from './pages/NoMatch';

function App() {
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="cover" element={<Cover /> } />
        <Route path="financial" element={<Financial /> } />
        <Route path="narrative" element={<Narrative /> } />
        <Route path="submission" element={<Submission /> } />
        <Route path="*" element={<NoMatch /> } />
      </Routes>
    <Footer />
    </>
  );
}

export default App;

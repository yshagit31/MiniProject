import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import Registration from './components/Registration';
import './App.css';
import Navbar from './components/Navbar';

function App() {
    return (
        <div className='main'>
        <Navbar></Navbar>
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<ProductList />} />
                    <Route path="/register" element={<Registration />} />
                </Routes>
            </div>
        </Router>
        </div>
    );
}

export default App;

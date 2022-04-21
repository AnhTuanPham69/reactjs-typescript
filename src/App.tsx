/** @format */

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { Homepage } from './components/Homepage';
import Welcome from './components/Welcome';
import AuthProvider from './context/AuthProvider';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthProvider>
                    <Routes>
                        <Route element={<Welcome />} path="/" />
                        <Route element={<Homepage />} path="/login" />
                    </Routes>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

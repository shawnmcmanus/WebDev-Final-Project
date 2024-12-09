import './App.css'
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './pages/HomePage';
import EditExercisePage from './pages/EditExercisePage';
import CreateExercisePage from './pages/CreateExercisePage';
import Navigation from './components/Navigation';

/**
 * Main web app function
 * @returns Router info to each aspect of the exercise app
 */
const App = () => {
    return (
        <Router>
            <div>
                <header>
                    <h1>Exercise Tracker</h1>
                    <p>Track your workout progress with a few clicks!</p>
                </header>
                
                <Navigation/>

                <main>
                    <Routes>
                        <Route path='/' element={<Homepage/>}/>
                        <Route path="/edit/:_id" element={<EditExercisePage/>}/>
                        <Route path='/create' element={<CreateExercisePage/>}/>
                    </Routes>
                </main>

                <footer>
                    <p>{String.fromCharCode(169)} 2024 Shawn McManus</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
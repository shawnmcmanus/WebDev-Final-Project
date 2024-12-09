import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import '../App.css'

/**
 * Controls create page functionality
 * @returns form to add new exercise
 */
const CreateExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('kgs');
    const [date, setDate] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Format the date to MM-DD-YY
        const formattedDate = new Date(date).toLocaleDateString('en-US', {
            year: '2-digit',
            month: '2-digit',
            day: '2-digit',
            timeZone: 'UTC'
        }).replace(/\//g, '-');  // Replace slashes with hyphens to match MM-DD-YY format
        
        const newExercise = {
            name: name.trim(), 
            reps: Number(reps),
            weight: Number(weight),
            unit: unit, 
            date: formattedDate,  // Use the formatted date
        };
        
        console.log(newExercise);  // Log the exercise data being sent
    
        try {
            const response = await fetch('http://localhost:3000/exercises', {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(newExercise),
            });
    
            if (response.status === 201) {
                alert('Exercise updated successfully!');
                navigate('/');
            } else {
                alert('Failed to update exercise. Please check your input.');
                navigate('/');
            }
        } catch (error) {
            console.error('Error updating exercise:', error);
            alert('An unexpected error occurred. Please try again.');
            navigate('/');
        }
    };

    return (
        <div>
            <h2>Create a New Exercise</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name:
                    <input
                        type='text'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="reps">
                    Reps:
                    <input
                        type='number'
                        value={reps}
                        onChange={(e) => setReps(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="weight">
                    Weight:
                    <input
                        type='number'
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        required
                    />
                </label>
                <label htmlFor="unit">
                    Unit:
                    <select
                        value={unit}
                        onChange={(e) => setUnit(e.target.value)}
                        required
                    >
                        <option value='kgs'>kgs</option>
                        <option value='lbs'>lbs</option>
                    </select>
                </label>
                <label htmlFor="date">
                    Date:
                    <input
                        type='date'
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
                <button type='submit'>Create Exercise</button>
            </form>
        </div>
    );
};

export default CreateExercisePage;
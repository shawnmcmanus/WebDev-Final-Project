import React, { useState, useEffect } from 'react';
import ExerciseTable from '../components/ExerciseTable';

/**
 * Controls homepage functionality
 * @returns div element containing header and table functionality
 */
const HomePage = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        const fetchExercises = async () => {
            try {
                const response = await fetch("/exercises");
                if (!response.ok) {
                    throw new Error("Failed to fetch exercises");
                }
                const data = await response.json();
                setExercises(data);
            } catch (error) {
                console.log(error);
                alert("Error fetching exercises. Please try again.");
            }
        };
        fetchExercises();
    }, []);
    return (
        <div>
            <h2>Exercise Catalog</h2>
            <ExerciseTable exercises = {exercises} setExercises = {setExercises} />
        </div>
    );
};

export default HomePage;
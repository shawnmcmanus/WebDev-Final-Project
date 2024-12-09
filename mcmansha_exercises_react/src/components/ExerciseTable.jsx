import React from 'react';
import ExerciseRow from './ExerciseRow';

/**
 * Handles implementation of the exercise table
 * @param {Object} param0 properties of the exercise object and a function to 
 * update the exercise catalog
 * @returns table headers and ExerciseRow implementation
 */
const ExerciseTable = ({ exercises, setExercises }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise) => (
                    <ExerciseRow
                        key = {exercise._id}
                        exercise = {exercise}
                        setExercises = {setExercises}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default ExerciseTable;
import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

/**
 * Handles the exercise row implementation
 * @param {Object} param0 properties of the exercise object and a function to 
 * update the exercise catalog
 * @returns table row element that displays exercise info and has clickable buttons
 * to edit or delete specific exercises
 */
const ExerciseRow = ({ exercise, setExercises }) => {
    const navigate = useNavigate();

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you wish to delete this exercise?")) return;

        try {
            const response = await fetch(`exercises/${exercise._id}`, {
                method: "DELETE",
            });
            
            if (response.status === 204) {
                setExercises((postDelete) => 
                postDelete.filter((ex) => ex._id !== exercise._id));
            } else {
                alert("Failed to delete the exercise. Please try again.");
            }
        } catch (error) {
            console.error(error);
            alert("Error deleting exercise. Please try again.");
        }
    };

    const handleEdit = () => {
        navigate(`/edit/${exercise._id}`);
    };

    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td>
                <FaEdit onClick={handleEdit} style={{cursor: "pointer", marginRight: "10px"}} />
                <FaTrash onClick={handleDelete} style={{cursor: "pointer"}} />
            </td>
        </tr>
    );
};

export default ExerciseRow;
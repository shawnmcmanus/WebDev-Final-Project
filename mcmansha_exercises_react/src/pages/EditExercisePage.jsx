import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

/**
 * Handles the edit exercises page
 * @returns form that contains updated values for existing entry
 */
const EditExercisePage = () => {
  const navigate = useNavigate();
  const {_id} = useParams();

  const [name, setName] = useState('');
  const [reps, setReps] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('kgs');
  const [date, setDate] = useState('');

  useEffect(() => {
    if (!_id) {
      console.error('No id provided for editing.');
      navigate('/');
      return;
    }

    const fetchExercise = async () => {
      try {
        const response = await fetch(`/exercises/${_id}`);
        if (response.status === 200) {
          const exercise = await response.json();
          setName(exercise.name);
          setReps(exercise.reps);
          setWeight(exercise.weight);
          setUnit(exercise.unit);
          
          const formattedDate = new Date(exercise.date).toISOString().split('T')[0];
          setDate(formattedDate);
        } else {
          console.error('Exercise not found');
        }
      } catch (error) {
        console.error('Error fetching exercise:', error);
      }
    };
    fetchExercise();
  }, [_id, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !reps || !weight || !date) {
        alert("All fields are required.");
        return;
    }

    if (isNaN(reps) || isNaN(weight)) {
        alert("Reps and weight must be numbers.");
        return;
    }

    // Ensure date is in the correct format
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        timeZone: 'UTC'
    }).replace(/\//g, '-');
    if (!formattedDate) {
        alert("Invalid date format.");
        return;
    }

    const updatedExercise = { name, reps: Number(reps), weight: Number(weight), unit, date: formattedDate };
    try {
      const response = await fetch(`/exercises/${_id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(updatedExercise),
      });

      if (response.status === 200) {
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
        <h2>Update Exercise</h2>
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
            <button type='submit'>Update Exercise</button>
        </form>
    </div>
  );
};

export default EditExercisePage;

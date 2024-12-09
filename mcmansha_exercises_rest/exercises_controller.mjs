import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as exercises from './exercises_model.mjs';
import cors from 'cors';

const router = express.Router();

const validateExerciseBody = (body) => {
    const {name, reps, weight, unit, date} = body;
    
    // Check if all required properties were input
    if (!name || !reps || !weight || !unit || !date) {
        return false;
    }
    // Check if any extra properties were input
    if (Object.keys(body).length !== 5) {
        return false;
    }
    // Check that name is a non-empty string
    if (typeof name !== 'string' || name.trim() === '') {
        return false;
    }
    // Check that reps is an integer larger than 0
    if (!Number.isInteger(reps) || reps <= 0) {
        return false;
    }
    // Check that weight is an integer larger than 0
    if (!Number.isInteger(weight) || weight <= 0) {
        return false;
    }
    // Check that unit is either 'kgs' or 'lbs'
    if (unit !== 'kgs' && unit !== 'lbs') {
        return false;
    }
    // Check that date format is correct (MM-DD-YY)
    const dateFormat = /^\d\d-\d\d-\d\d$/;
    if (!dateFormat.test(date)) {
        return false;
    }
    return true;
};

// Creates an exercise
router.post('/exercises', asyncHandler(async (req, res) => {
    if (!validateExerciseBody(req.body)) {
        return res.status(400).json({Error: 'Invalid request'});
    }
    try {
        const exercise = await exercises.createExercise(req.body);
        res.status(201).json(exercise);
    } catch (error) {
        res.status(400).json({Error: 'Invalid request'});
    }
}));

// Reads all exercises
router.get('/exercises', asyncHandler(async (req, res) => {
    const exerciseList = await exercises.findExercises();
    res.status(200).json(exerciseList);
}));

// Reads one exercise based on id
router.get('/exercises/:_id', asyncHandler(async (req, res) => {
    const specificExercise = await exercises.findExerciseById(req.params._id);

    if (specificExercise === null) {
        return res.status(404).json({Error: 'Not found'});
    }
    res.status(200).json(specificExercise);
}));

// Updates one exercise based on id
router.put('/exercises/:_id', asyncHandler(async (req, res) => {
    if (!validateExerciseBody(req.body)) {
        return res.status(400).json({Error: 'Invalid request'});
    }

    const exercise = await exercises.updateExercise(req.params._id, req.body);
    if (exercise === null) {
        return res.status(404).json({Error: 'Not found'});
    }
    res.status(200).json(exercise);
}))

// Delete one exercise based on id
router.delete('/exercises/:_id', asyncHandler(async (req, res) => {
    const result = await exercises.deleteExercise(req.params._id);

    if (result === 0) {
        return res.status(404).json({Error: 'Not found'});
    }
    res.status(204).end();
}))

export default router;
// do i need this ^
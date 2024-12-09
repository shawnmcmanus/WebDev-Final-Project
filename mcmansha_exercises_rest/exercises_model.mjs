import mongoose from 'mongoose';

const exerciseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Exercise name is required'],
        trim: true,
    },
    reps: {
        type: Number,
        required: [true, 'Reps are required'],
        min: [1, 'Reps must be greater than 0'],
        validate: {
            validator: Number.isInteger,
            message: 'Reps must be an integer',
        },
    },
    weight: {
        type: Number,
        required: [true, 'Weight is required'],
        min: [1, 'Weight must be greater than 0'],
        validate: {
            validator: Number.isInteger,
            message: 'Weight must be an integer',
        },
    },
    unit: {
        type: String,
        required: [true, 'Unit is required'],
        enum: {
            values: ['lbs', 'kgs'],
            message: 'Unit must be either "lbs" or "kgs"',
        },
    },
    date: {
        type: String,
        required: [true, 'Date is required'],
        validate: {
            validator: function (date) {
                const format = /^\d\d-\d\d-\d\d$/;
                return format.test(date);   
            },
            message: 'Date must be in MM/DD/YY format',
        },
    },
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

async function createExercise(data) {
    const exercise = new Exercise(data);
    return await exercise.save();
}

async function findExercises() {
    return await Exercise.find();
}

async function findExerciseById(_id) {
    return await Exercise.findById(_id);
}

async function updateExercise (_id, data) {
    return await Exercise.findByIdAndUpdate(_id, data, {new: true, runValidators: true});
}

async function deleteExercise(_id) {
    const result = await Exercise.findByIdAndDelete(_id);
    return result ? 1 : 0;
}

export {
    createExercise, 
    findExercises, 
    findExerciseById,
    updateExercise,
    deleteExercise
};
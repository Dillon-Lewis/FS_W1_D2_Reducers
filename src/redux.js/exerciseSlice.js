import { createSlice } from "@reduxjs/toolkit";


export const exerciseSlice = createSlice({
    name: 'exercise',
    initialState: {
        workouts: {},
        completedExercises: 0
    },
    reducers: {
        addExercise: (state, action) => {
            const { id } = action.payload;
            if (state.workouts[id]) {
                state.workouts[id] += 1
            } else {
                state.workouts[id] = 1
            }
        },
        removeExercise: (state, action) => {
            const { id } = action.payload
            if (state.workouts[id]) {
                state.workouts[id] -= 1
                if (state.workouts[id] === 0) {
                delete state.workouts[id]
                }
                state.completedExercises -= 1
            }
        }
    }
})

export const { addExercise, removeExercise } = exerciseSlice.actions
export default exerciseSlice.reducer
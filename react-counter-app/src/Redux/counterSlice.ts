import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState{
    value: number
}

const initialState: CounterState = {
    value: 0,
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            if(state.value === 0){
                alert("The value can not be decremented to less than 0")
            }else{
                state.value -= 1
            }
        },
        reset:(state) => {
            state.value = 0
        }
    }
})

export const selectCount = (state: { counter: { value: number; }; }) => state.counter.value

export const {increment, decrement, reset} = counterSlice.actions

export default counterSlice.reducer
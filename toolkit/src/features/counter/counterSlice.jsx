import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    //reducer function
    incrementByAmount: (state, action) => {
      state.value += Number(action.payload);
    },
  },
});

//action creators are generated for each case reducer function
export const { increment, reset, decrement, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;

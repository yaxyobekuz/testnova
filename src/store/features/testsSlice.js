import { createSlice } from "@reduxjs/toolkit";

// Initial state
const initialState = { data: {}, hasError: false, isLoading: true };

export const testsSlice = createSlice({
  initialState,
  name: "tests",
  reducers: {
    updateTestsFromStore: (state, action) => {
      state.data[action.payload.name] = action.payload.data;
    },

    setTestsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setTestsError: (state, action) => {
      state.hasError = action.payload;
    },
  },
});

// Export actions
export const { updateTestsFromStore, setTestsError, setTestsLoading } =
  testsSlice.actions;

// Export reducer
export default testsSlice.reducer;

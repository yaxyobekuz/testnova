import { configureStore } from "@reduxjs/toolkit";

// Features
import testsSlice from "./features/testsSlice";

export default configureStore({
  reducer: {
    tests: testsSlice,
  },
});

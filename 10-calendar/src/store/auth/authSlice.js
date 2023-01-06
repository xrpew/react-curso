import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "checking", //authenticated, not-authenticated
    user: {},
    errorMessage: undefined,
  },
  reducers: {
    checking: (state) => {
        (state.status       = "checking"),
        (state.user         = {}),
        (state.errorMessage = undefined);
    },
    onLoging: (state, { payload }) => {
        (state.status       = "authenticated"),
        (state.user         = payload),
        (state.errorMessage = undefined);
    },
  },
});

// Action creators are generated for each case reducer function
export const { checking, onLoging} = authSlice.actions;

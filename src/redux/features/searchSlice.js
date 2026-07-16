import { createSlice } from "@reduxjs/toolkit";


const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    loading: false,
    error: null,
  },
  reducers: {
    setQuery: (state, actions) => {
      state.query = actions.payload;
    },
    setActiveTabs: (state, actions) => {
      state.activeTab = actions.payload;
    },
    setResults: (state, actions) => {
      state.loading = false;
      state.results = actions.payload;
    },
    setLoading: (state, actions) => {
      state.loading = true;
      state.error = null;
    },
    setError: (state, actions) => {
      state.error = actions.payload;
      state.loading = false;
    },
    clearResults: (state, actions) => {
      state.results = [];
    },
  },
});

export const {
  setQuery,
  setActiveTabs,
  setLoading,
  setError,
  setResults,
  clearResults,
} = searchSlice.actions;
export default searchSlice.reducer;
